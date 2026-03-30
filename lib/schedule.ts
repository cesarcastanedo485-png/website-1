/** Season year shown on calendars and used for game-date parsing. */
export const SEASON_YEAR = 2026;

/**
 * Authoritative game dates (local calendar days). Update here only; UI and copy derive from this list.
 * Initial values match the site’s published schedule wording (June 6–11 window + 29, July, August).
 */
export const GAME_DATES = [
  "2026-06-06",
  "2026-06-07",
  "2026-06-08",
  "2026-06-09",
  "2026-06-10",
  "2026-06-11",
  "2026-06-29",
  "2026-07-09",
  "2026-07-30",
  "2026-08-13",
  "2026-08-29",
] as const;

export type GameDateIso = (typeof GAME_DATES)[number];

const gameDaySet = new Set<string>(GAME_DATES);

export function isGameDay(isoDate: string): boolean {
  return gameDaySet.has(isoDate);
}

/** Parse YYYY-MM-DD as local midnight (avoids UTC shift). */
export function parseISODateLocal(iso: string): Date {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function padISODate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/** Months rendered on the schedule calendar (1 = January). */
export const SCHEDULE_MONTHS = [6, 7, 8] as const;

export const SCHEDULE_VENUE_LINE =
  "Thursday nights at Oil City Stadium, Whiting, Indiana";

/**
 * Compress sorted day-of-month numbers into "a & b" or "a–c" ranges for one month.
 */
function formatMonthDays(days: number[]): string {
  const sorted = [...new Set(days)].sort((a, b) => a - b);
  const parts: string[] = [];
  let i = 0;
  while (i < sorted.length) {
    let start = sorted[i];
    let end = start;
    while (i + 1 < sorted.length && sorted[i + 1] === end + 1) {
      i += 1;
      end = sorted[i];
    }
    if (start === end) {
      parts.push(String(start));
    } else {
      parts.push(`${start}–${end}`);
    }
    i += 1;
  }
  return parts.join(" & ");
}

/**
 * One-line summary for cards and tickers, e.g. "June 11 & 29 • July 9 & 30 • August 13 & 29".
 */
export function formatScheduleSummary(): string {
  const byMonth = new Map<string, number[]>();
  const monthFormatter = new Intl.DateTimeFormat("en-US", { month: "long" });

  for (const iso of [...GAME_DATES].sort()) {
    const d = parseISODateLocal(iso);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
    if (!byMonth.has(key)) byMonth.set(key, []);
    byMonth.get(key)!.push(d.getDate());
  }

  const keys = [...byMonth.keys()].sort();
  return keys
    .map((key) => {
      const [ys, ms] = key.split("-").map(Number);
      const label = monthFormatter.format(new Date(ys, ms - 1, 1));
      return `${label} ${formatMonthDays(byMonth.get(key)!)}`;
    })
    .join(" • ");
}

export type CalendarCell = {
  iso: string | null;
  dayLabel: string;
  isCurrentMonth: boolean;
  isGameDay: boolean;
};

/** First weekday index (0=Sunday … 6=Saturday) for the 1st of the month. */
function getMonthGridCells(year: number, monthIndex0: number): CalendarCell[] {
  const first = new Date(year, monthIndex0, 1);
  const startPad = first.getDay();
  const daysInMonth = new Date(year, monthIndex0 + 1, 0).getDate();
  const cells: CalendarCell[] = [];

  for (let i = 0; i < startPad; i++) {
    cells.push({
      iso: null,
      dayLabel: "",
      isCurrentMonth: false,
      isGameDay: false,
    });
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const d = new Date(year, monthIndex0, day);
    const iso = padISODate(d);
    cells.push({
      iso,
      dayLabel: String(day),
      isCurrentMonth: true,
      isGameDay: isGameDay(iso),
    });
  }

  while (cells.length % 7 !== 0) {
    cells.push({
      iso: null,
      dayLabel: "",
      isCurrentMonth: false,
      isGameDay: false,
    });
  }

  return cells;
}

export function getMonthCalendarGrid(year: number, month: number): CalendarCell[] {
  return getMonthGridCells(year, month - 1);
}

export const WEEKDAY_LABELS_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;
