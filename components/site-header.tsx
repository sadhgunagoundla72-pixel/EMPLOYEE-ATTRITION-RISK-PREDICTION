"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, X, ArrowUpRight } from "lucide-react"

const NAV = [
  { label: "Overview", href: "#overview" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "The Model", href: "#model" },
  { label: "Methodology", href: "#methodology" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--color-border-soft)] bg-[rgba(10,15,28,0.82)] backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-gradient-to-br from-[var(--color-amber)] to-[#c9770f] font-display text-[15px] font-extrabold text-[#1a1206]">
            WA
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-[14px] font-bold text-[var(--color-text)]">
              Workforce Attrition
            </span>
            <span className="text-[10.5px] tracking-wide text-[var(--color-text-faint)]">
              HR Analytics &amp; Risk Modeling
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-[13.5px] font-medium text-[var(--color-text-dim)] transition-colors hover:bg-[var(--color-panel-2)] hover:text-[var(--color-text)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/dashboard"
            className="group hidden items-center gap-1.5 rounded-lg bg-gradient-to-br from-[var(--color-amber)] to-[#cf8a1f] px-4 py-2 font-display text-[13px] font-bold text-[#1a1206] transition-all hover:brightness-110 sm:flex"
          >
            Launch Dashboard
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <button
            aria-label="Toggle navigation menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-panel-2)] text-[var(--color-text)] md:hidden"
          >
            {open ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[var(--color-border-soft)] bg-[rgba(10,15,28,0.96)] px-5 py-4 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-1">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-[14px] font-medium text-[var(--color-text-dim)] hover:bg-[var(--color-panel-2)] hover:text-[var(--color-text)]"
              >
                {item.label}
              </a>
            ))}
            <Link
              href="/dashboard"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-1.5 rounded-lg bg-gradient-to-br from-[var(--color-amber)] to-[#cf8a1f] px-4 py-2.5 font-display text-[14px] font-bold text-[#1a1206]"
            >
              Launch Dashboard
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
