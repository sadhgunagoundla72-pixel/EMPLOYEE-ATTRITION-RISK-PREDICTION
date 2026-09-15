import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-border-soft)] bg-[var(--color-bg-alt)]/60">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-gradient-to-br from-[var(--color-amber)] to-[#c9770f] font-display text-[15px] font-extrabold text-[#1a1206]">
                WA
              </span>
              <span className="font-display text-[15px] font-bold text-[var(--color-text)]">
                Workforce Attrition Intelligence
              </span>
            </div>
            <p className="mt-4 text-[13.5px] leading-relaxed text-[var(--color-text-dim)]">
              An interactive HR analytics platform for reading attrition signals and scoring employee
              flight risk — running entirely in the browser.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <h4 className="font-display text-[12px] font-bold uppercase tracking-wider text-[var(--color-text-faint)]">
                Platform
              </h4>
              <ul className="mt-3 space-y-2.5 text-[13.5px]">
                <li>
                  <a href="#overview" className="text-[var(--color-text-dim)] hover:text-[var(--color-text)]">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#capabilities" className="text-[var(--color-text-dim)] hover:text-[var(--color-text)]">
                    Capabilities
                  </a>
                </li>
                <li>
                  <a href="#model" className="text-[var(--color-text-dim)] hover:text-[var(--color-text)]">
                    The Model
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-[12px] font-bold uppercase tracking-wider text-[var(--color-text-faint)]">
                Views
              </h4>
              <ul className="mt-3 space-y-2.5 text-[13.5px]">
                <li>
                  <Link href="/dashboard" className="text-[var(--color-text-dim)] hover:text-[var(--color-text)]">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="text-[var(--color-text-dim)] hover:text-[var(--color-text)]">
                    Prediction
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="text-[var(--color-text-dim)] hover:text-[var(--color-text)]">
                    Data Explorer
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-[12px] font-bold uppercase tracking-wider text-[var(--color-text-faint)]">
                Resources
              </h4>
              <ul className="mt-3 space-y-2.5 text-[13.5px]">
                <li>
                  <a href="#methodology" className="text-[var(--color-text-dim)] hover:text-[var(--color-text)]">
                    Methodology
                  </a>
                </li>
                <li>
                  <a href="#model" className="text-[var(--color-text-dim)] hover:text-[var(--color-text)]">
                    Model performance
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-[var(--color-border-soft)] pt-6 text-[12.5px] text-[var(--color-text-faint)] sm:flex-row">
          <span>© {new Date().getFullYear()} Workforce Attrition Intelligence. All rights reserved.</span>
          <span>Runs 100% client-side · Built on real HR data</span>
        </div>
      </div>
    </footer>
  )
}
