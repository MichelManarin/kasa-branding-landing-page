import { GridContainer } from "./grid";
import Image from "next/image";
import Metodologia from "../../../public/metodologia.png";

export function SectionExplainSolution() {
  return (
    <>
      <section className="w-full min-h-[30rem] bg-color-neuter flex sm:h-auto ">
        <GridContainer className="grid grid-cols-1 sm:grid-cols-2 items-center gap-2">
          <div className="w-full max-w-text-hero flex flex-col gap-y-4">
            <h1 className="text-black text-gray-800 text-5xl font-semibold mb-2">
              Metodologia
            </h1>
            <h3 className="text-xl font-medium text-gray-800 text-opacity-70">
              Acreditamos que as nossas soluções não estão apenas relacionadas a
              serviços de marketing digital ou offline. <br/>O nosso principal
              propósito é criar conexões reais com nossos clientes para que
              possamos crescer juntos e com isso, através de estratégia e
              planejamento único, pensar em conteúdos e soluções singulares. 
            </h3>
          </div>
          <div className="w-full max-w-text-hero flex flex-col gap-y-4">
            <Image className="rounded-md" src={Metodologia} alt="Icon search" />
          </div>
        </GridContainer>
      </section>
    </>
  );
}
