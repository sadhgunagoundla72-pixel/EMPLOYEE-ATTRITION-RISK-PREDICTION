import Link from "next/link"
import { LayoutDashboard, Target, GaugeCircle, Table2, BookOpen, ArrowRight } from "lucide-react"
import { Reveal } from "./reveal"

const CAPS = [
  {
    icon: LayoutDashboard,
    title: "Executive Dashboard",
    accent: "var(--color-amber)",
    desc: "Live KPI cards and cross-filtered charts break attrition down by department, job role, tenure, salary band, and satisfaction — updating instantly as you slice the data.",
    tags: ["KPI cards", "Cross-filtering", "Drill-downs"],
  },
  {
    icon: Target,
    title: "Flight-Risk Prediction",
    accent: "var(--color-coral)",
    desc: "Enter any employee's profile and get a calibrated attrition probability from a trained logistic-regression model, with the top factors driving that individual score.",
    tags: ["Per-employee score", "Factor weights", "What-if inputs"],
  },
  {
    icon: GaugeCircle,
    title: "Model Performance",
    accent: "var(--color-teal)",
    desc: "Inspect accuracy, precision, recall, and the confusion matrix so you know exactly how far to trust each prediction before you act on it.",
    tags: ["Accuracy", "Confusion matrix", "ROC"],
  },
  {
    icon: Table2,
    title: "Data Explorer",
    accent: "var(--color-violet)",
    desc: "Search, sort, and page through all 5,500+ underlying records in a fast virtualized table, then export any filtered slice to spreadsheet.",
    tags: ["Search", "Sort", "Export"],
  },
]

export function Capabilities() {
  return (
    <section id="capabilities" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-panel-2)] px-3.5 py-1.5 text-[12px] font-medium text-[var(--color-teal)]">
            <BookOpen className="h-3.5 w-3.5" />
            One platform, four connected views
          </span>
          <h2 className="mt-5 font-display text-[30px] font-extrabold leading-tight tracking-tight text-[var(--color-text)] sm:text-[40px]">
            Everything HR needs to read the signal
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-text-dim)] sm:text-[16px]">
            From boardroom-ready summaries to a single employee&apos;s risk score, each view shares the
            same data and design language — so insight flows without a context switch.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          {CAPS.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-[var(--color-border-soft)] bg-gradient-to-b from-[var(--color-panel)] to-[var(--color-bg-alt)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-border)]">
                <span
                  className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                  style={{ background: c.accent }}
                />
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ background: `${c.accent}1f`, border: `1px solid ${c.accent}40` }}
                >
                  <c.icon className="h-5 w-5" style={{ color: c.accent }} />
                </div>
                <h3 className="mt-4 font-display text-[19px] font-bold text-[var(--color-text)]">
                  {c.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[var(--color-text-dim)]">
                  {c.desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-[var(--color-border-soft)] bg-[var(--color-bg)] px-2.5 py-1 font-mono text-[10.5px] text-[var(--color-text-faint)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-8 flex justify-center">
          <Link
            href="/dashboard"
            className="group inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-panel)] px-6 py-3.5 font-display text-[15px] font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-amber)]"
          >
            Open all four views in the dashboard
            <ArrowRight className="h-4.5 w-4.5 text-[var(--color-amber)] transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
