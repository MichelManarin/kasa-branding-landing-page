import Link from "next/link";
import Image from "next/image";
import { GridContainer } from "./grid";

import LogoImg from "../../../public/kasa-cropped.svg";
import IconUser from "../../../public/icon-user.svg";
import IconSearch from "../../../public/icon-search.svg";

const arrayMenu = [
  "Início",
  "A Kasa",
  "Método",
  "Serviços",
  "Office",
];

export function Header() {
  const activedStyled = "text-black text-opacity-90";
  return (
    <header className="relative w-full h-24 bg-neutral-50 flex items-center">
      <GridContainer className="flex items-center justify-between">
        <Image src={LogoImg} alt="logo" />
        <div className="flex items-center gap-20 hidden sm:flex">
          <nav className="flex gap-2">
            {arrayMenu.map((item, index) => (
              <Link
                key={index}
                href={"#"}
                className={`px-3 py-1 text-gray-800 text-opacity-70 hover:text-opacity-100 transition-all ${
                  index === 0 ? activedStyled : ""
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </GridContainer>
    </header>
  );
}
