import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Reveal } from "./reveal"

export function CtaSection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[24px] border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-panel)] via-[var(--color-bg-alt)] to-[var(--color-panel)] px-6 py-14 text-center sm:px-12 sm:py-20">
            <div
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{
                background:
                  "radial-gradient(60% 80% at 50% 0%, rgba(240,169,59,0.16), transparent), radial-gradient(50% 60% at 50% 100%, rgba(56,217,196,0.12), transparent)",
              }}
              aria-hidden
            />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-display text-[30px] font-extrabold leading-tight tracking-tight text-[var(--color-text)] sm:text-[44px]">
                Ready to see who&apos;s at risk?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-[var(--color-text-dim)] sm:text-[16.5px]">
                Jump straight into the live dashboard — explore the data, score an employee, and
                inspect the model. No sign-up, no setup, nothing to install.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/dashboard"
                  className="group inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-br from-[var(--color-amber)] to-[#c9770f] px-7 py-3.5 font-display text-[15px] font-bold text-[#1a1206] transition-all hover:-translate-y-0.5 hover:brightness-110"
                >
                  Launch the Dashboard
                  <ArrowUpRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <a
                  href="#overview"
                  className="inline-flex items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-panel)] px-7 py-3.5 font-display text-[15px] font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-text-faint)]"
                >
                  Back to top
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
