import Link from "next/link"
import { ArrowUpRight, Sparkles, ShieldCheck } from "lucide-react"
import { HeroVisual } from "./hero-visual"

export function Hero() {
  return (
    <section id="overview" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="pointer-events-none absolute inset-0 grid-mask" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(240,169,59,0.22) 0%, rgba(56,217,196,0.10) 45%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-panel-2)] px-3.5 py-1.5 text-[12px] font-medium text-[var(--color-text-dim)]">
            <Sparkles className="h-3.5 w-3.5 text-[var(--color-amber)]" />
            People analytics, powered by a trained risk model
          </div>

          <h1 className="mt-6 font-display text-[40px] font-extrabold leading-[1.05] tracking-tight text-[var(--color-text)] sm:text-[56px]">
            See attrition
            <br />
            <span className="bg-gradient-to-r from-[var(--color-amber)] via-[#f6c46b] to-[var(--color-teal)] bg-clip-text text-transparent">
              before it happens.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-[var(--color-text-dim)] sm:text-[16.5px]">
            Workforce Attrition Intelligence turns 5,500+ real employee records into clear retention
            signals. Explore live dashboards, score any employee&apos;s flight risk with a trained
            logistic-regression model, and dig into the raw data — entirely in your browser.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/dashboard"
              className="group inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-br from-[var(--color-amber)] to-[#c9770f] px-6 py-3.5 font-display text-[15px] font-bold text-[#1a1206] transition-all hover:-translate-y-0.5 hover:brightness-110"
            >
              Launch the Dashboard
              <ArrowUpRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a
              href="#capabilities"
              className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-panel)] px-6 py-3.5 font-display text-[15px] font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-text-faint)]"
            >
              Explore capabilities
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[12.5px] text-[var(--color-text-faint)]">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-[var(--color-teal)]" />
              Runs 100% client-side
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-teal)]" />
              No server, no external database
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-amber)]" />
              Built on real HR data
            </span>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  )
}
