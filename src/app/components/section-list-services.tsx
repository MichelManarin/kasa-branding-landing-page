import { GridContainer } from "./grid";

export function SectionListServices() {
  return (
    <>
      <section className="w-full h-section-hero bg-[#fff] ">
        <GridContainer className="flex flex-col items-center">
          <div className="">
            <div className="">
              <h2 className="text-5xl text-gray-800 font-semibold mt-12">
                Conheça nossos serviços
              </h2>
            </div>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-300 dark:bg-color-background">
                <div
                  aria-hidden="true"
                  className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-blue-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"
                ></div>
                <div className="relative">
                  <div className="border border-blue-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-lg dark:bg-green-primary dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-blue-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V7Zm2 9.4 4.7 1.5A1 1 0 0 0 22 17V7a1 1 0 0 0-1.3-1L16 7.7v8.8Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-bold">Produção de Conteúdo</span>
                      <br />
                      Através de produções de vídeos, fotos, design, um mundo de
                      possibilidades para atrair novos clientes.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-300 dark:bg-color-background">
                <div
                  aria-hidden="true"
                  className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-blue-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"
                ></div>
                <div className="relative">
                  <div className="border border-blue-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-lg dark:bg-green-primary dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-blue-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 18.5A2.5 2.5 0 0 1 7.5 20h0a2.5 2.5 0 0 1-2.4-3.2 3 3 0 0 1-.8-5.2 2.5 2.5 0 0 1 .9-3.2A2.5 2.5 0 0 1 7 5a2.5 2.5 0 0 1 5 .5m0 13v-13m0 13a2.5 2.5 0 0 0 4.5 1.5h0a2.5 2.5 0 0 0 2.4-3.2 3 3 0 0 0 .9-5.2 2.5 2.5 0 0 0-1-3.2A2.5 2.5 0 0 0 17 5a2.5 2.5 0 0 0-5 .5m-8 5a2.5 2.5 0 0 1 3.5-2.3m-.3 8.6a3 3 0 0 1-3-5.2M20 10.5a2.5 2.5 0 0 0-3.5-2.3m.3 8.6a3 3 0 0 0 3-5.2"
                      />
                    </svg>
                  </div>

                  <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-bold">Design & Branding</span>
                      <br />
                      Um processo de estruturação ou reestruturação de marca
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-300 dark:bg-color-background">
                <div
                  aria-hidden="true"
                  className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-blue-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"
                ></div>
                <div className="relative">
                  <div className="border border-blue-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-lg dark:bg-green-primary dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-blue-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13.6 16.7c.2.3.5.5.9.6a1.4 1.4 0 0 0 1.7-.8c.2-.6-.4-1.3-1.2-1.5-.8-.2-1.4-.8-1.2-1.5a1.4 1.4 0 0 1 1.7-.7c.4 0 .7.2.9.5m-1.4 4v.6m0-5.9v.7M4 15v4m3-6v6M6 8.5 10.5 5 14 7.5 18 4m0 0h-3.5M18 4v3m2 8a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
                      />
                    </svg>
                  </div>

                  <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-bold">
                        Gestão de tráfego & Criação de Sites
                      </span>
                      <br />
                      Ferramentas que irão ajudar seu negócio alavancar, com
                      credibilidade para gerar bons resultados.
                    </p>
                  </div>
                </div>
              </div>{" "}
              <div className="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-300 dark:bg-color-background">
                <div
                  aria-hidden="true"
                  className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-blue-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"
                ></div>
                <div className="relative">
                  <div className="border border-blue-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-lg dark:bg-green-primary dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-blue-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 9a3 3 0 0 1 3-3m-2 15h4m0-3c0-4.1 4-4.9 4-9A6 6 0 1 0 6 9c0 4 4 5 4 9h4Z"
                      />
                    </svg>
                  </div>

                  <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-bold">
                        Consultoria de Marketing
                      </span>
                      <br />
                      Através de um olhar externo e análises, pontuamos
                      oportunidades de melhoria e apresentamos novas
                      possibilidades.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-300 dark:bg-color-background">
                <div
                  aria-hidden="true"
                  className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-blue-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"
                ></div>
                <div className="relative">
                  <div className="border border-blue-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-lg dark:bg-green-primary dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-blue-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7H5a2 2 0 0 0-2 2v4m5-6h8M8 7V5c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2m0 0h3a2 2 0 0 1 2 2v4m0 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6m18 0s-4 2-9 2-9-2-9-2m9-2h0"
                      />
                    </svg>
                  </div>

                  <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-bold">Assessoria de Marketing</span>
                      <br />
                      Um trabalho completo para sua marca, através de
                      ferramentas de gestão e conteúdos que irão acelerar o
                      crescimento do seu negócio.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-300 dark:bg-color-background">
                <div
                  aria-hidden="true"
                  className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-blue-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"
                ></div>
                <div className="relative">
                  <div className="border border-blue-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-lg dark:bg-green-primary dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-blue-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7H5a2 2 0 0 0-2 2v4m5-6h8M8 7V5c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2m0 0h3a2 2 0 0 1 2 2v4m0 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6m18 0s-4 2-9 2-9-2-9-2m9-2h0"
                      />
                    </svg>
                  </div>

                  <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-bold">Cobertura Digital</span>
                      <br />
                      Os melhores momentos da sua empresa sendo registrados por
                      uma equipe especializada em fotografia e vídeo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GridContainer>
      </section>
    </>
  );
}
