import { GridContainer } from "./grid";

export function Copyright() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-t-white border-opacity-5 bg-black">
      <GridContainer className="flex flex-col">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Kasa Branding. Todos os direitos reservados.
        </p>
      </GridContainer>
    </footer>
  );
}
