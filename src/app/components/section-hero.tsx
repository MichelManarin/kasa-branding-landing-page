import { GridContainer } from "../components/grid";
import Image from "next/image";
import Planning from "../../../public/planning.jpg";
import Gif from "../../../public/gif-transparent-example.gif";

export function SectionHero() {
  return (
    <section className="w-full h-[40rem] bg-green-primary border-t border-t-color-border flex pb-5">
      <GridContainer className="grid grid-cols-1 sm:grid-cols-2 items-center gap-2">
        <div className="w-full max-w-text-hero flex flex-col gap-y-4">
          <h1 className="text-white text-5xl font-semibold mb-2">
            Conexão <br />
            Estratégia & Autenticidade
          </h1>
          <h3 className="text-xl font-medium text-white mb-4 text-opacity-40">
            Trabalhamos para conceber uma identidade única para sua marca, que
            não só ressoe com seu público-alvo, mas também reflita seus valores
            e propósito
          </h3>
          <div className="">
            <button className="py-4 px-5 bg-white rounded-full text-gray-800 font-bold">
              <span>Saber mais</span>
            </button>
          </div>
        </div>
        <div className="w-full max-w-text-hero flex flex-col gap-y-4 hidden sm:flex">
          <Image className="rounded-md" src={Gif} alt="Icon search" />
        </div>
      </GridContainer>
    </section>
  );
}
