import { GridContainer } from "./grid";
import Image from "next/image";
import NoBranding from "../../../public/no-branding.png";

export function SectionExplainProblem() {
  return (
    <>
      <section className="w-full min-h-[35rem] bg-color-neuter flex sm:h-auto">
        <GridContainer className="grid grid-cols-1 sm:grid-cols-2 items-center gap-2">
          <div className="w-full max-w-text-hero flex flex-col gap-y-4">
            <Image className="rounded-md" src={NoBranding} alt="Icon search" />
          </div>
          <div className="w-full max-w-text-hero flex flex-col gap-y-4 m-2">
            <h1 className="text-black text-gray-800 text-5xl font-semibold mb-2">
              Empresas sem marca forte desaparecem no mercado
            </h1>
            <h3 className="text-xl font-medium text-gray-800 text-opacity-70">
              Investir em identidade visual e marca é essencial para
              diferenciar, transmitir confiança e criar uma conexão memorável
              com o público-alvo, aumentando assim as oportunidades de negócio e
              evitando perdas financeiras.
            </h3>
          </div>
        </GridContainer>
      </section>
    </>
  );
}
