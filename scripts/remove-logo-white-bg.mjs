#!/usr/bin/env node
/**
 * Removes white/near-white background from region-razzles-logo.png
 * Creates a new PNG with transparency where white was.
 * Requires: npm install sharp
 */
import sharp from "sharp";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const inputPath = join(__dirname, "../public/region-razzles-logo.png");
const outputPath = join(__dirname, "../public/region-razzles-logo-transparent.png");

const WHITE_THRESHOLD = 245; // Pixels with R,G,B all above this become transparent

async function main() {
  const meta = await sharp(inputPath).metadata();
  const { width: W, height: H } = meta;
  // Crop center square (logo is typically centered in the 1376x768 banner)
  const size = Math.min(W, H);
  const left = Math.floor((W - size) / 2);
  const top = Math.floor((H - size) / 2);

  const { data, info } = await sharp(inputPath)
    .extract({ left, top, width: size, height: size })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const newData = Buffer.alloc(data.length);

  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = channels === 4 ? data[i + 3] : 255;

    const isNearWhite =
      r >= WHITE_THRESHOLD && g >= WHITE_THRESHOLD && b >= WHITE_THRESHOLD;

    newData[i] = r;
    newData[i + 1] = g;
    newData[i + 2] = b;
    newData[i + 3] = isNearWhite ? 0 : a;
  }

  await sharp(newData, {
    raw: { width, height, channels: 4 },
  })
    .png()
    .toFile(outputPath);

  console.log("Created:", outputPath);
  console.log("Replace region-razzles-logo.png with this file to use transparent version.");
}

main().catch(console.error);
