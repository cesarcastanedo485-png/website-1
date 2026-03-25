#!/usr/bin/env node
/**
 * Crops screenshot letterboxing (black bars), uniform UI strips, and side pillarboxing
 * by combining full-width near-black row splits with per-row / per-column activity (MAD).
 */
import sharp from "sharp";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { homedir } from "os";
import { readdir } from "fs/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));

const ASSETS_DIR =
  process.env.GALLERY_ASSETS ?? join(homedir(), ".cursor/projects/d-website-1/assets");

const OUT_DIR = join(__dirname, "../public/gallery");

/** Unique substrings matching each source file in user assets (order = gallery order). */
const INPUT_IDS = [
  "792752950115013",
  "751788691198130",
  "1268557198561196",
  "1267420248141812",
  "927858653302557",
  "1576046666836918",
];

function rowMetrics(data, w, h, channels, y) {
  let black = 0;
  let sum = 0;
  const vals = new Array(w);
  for (let x = 0; x < w; x++) {
    const i = (y * w + x) * channels;
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const lum = (r + g + b) / 3;
    vals[x] = lum;
    sum += lum;
    if (r < 42 && g < 42 && b < 42) black++;
  }
  const mean = sum / w;
  let mad = 0;
  for (let x = 0; x < w; x++) mad += Math.abs(vals[x] - mean);
  mad /= w;
  return { blackPct: black / w, mad };
}

function rowMetricsBand(data, w, channels, y, x0, x1) {
  const ww = x1 - x0 + 1;
  let black = 0;
  let sum = 0;
  const vals = new Array(ww);
  for (let xi = 0; xi < ww; xi++) {
    const x = x0 + xi;
    const i = (y * w + x) * channels;
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const lum = (r + g + b) / 3;
    vals[xi] = lum;
    sum += lum;
    if (r < 42 && g < 42 && b < 42) black++;
  }
  const mean = sum / ww;
  let mad = 0;
  for (let xi = 0; xi < ww; xi++) mad += Math.abs(vals[xi] - mean);
  mad /= ww;
  return { blackPct: black / ww, mad };
}

function colMetrics(data, w, channels, y0, y1, x) {
  const hh = y1 - y0 + 1;
  let black = 0;
  let sum = 0;
  const vals = new Array(hh);
  for (let k = 0; k < hh; k++) {
    const y = y0 + k;
    const i = (y * w + x) * channels;
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const lum = (r + g + b) / 3;
    vals[k] = lum;
    sum += lum;
    if (r < 42 && g < 42 && b < 42) black++;
  }
  const mean = sum / hh;
  let mad = 0;
  for (let k = 0; k < hh; k++) mad += Math.abs(vals[k] - mean);
  mad /= hh;
  return { blackPct: black / hh, mad };
}

function findHorizontalBounds(h, blackPcts, mads) {
  const maxMad = Math.max(...mads, 1e-6);
  const minMad = Math.min(...mads);
  const madThresh = minMad + (maxMad - minMad) * 0.12;

  /** @type {Array<[number, number]>} */
  const segments = [];
  let a = 0;
  for (let y = 0; y < h; y++) {
    if (blackPcts[y] > 0.94) {
      if (a < y) segments.push([a, y - 1]);
      a = y + 1;
    }
  }
  if (a < h) segments.push([a, h - 1]);

  let best = null;
  let bestScore = -1;
  for (const [t0, t1] of segments) {
    let s = 0;
    for (let y = t0; y <= t1; y++) s += mads[y];
    const height = t1 - t0 + 1;
    const score = s * Math.sqrt(height);
    if (score > bestScore) {
      bestScore = score;
      best = [t0, t1];
    }
  }

  if (best && best[1] - best[0] + 1 >= h * 0.22) {
    let top = best[0];
    let bottom = best[1];
    for (let y = top; y <= bottom; y++) {
      if (mads[y] >= madThresh || blackPcts[y] < 0.7) {
        top = y;
        break;
      }
    }
    for (let y = bottom; y >= top; y--) {
      if (mads[y] >= madThresh || blackPcts[y] < 0.7) {
        bottom = y;
        break;
      }
    }
    if (bottom - top + 1 >= h * 0.12) return { top, bottom };
  }

  let top = 0;
  let bottom = h - 1;
  for (let y = 0; y < h; y++) {
    if (mads[y] >= madThresh || blackPcts[y] < 0.55) {
      top = y;
      break;
    }
  }
  for (let y = h - 1; y >= top; y--) {
    if (mads[y] >= madThresh || blackPcts[y] < 0.55) {
      bottom = y;
      break;
    }
  }

  let run = 0;
  for (let y = top; y <= bottom && run < 6; y++) {
    if (mads[y] < madThresh * 0.85 && blackPcts[y] > 0.88) {
      top = Math.min(bottom, y + 1);
      run++;
    } else run = 0;
  }
  run = 0;
  for (let y = bottom; y >= top && run < 6; y--) {
    if (mads[y] < madThresh * 0.85 && blackPcts[y] > 0.88) {
      bottom = Math.max(top, y - 1);
      run++;
    } else run = 0;
  }

  return { top, bottom };
}

function rowVariance(data, w, channels, y) {
  let sum = 0;
  let sumSq = 0;
  for (let x = 0; x < w; x++) {
    const i = (y * w + x) * channels;
    const lum = (data[i] + data[i + 1] + data[i + 2]) / 3;
    sum += lum;
    sumSq += lum * lum;
  }
  const mean = sum / w;
  return sumSq / w - mean * mean;
}

function rowHorizontalEdge(data, w, channels, y) {
  let s = 0;
  for (let x = 0; x < w - 1; x++) {
    const i = (y * w + x) * channels;
    const j = (y * w + x + 1) * channels;
    const g1 = (data[i] + data[i + 1] + data[i + 2]) / 3;
    const g2 = (data[j] + data[j + 1] + data[j + 2]) / 3;
    s += Math.abs(g1 - g2);
  }
  return s / (w - 1);
}

/** Merges true-runs of mask when gaps are <= maxGap (fills thin letterbox/UI bands). */
function mergeTrueRuns(mask, maxGap) {
  /** @type {Array<[number, number]>} */
  const runs = [];
  let s = -1;
  for (let y = 0; y < mask.length; y++) {
    if (mask[y] && s < 0) s = y;
    if (!mask[y] && s >= 0) {
      runs.push([s, y - 1]);
      s = -1;
    }
  }
  if (s >= 0) runs.push([s, mask.length - 1]);
  if (runs.length === 0) return [[0, mask.length - 1]];

  const merged = [runs[0]];
  for (let i = 1; i < runs.length; i++) {
    const prev = merged[merged.length - 1];
    const cur = runs[i];
    if (cur[0] - prev[1] - 1 <= maxGap) prev[1] = cur[1];
    else merged.push(cur);
  }
  return merged;
}

function trimVarianceVertical(top, bottom, rowVar, vMax) {
  const tThr = Math.max(280, vMax * 0.035);
  const bThr = Math.max(520, vMax * 0.055);
  while (top < bottom && rowVar[top] < tThr) top++;
  while (bottom > top && rowVar[bottom] < bThr) bottom--;
  return { top, bottom };
}

/** Full-frame content estimate: row variance + horizontal edge, gap-merge, asymmetric trim (social + letterbox). */
function varianceBandBounds(h, w, data, channels) {
  const rowVar = new Array(h);
  const rowEdge = new Array(h);
  for (let y = 0; y < h; y++) {
    rowVar[y] = rowVariance(data, w, channels, y);
    rowEdge[y] = rowHorizontalEdge(data, w, channels, y);
  }
  const vMax = Math.max(...rowVar, 1);
  const eMax = Math.max(...rowEdge, 1e-6);
  const vT = Math.max(38, vMax * 0.018);
  const eT = Math.max(0.52, eMax * 0.034);
  const mask = new Array(h);
  for (let y = 0; y < h; y++) {
    mask[y] = rowVar[y] > vT || rowEdge[y] > eT;
  }
  const gapMerge = Math.max(40, Math.floor(h * 0.14));
  const spans = mergeTrueRuns(mask, gapMerge);
  let bestTop = 0;
  let bestBot = h - 1;
  let bestScore = -1;
  for (const [a, b] of spans) {
    let s = 0;
    for (let y = a; y <= b; y++) s += rowVar[y] + 42 * rowEdge[y];
    const score = s * Math.sqrt(b - a + 1);
    if (score > bestScore) {
      bestScore = score;
      bestTop = a;
      bestBot = b;
    }
  }
  if (bestBot - bestTop + 1 < h * 0.12) return { top: 0, bottom: h - 1 };
  const trimmed = trimVarianceVertical(bestTop, bestBot, rowVar, vMax);
  if (trimmed.bottom - trimmed.top + 1 < h * 0.08) return { top: 0, bottom: h - 1 };
  return trimmed;
}

function findVerticalBounds(w, data, channels, top, bottom) {
  const mads = new Array(w);
  const blackPcts = new Array(w);
  for (let x = 0; x < w; x++) {
    const m = colMetrics(data, w, channels, top, bottom, x);
    mads[x] = m.mad;
    blackPcts[x] = m.blackPct;
  }

  const maxMad = Math.max(...mads, 1e-6);
  const minMad = Math.min(...mads);
  const madThresh = minMad + (maxMad - minMad) * 0.14;

  /** @type {Array<[number, number]>} */
  const segments = [];
  let a = 0;
  for (let x = 0; x < w; x++) {
    if (blackPcts[x] > 0.93) {
      if (a < x) segments.push([a, x - 1]);
      a = x + 1;
    }
  }
  if (a < w) segments.push([a, w - 1]);

  let best = null;
  let bestScore = -1;
  for (const [l0, l1] of segments) {
    let s = 0;
    for (let x = l0; x <= l1; x++) s += mads[x];
    const width = l1 - l0 + 1;
    const score = s * Math.sqrt(width);
    if (score > bestScore) {
      bestScore = score;
      best = [l0, l1];
    }
  }

  if (best && best[1] - best[0] + 1 >= w * 0.35) {
    let left = best[0];
    let right = best[1];
    for (let x = left; x <= right; x++) {
      if (mads[x] >= madThresh || blackPcts[x] < 0.75) {
        left = x;
        break;
      }
    }
    for (let x = right; x >= left; x--) {
      if (mads[x] >= madThresh || blackPcts[x] < 0.75) {
        right = x;
        break;
      }
    }
    if (right - left + 1 >= w * 0.25) return { left, right };
  }

  let left = 0;
  let right = w - 1;
  for (let x = 0; x < w; x++) {
    if (mads[x] >= madThresh || blackPcts[x] < 0.6) {
      left = x;
      break;
    }
  }
  for (let x = w - 1; x >= left; x--) {
    if (mads[x] >= madThresh || blackPcts[x] < 0.6) {
      right = x;
      break;
    }
  }
  return { left, right };
}

async function resolveInputs() {
  const files = await readdir(ASSETS_DIR).catch(() => []);
  const resolved = [];
  for (const id of INPUT_IDS) {
    const hit = files.find((f) => f.endsWith(".png") && f.includes(id));
    if (!hit) throw new Error(`Missing asset matching id ${id} in ${ASSETS_DIR}`);
    resolved.push(join(ASSETS_DIR, hit));
  }
  return resolved;
}

async function cropOne(inputPath) {
  const { data, info } = await sharp(inputPath).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const w = info.width;
  const h = info.height;
  const channels = info.channels;
  const blackPcts = new Array(h);
  const mads = new Array(h);
  for (let y = 0; y < h; y++) {
    const m = rowMetrics(data, w, h, channels, y);
    blackPcts[y] = m.blackPct;
    mads[y] = m.mad;
  }
  let { top, bottom } = findHorizontalBounds(h, blackPcts, mads);

  let padY = Math.max(2, Math.round((bottom - top + 1) * 0.004));
  top = Math.max(0, top - padY);
  bottom = Math.min(h - 1, bottom + padY);

  let { left, right } = findVerticalBounds(w, data, channels, top, bottom);
  let padX = Math.max(2, Math.round((right - left + 1) * 0.004));
  left = Math.max(0, left - padX);
  right = Math.min(w - 1, right + padX);

  const subH = bottom - top + 1;
  const subBlack = new Array(subH);
  const subMad = new Array(subH);
  for (let yi = 0; yi < subH; yi++) {
    const y = top + yi;
    const m = rowMetricsBand(data, w, channels, y, left, right);
    subBlack[yi] = m.blackPct;
    subMad[yi] = m.mad;
  }
  const vert2 = findHorizontalBounds(subH, subBlack, subMad);
  const innerH = vert2.bottom - vert2.top + 1;
  const tightenedBand = innerH < subH * 0.92 && innerH > h * 0.05;

  if (tightenedBand) {
    const bandTop = top;
    top = bandTop + vert2.top;
    bottom = bandTop + vert2.bottom;
  } else if (subH > h * 0.88) {
    const vb = varianceBandBounds(h, w, data, channels);
    if (vb.bottom - vb.top + 1 > h * 0.08) {
      top = vb.top;
      bottom = vb.bottom;
      ({ left, right } = findVerticalBounds(w, data, channels, top, bottom));
      padX = Math.max(2, Math.round((right - left + 1) * 0.004));
      left = Math.max(0, left - padX);
      right = Math.min(w - 1, right + padX);
    }
  }

  return {
    left,
    top,
    width: right - left + 1,
    height: bottom - top + 1,
  };
}

async function main() {
  const inputs = await resolveInputs();
  const { mkdir } = await import("fs/promises");
  await mkdir(OUT_DIR, { recursive: true });

  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    const region = await cropOne(input);
    const out = join(OUT_DIR, `gallery-${String(i + 1).padStart(2, "0")}.jpg`);
    await sharp(input).extract(region).jpeg({ quality: 88, mozjpeg: true }).toFile(out);
    console.log(out, region);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
