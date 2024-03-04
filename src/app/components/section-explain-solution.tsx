import { GridContainer } from "./grid";
import Image from "next/image";
import NoBranding from "../../../public/no-branding.png";

export function SectionExplainSolution() {
  return (
    <>
      <section className="w-full h-[35rem] bg-color-neuter flex">
        <GridContainer className="grid grid-cols-1 sm:grid-cols-2 items-center gap-2">
          <div className="w-full max-w-text-hero flex flex-col gap-y-4">
            <h1 className="text-black text-gray-800 text-5xl font-semibold mb-2">
              [Sabrina - Explicar um pouco sobre a metodologia]
            </h1>
            <h3 className="text-xl font-medium text-gray-800 text-opacity-70">
              [fazer um resumo]
            </h3>
          </div>
          <div className="w-full max-w-text-hero flex flex-col gap-y-4">
            <Image className="rounded-md" src={NoBranding} alt="Icon search" />
          </div>
        </GridContainer>
      </section>
    </>
  );
}
