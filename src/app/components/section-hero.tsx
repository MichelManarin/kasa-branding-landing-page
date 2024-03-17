import { GridContainer } from "../components/grid";
import ModalVideo from "../components/modal-video";
import Planning from "../../../public/planning.jpg";
import Frase from "../../../public/frase.svg";
import Image from "next/image";

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
      <GridContainer className="grid items-center gap-2 items-center relative">
        <div className="w-full max-w-text-hero flex flex-col gap-y-4 items-left">
          <Image
            className="rounded-md"
            src={Frase}
            width={500}
            height={250}
            alt="Lema"
          />

          <h3 className="text-xl font-light text-white mb-4">
            Trabalhamos para conceber uma identidade única para sua marca, que
            não só ressoe <br /> com seu público-alvo, mas também reflita seus
            valores e propósito
          </h3>

          <div>
            <a
              href="https://api.whatsapp.com/send?phone=555191773532"
              target="_blank"
            >
              <button className="py-4 px-5 bg-white rounded-lg text-gray-800 font-bold">
                <span>Entrar em contato </span>
              </button>
            </a>
          </div>
        </div>
        <div className="flex flex-col items-end justify-center space-y-6 absolute top-0 right-0 mr-5 mt-5 h-full">
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white p-2 bg-white rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-instagram"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white p-2 bg-white rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-facebook"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white p-2 bg-white rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-linkedin"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
      </GridContainer>
    </section>
  );
}
