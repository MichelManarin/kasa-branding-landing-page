import { GridContainer } from "../components/grid";
import ModalVideo from "../components/modal-video";
import Planning from "../../../public/planning.jpg";

export const TextRevealTW = () => {
  const text = "Conexão Estratégia & Autenticidade";
  return (
    <>
      <h1 className="overflow-hidden text-5xl font-bold tracking-tight text-white sm:text-6xl">
        {text.match(/./gu)!.map((char, index) => (
          <span
            className="animate-text-reveal inline-block [animation-fill-mode:backwards]"
            key={`${char}-${index}`}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
    </>
  );
};

export function SectionHero() {
  return (
    <section className="w-full h-[40rem] bg-green-primary border-t border-t-color-border flex pb-5">
      <GridContainer className="grid grid-cols-1 sm:grid-cols-2 items-center gap-2">
        <div className="w-full max-w-text-hero flex flex-col gap-y-4 p-2">
          <TextRevealTW />
          <h3 className="text-xl font-light text-white mb-4">
            Trabalhamos para conceber uma identidade única para sua marca, que
            não só ressoe com seu público-alvo, mas também reflita seus valores
            e propósito
          </h3>
          <div className="">
            <button className="py-4 px-5 bg-white rounded-full text-gray-800 font-bold">
              <span>Entrar em contato</span>
            </button>
          </div>
        </div>
        <div className="w-full max-w-text-hero flex flex-col gap-y-4 hidden sm:flex p-2">
          <ModalVideo
            thumb={Planning}
            thumbWidth={1024}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video={"video/video.mp4"}
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>
      </GridContainer>
    </section>
  );
}
