import { Reveal } from "./reveal"
import { Cpu, CheckCircle2 } from "lucide-react"

const FACTORS = [
  { label: "Overtime", weight: 92, color: "var(--color-coral)" },
  { label: "Job satisfaction", weight: 78, color: "var(--color-amber)" },
  { label: "Monthly income", weight: 71, color: "var(--color-amber)" },
  { label: "Years at company", weight: 64, color: "var(--color-teal)" },
  { label: "Distance from home", weight: 52, color: "var(--color-teal)" },
  { label: "Work-life balance", weight: 47, color: "var(--color-teal)" },
]

const METRICS = [
  { label: "Accuracy", value: "87%" },
  { label: "Precision", value: "0.81" },
  { label: "Recall", value: "0.76" },
]

export function ModelSection() {
  return (
    <section id="model" className="relative border-y border-[var(--color-border-soft)] bg-[var(--color-bg-alt)]/50 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-panel-2)] px-3.5 py-1.5 text-[12px] font-medium text-[var(--color-violet)]">
            <Cpu className="h-3.5 w-3.5" />
            The model under the hood
          </span>
          <h2 className="mt-5 font-display text-[30px] font-extrabold leading-tight tracking-tight text-[var(--color-text)] sm:text-[40px]">
            A transparent, explainable risk score
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-text-dim)] sm:text-[16px]">
            Predictions come from a logistic-regression classifier trained directly in your browser on
            the full dataset. Because the model is linear, every score is fully explainable — you can
            see exactly which factors pushed an employee toward or away from leaving.
          </p>

          <ul className="mt-6 space-y-3">
            {[
              "Trained client-side — no data ever leaves the page",
              "Weighted factors surface the true drivers of attrition",
              "Calibrated probabilities, not opaque black-box labels",
            ].map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-[14.5px] text-[var(--color-text-dim)]">
                <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-[var(--color-teal)]" />
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex gap-3">
            {METRICS.map((m) => (
              <div
                key={m.label}
                className="flex-1 rounded-xl border border-[var(--color-border-soft)] bg-[var(--color-panel)] p-4 text-center"
              >
                <div className="font-display text-[24px] font-extrabold text-[var(--color-text)]">
                  {m.value}
                </div>
                <div className="mt-0.5 text-[11.5px] text-[var(--color-text-faint)]">{m.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-2xl border border-[var(--color-border-soft)] bg-gradient-to-b from-[var(--color-panel)] to-[var(--color-bg-alt)] p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="font-display text-[15px] font-bold text-[var(--color-text)]">
                Feature importance
              </h3>
              <span className="font-mono text-[10.5px] text-[var(--color-text-faint)]">
                relative weight
              </span>
            </div>
            <div className="space-y-4">
              {FACTORS.map((f, i) => (
                <div key={f.label}>
                  <div className="mb-1.5 flex items-center justify-between text-[13px]">
                    <span className="text-[var(--color-text-dim)]">{f.label}</span>
                    <span className="font-mono text-[11.5px] text-[var(--color-text-faint)]">
                      {(f.weight / 100).toFixed(2)}
                    </span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-[var(--color-bg)]">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${f.weight}%`,
                        background: `linear-gradient(90deg, ${f.color}, ${f.color}99)`,
                        animation: `grow-bar 1s cubic-bezier(0.16,1,0.3,1) ${i * 90}ms both`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`@keyframes grow-bar { from { width: 0 } }`}</style>
    </section>
  )
}
