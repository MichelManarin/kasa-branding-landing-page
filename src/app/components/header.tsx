import Link from "next/link";
import Image from "next/image";
import { GridContainer } from "./grid";

import LogoImg from "../../../public/kasa.svg";
import IconUser from "../../../public/icon-user.svg";
import IconSearch from "../../../public/icon-search.svg";

const arrayMenu = [
  "Início",
  "Serviços",
  "Casos de sucesso",
  "Portfólio",
  "A Kasa",
];

export function Header() {
  const activedStyled = "text-white text-opacity-90";
  return (
    <header className="relative w-full h-24 bg-color-background flex items-center">
      <GridContainer className="flex items-center justify-between">
        <Image src={LogoImg} alt="logo" />
        <div className="flex items-center gap-20">
          <nav className="flex gap-2">
            {arrayMenu.map((item, index) => (
              <Link
                key={index}
                href={"#"}
                className={`px-3 py-1 text-white text-opacity-40 hover:text-opacity-100 transition-all ${
                  index === 0 ? activedStyled : ""
                }`}
              >
                {item}
              </Link>
            ))}
          </nav> 
          {/* <div className="flex items-center gap-6">
            <button>
              <Image src={IconSearch} alt="Icon search" />
            </button>
            <button className="flex items-center gap-8">
              <Image src={IconUser} alt="Icon search" />
              <span className="text-white font-medium">Fazer login</span>
            </button>
          </div> */}
        </div>
      </GridContainer>
    </header>
  );
}
