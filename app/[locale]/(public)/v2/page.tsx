import { BentoSectors } from "@/components/(public)/landing/BentoSectors";
import { DreamTeam } from "@/components/(public)/landing/DreamTeam";
import { FaqSection } from "@/components/(public)/landing/FaqSection";
import { ImpactMetrics } from "@/components/(public)/landing/ImpactMetrics";
import { LandingHero } from "@/components/(public)/landing/LandingHero";
import { PackagesPricing } from "@/components/(public)/landing/PackagesPricing";
import { SolutionsTabs } from "@/components/(public)/landing/SolutionsTabs";
import { WorkMethod } from "@/components/(public)/landing/WorkMethod";

export default function LandingV2Page() {
  return (
    <>
      <LandingHero />
      <ImpactMetrics />
      <SolutionsTabs />
      <BentoSectors />
      <WorkMethod />
      <PackagesPricing />
      <DreamTeam />
      <FaqSection />
    </>
  );
}
