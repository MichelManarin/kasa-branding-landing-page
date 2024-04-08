import { GridContainer } from "./grid";

export function SectionGetLead() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 border-t border-b bg-neutral-50 sm:h-auto">
        <GridContainer className="flex flex-col items-center">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 ">
            <div className="space-y-3">
              <h2 className="text-5xl font-bold tracking-tighter md:text-4xl/tight text-gray-800 text-black text-5xl font-semibold">
                Descubra como nossos serviços podem ajudar o seu negócio!
              </h2>
              <p className="text-xl font-medium text-gray-800 text-opacity-70">
                Ofereça uma experiência verdadeiramente exclusiva a seus
                clientes através dos nossos serviços e produtos
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="   Informe seu melhor e-mail"
                  aria-describedby="email-description"
                />
                <button
                  type="button"
                  className="rounded-md bg-color-background px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black"
                >
                  Solucionar 
                </button>
              </form>
            </div>
          </div>
        </GridContainer>
      </section>
    </>
  );
}
