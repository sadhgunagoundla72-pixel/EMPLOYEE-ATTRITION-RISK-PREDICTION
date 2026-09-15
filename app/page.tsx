import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { StatsBand } from "@/components/stats-band"
import { Capabilities } from "@/components/capabilities"
import { ModelSection } from "@/components/model-section"
import { Methodology } from "@/components/methodology"
import { CtaSection } from "@/components/cta-section"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <StatsBand />
        <Capabilities />
        <ModelSection />
        <Methodology />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  )
}
