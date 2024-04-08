import Image from "next/image";
import { SectionHero } from "./components/section-hero";
import { SectionExplainProblem } from "./components/section-explain-problem";
import { SectionExplainSolution } from "./components/section-explain-solution";
import { SectionGetLead } from "./components/section-get-lead";
import { SectionListServices } from "./components/section-list-services";
import { Footer } from "./components/footer";
// import { SpotlightPreview } from "./components/spotlight";

export default function Home() {
  return (
    <div className="bg-color-background">
      <SectionHero />
      <SectionExplainProblem />
      <SectionExplainSolution />
      <SectionGetLead />
      <SectionListServices />
      <Footer />
    </div>
  );
}
