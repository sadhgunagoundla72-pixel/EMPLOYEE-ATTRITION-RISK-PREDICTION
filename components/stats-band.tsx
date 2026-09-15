import { CountUp } from "./count-up"
import { Reveal } from "./reveal"

const STATS = [
  { value: 5513, label: "Employee records analyzed", suffix: "" },
  { value: 24.1, label: "Baseline attrition rate", suffix: "%", decimals: 1 },
  { value: 9, label: "Predictive features modeled", suffix: "" },
  { value: 100, label: "Runs in the browser", suffix: "%" },
]

export function StatsBand() {
  return (
    <section className="relative border-y border-[var(--color-border-soft)] bg-[var(--color-bg-alt)]/60">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-5 sm:px-8 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 90}
            className="flex flex-col items-center py-9 text-center sm:py-11"
          >
            <span className="font-display text-[34px] font-extrabold tracking-tight text-[var(--color-text)] sm:text-[42px]">
              <CountUp end={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
            </span>
            <span className="mt-1.5 max-w-[180px] text-[12.5px] leading-snug text-[var(--color-text-dim)]">
              {s.label}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
