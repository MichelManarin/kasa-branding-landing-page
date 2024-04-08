import { GridContainer } from "./grid";
import Image from "next/image";
import Thumb from "../../../public/video/thumb.png";
import ModalVideo from "../components/modal-video";
import Planning from "../../../public/planning.jpg";

export function SectionExplainProblem() {
  return (
    <>
      <section className="w-full min-h-[30rem] bg-color-neuter flex sm:h-auto">
        <GridContainer className="grid grid-cols-1 sm:grid-cols-2 items-center gap-2">
          <div className="w-full max-w-text-hero flex flex-col gap-y-4 pr-2">
            <ModalVideo
              thumb={Thumb}
              thumbWidth={1024}
              thumbHeight={576}
              thumbAlt="Modal video thumbnail"
              video={"video/video.mp4"}
              videoWidth={1920}
              videoHeight={1080}
            />
          </div>
          <div className="w-full max-w-text-hero flex flex-col gap-y-4 m-2">
            <h1 className="text-black text-gray-800 text-5xl font-semibold mb-2">
              A KASA
            </h1>
            <h3 className="text-xl font-medium text-gray-800 text-opacity-70">
              Estamos à frente de um time que busca pelo sucesso e crescimento da sua empresa.
              Oferecemos serviços de Marketing com a criação de propósitos, valores e personalidade.
              Alinhamos de forma estratégica tudo que a sua marca quer deixar para o mundo e como ela vai contribuir com seus clientes.
              Através de estratégias autênticas e com autoridade no assunto, te ajudamos a obter os melhores resultados. Um mundo de possibilidades, para tornar sua empresa única.
            </h3>
          </div>
        </GridContainer>
      </section>
    </>
  );
}
