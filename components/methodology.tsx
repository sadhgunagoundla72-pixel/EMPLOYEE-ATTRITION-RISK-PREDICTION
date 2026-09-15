import { Reveal } from "./reveal"
import { Database, Sliders, LineChart, ClipboardCheck } from "lucide-react"

const STEPS = [
  {
    icon: Database,
    step: "01",
    title: "Ingest the dataset",
    desc: "5,500+ employee records load straight into memory — demographics, compensation, role, tenure, and satisfaction signals.",
  },
  {
    icon: Sliders,
    step: "02",
    title: "Engineer the features",
    desc: "Categorical fields are encoded and numeric fields normalized so every variable contributes fairly to the model.",
  },
  {
    icon: LineChart,
    step: "03",
    title: "Train & score",
    desc: "A logistic-regression classifier fits in the browser, then produces a calibrated attrition probability for anyone you enter.",
  },
  {
    icon: ClipboardCheck,
    step: "04",
    title: "Explain & act",
    desc: "Performance metrics and per-factor weights make each score defensible — so HR can intervene with confidence.",
  },
]

export function Methodology() {
  return (
    <section id="methodology" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-panel-2)] px-3.5 py-1.5 text-[12px] font-medium text-[var(--color-amber)]">
            How it works
          </span>
          <h2 className="mt-5 font-display text-[30px] font-extrabold leading-tight tracking-tight text-[var(--color-text)] sm:text-[40px]">
            From raw records to a decision
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-text-dim)] sm:text-[16px]">
            The entire pipeline runs locally in four transparent stages — nothing is hidden, and
            nothing leaves your machine.
          </p>
        </Reveal>

        <div className="relative mt-14">
          <div
            className="absolute left-0 right-0 top-[38px] hidden h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent lg:block"
            aria-hidden
          />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.step} delay={i * 100} className="relative">
                <div className="relative z-10 mb-5 flex h-[76px] w-[76px] items-center justify-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-panel)] shadow-[0_12px_30px_-14px_rgba(0,0,0,0.8)]">
                  <s.icon className="h-7 w-7 text-[var(--color-amber)]" />
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-amber)] font-mono text-[10px] font-bold text-[#1a1206]">
                    {s.step}
                  </span>
                </div>
                <h3 className="font-display text-[17px] font-bold text-[var(--color-text)]">
                  {s.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-[var(--color-text-dim)]">
                  {s.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
