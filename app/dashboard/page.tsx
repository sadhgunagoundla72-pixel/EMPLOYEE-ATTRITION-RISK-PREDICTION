import type { Metadata } from "next"
import { DashboardFrame } from "@/components/dashboard-frame"

export const metadata: Metadata = {
  title: "Live Dashboard — Workforce Attrition Intelligence",
  description:
    "Explore attrition KPIs, score individual flight risk, review model performance, and browse 5,500+ employee records.",
}

export default function DashboardPage() {
  return <DashboardFrame />
}
