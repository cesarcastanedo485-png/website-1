import {
  SEASON_YEAR,
  SCHEDULE_MONTHS,
  SCHEDULE_VENUE_LINE,
  PRESS_EVENT_COPY,
  formatScheduleSummary,
  getMonthCalendarGrid,
  WEEKDAY_LABELS_SHORT,
} from "@/lib/schedule";

function MonthTable({ year, month }: { year: number; month: number }) {
  const monthStart = new Date(year, month - 1, 1);
  const monthTitle = new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(monthStart);
  const monthName = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    monthStart
  );

  const cells = getMonthCalendarGrid(year, month);
  const rows: (typeof cells)[] = [];
  for (let r = 0; r < cells.length; r += 7) {
    rows.push(cells.slice(r, r + 7));
  }

  return (
    <div className="rounded-xl border-2 border-nwi-navy/20 bg-white/60 shadow-[0_6px_0_rgba(26,27,46,0.08)] overflow-hidden">
      <table className="w-full border-collapse text-center text-sm sm:text-base">
        <caption className="bg-nwi-navy text-white py-2 px-3 text-base sm:text-lg font-black text-left">
          {monthTitle}
        </caption>
        <thead>
          <tr>
            {WEEKDAY_LABELS_SHORT.map((d) => (
              <th
                key={d}
                scope="col"
                className="bg-nwi-navy/10 text-nwi-navy font-bold py-2 px-1 text-xs sm:text-sm border-b border-nwi-navy/15"
              >
                {d}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => {
                if (!cell.isCurrentMonth || cell.iso === null) {
                  return (
                    <td
                      key={ci}
                      className="h-10 sm:h-12 border border-nwi-navy/10 bg-nwi-pink/30 p-1"
                      aria-hidden="true"
                    />
                  );
                }

                let label: string;
                if (cell.isGameDay) {
                  label = `Game night, ${monthName} ${cell.dayLabel}, ${year}`;
                } else if (cell.isPressDay) {
                  label = `Press release and party, ${monthName} ${cell.dayLabel}, ${year}`;
                } else {
                  label = `${monthName} ${cell.dayLabel}, ${year}, no game`;
                }

                const cellClass =
                  cell.isGameDay
                    ? "bg-nwi-orange text-white"
                    : cell.isPressDay
                      ? "bg-nwi-navy text-white"
                      : "bg-white/80 text-nwi-navy/85";

                return (
                  <td
                    key={ci}
                    aria-label={label}
                    className={`h-10 sm:h-12 border border-nwi-navy/10 p-1 align-middle font-semibold ${cellClass}`}
                  >
                    {cell.dayLabel}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ScheduleCalendar() {
  const summary = formatScheduleSummary();

  return (
    <section
      id="schedule"
      className="py-10 sm:py-12 bg-nwi-pink"
      aria-labelledby="schedule-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="schedule-heading"
          className="text-3xl sm:text-4xl font-black text-nwi-navy text-center"
        >
          Schedule
        </h2>
        <p className="mt-4 text-center text-nwi-navy/90 text-lg font-extrabold max-w-3xl mx-auto">
          {summary}
        </p>
        <p className="mt-2 text-center text-nwi-navy/80 max-w-2xl mx-auto">
          {SCHEDULE_VENUE_LINE}
        </p>
        <p className="mt-4 text-center text-sm sm:text-base font-semibold text-nwi-navy max-w-3xl mx-auto leading-relaxed">
          {PRESS_EVENT_COPY}
        </p>

        <p className="mt-6 text-center text-sm font-semibold text-nwi-navy/90">
          <span className="inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <span className="inline-flex items-center gap-2">
              <span
                className="inline-block h-4 w-4 rounded-sm bg-nwi-orange ring-1 ring-nwi-navy/20"
                aria-hidden="true"
              />
              Orange = game night
            </span>
            <span className="inline-flex items-center gap-2">
              <span
                className="inline-block h-4 w-4 rounded-sm bg-nwi-navy ring-1 ring-nwi-navy/20"
                aria-hidden="true"
              />
              Navy = press / special event
            </span>
          </span>
        </p>

        <div className="mt-8 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {SCHEDULE_MONTHS.map((m) => (
            <MonthTable key={m} year={SEASON_YEAR} month={m} />
          ))}
        </div>
      </div>
    </section>
  );
}
