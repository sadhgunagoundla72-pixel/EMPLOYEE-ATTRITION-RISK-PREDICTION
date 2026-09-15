"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowLeft, Maximize2, RefreshCw, ExternalLink } from "lucide-react"

export function DashboardFrame() {
  const [reloadKey, setReloadKey] = useState(0)

  return (
    <div className="flex h-dvh flex-col bg-[var(--color-bg)]">
      <header className="flex h-14 shrink-0 items-center justify-between border-b border-[var(--color-border-soft)] bg-[rgba(10,15,28,0.9)] px-4 backdrop-blur-xl sm:px-6">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex h-9 items-center gap-1.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-panel-2)] px-3 text-[13px] font-medium text-[var(--color-text-dim)] transition-colors hover:text-[var(--color-text)]"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Back to site</span>
          </Link>
          <div className="hidden items-center gap-2 sm:flex">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--color-amber)] to-[#c9770f] font-display text-[13px] font-extrabold text-[#1a1206]">
              WA
            </span>
            <div className="flex flex-col leading-tight">
              <span className="font-display text-[13px] font-bold text-[var(--color-text)]">
                Live Dashboard
              </span>
              <span className="text-[10px] text-[var(--color-text-faint)]">
                Attrition analytics &amp; risk modeling
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-panel-2)] px-3 py-1.5 text-[11.5px] text-[var(--color-text-dim)] md:flex">
            <span className="flex h-2 w-2 items-center justify-center">
              <span className="h-2 w-2 animate-ping rounded-full bg-[var(--color-teal)] opacity-75" />
              <span className="absolute h-2 w-2 rounded-full bg-[var(--color-teal)]" />
            </span>
            Running client-side
          </span>
          <button
            onClick={() => setReloadKey((k) => k + 1)}
            aria-label="Reload dashboard"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-panel-2)] text-[var(--color-text-dim)] transition-colors hover:text-[var(--color-text)]"
          >
            <RefreshCw className="h-4 w-4" />
          </button>
          <a
            href="/workforce-dashboard.html"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open dashboard in a new tab"
            className="flex h-9 items-center gap-1.5 rounded-lg bg-gradient-to-br from-[var(--color-amber)] to-[#c9770f] px-3 font-display text-[12.5px] font-bold text-[#1a1206] transition-all hover:brightness-110"
          >
            <Maximize2 className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Full screen</span>
            <ExternalLink className="h-3.5 w-3.5 sm:hidden" />
          </a>
        </div>
      </header>

      <div className="relative flex-1">
        <iframe
          key={reloadKey}
          src="/workforce-dashboard.html"
          title="Workforce Attrition Intelligence Dashboard"
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    </div>
  )
}
