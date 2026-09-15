"use client"

import { useEffect, useState } from "react"
import { TrendingDown, TrendingUp, Activity } from "lucide-react"

const BARS = [
  { label: "Sales", value: 82, color: "var(--color-coral)" },
  { label: "Eng", value: 41, color: "var(--color-amber)" },
  { label: "Ops", value: 63, color: "var(--color-amber)" },
  { label: "IT", value: 34, color: "var(--color-teal)" },
  { label: "Fin", value: 28, color: "var(--color-teal)" },
  { label: "HR", value: 55, color: "var(--color-amber)" },
]

export function HeroVisual() {
  const [mounted, setMounted] = useState(false)
  const [risk, setRisk] = useState(0.62)

  useEffect(() => {
    setMounted(true)
    const id = setInterval(() => {
      setRisk(0.42 + Math.random() * 0.4)
    }, 2600)
    return () => clearInterval(id)
  }, [])

  const riskPct = Math.round(risk * 100)
  const verdict = risk > 0.66 ? "High" : risk > 0.4 ? "Medium" : "Low"
  const verdictColor =
    risk > 0.66 ? "var(--color-coral)" : risk > 0.4 ? "var(--color-amber)" : "var(--color-teal)"

  return (
    <div className="relative animate-fade-up [animation-delay:120ms]">
      <div
        className="pointer-events-none absolute -inset-6 rounded-[28px] opacity-60 blur-2xl"
        style={{
          background:
            "radial-gradient(60% 60% at 70% 20%, rgba(240,169,59,0.18), transparent), radial-gradient(50% 50% at 20% 90%, rgba(56,217,196,0.16), transparent)",
        }}
        aria-hidden
      />

      <div className="relative rounded-[20px] border border-[var(--color-border-soft)] bg-gradient-to-b from-[var(--color-panel)] to-[var(--color-bg-alt)] p-5 shadow-[0_30px_80px_-24px_rgba(0,0,0,0.7)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 items-center justify-center">
              <span className="h-2 w-2 animate-ping rounded-full bg-[var(--color-teal)] opacity-75" />
              <span className="absolute h-2 w-2 rounded-full bg-[var(--color-teal)]" />
            </span>
            <span className="text-[12px] font-medium text-[var(--color-text-dim)]">
              Live filtered view
            </span>
          </div>
          <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-panel-2)] px-2.5 py-1 font-mono text-[10.5px] text-[var(--color-text-faint)]">
            5,513 records
          </span>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2.5">
          {[
            { label: "Attrition", value: "24.1%", accent: "var(--color-coral)", icon: TrendingUp, dir: "up" },
            { label: "Headcount", value: "5.5K", accent: "var(--color-amber)", icon: Activity },
            { label: "Avg Tenure", value: "7.5y", accent: "var(--color-teal)", icon: TrendingDown, dir: "down" },
          ].map((k) => (
            <div
              key={k.label}
              className="relative overflow-hidden rounded-xl border border-[var(--color-border-soft)] bg-[var(--color-bg-alt)] p-3"
            >
              <span
                className="absolute inset-x-0 top-0 h-0.5 opacity-80"
                style={{ background: k.accent }}
              />
              <div className="flex items-center gap-1 text-[10px] font-semibold text-[var(--color-text-faint)]">
                <k.icon className="h-3 w-3" style={{ color: k.accent }} />
                {k.label}
              </div>
              <div className="mt-1.5 font-display text-[19px] font-bold text-[var(--color-text)]">
                {k.value}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl border border-[var(--color-border-soft)] bg-[var(--color-bg-alt)] p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[11.5px] font-semibold text-[var(--color-text-dim)]">
              Attrition rate by department
            </span>
            <span className="font-mono text-[10px] text-[var(--color-text-faint)]">%</span>
          </div>
          <div className="flex h-28 items-end justify-between gap-2">
            {BARS.map((b, i) => (
              <div key={b.label} className="flex flex-1 flex-col items-center gap-1.5">
                <div className="flex h-24 w-full items-end justify-center">
                  <div
                    className="w-full max-w-[26px] rounded-t-[4px] transition-[height] duration-1000 ease-out"
                    style={{
                      height: mounted ? `${b.value}%` : "0%",
                      background: `linear-gradient(180deg, ${b.color}, ${b.color}55)`,
                      transitionDelay: `${i * 90}ms`,
                    }}
                  />
                </div>
                <span className="text-[9.5px] text-[var(--color-text-faint)]">{b.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3 rounded-xl border border-[var(--color-border-soft)] bg-[var(--color-bg-alt)] p-4">
          <div className="flex items-center justify-between">
            <span className="text-[11.5px] font-semibold text-[var(--color-text-dim)]">
              Individual flight-risk score
            </span>
            <span
              className="font-display text-[13px] font-extrabold"
              style={{ color: verdictColor }}
            >
              {verdict} · {riskPct}%
            </span>
          </div>
          <div className="relative mt-3 h-2.5 w-full rounded-full bg-[linear-gradient(90deg,var(--color-teal)_0%,var(--color-amber)_50%,var(--color-coral)_100%)]">
            <span
              className="absolute -top-1 h-4.5 w-[3px] rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-[left] duration-1000 ease-out"
              style={{ left: `${riskPct}%`, transform: "translateX(-50%)" }}
            />
          </div>
          <div className="mt-2 flex justify-between font-mono text-[9.5px] text-[var(--color-text-faint)]">
            <span>LOW</span>
            <span>MEDIUM</span>
            <span>HIGH</span>
          </div>
        </div>
      </div>
    </div>
  )
}
