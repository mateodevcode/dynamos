"use client"

import logoDynamo from "../img/logo/logo-dynamo.png";
import { enlacesFooter } from "../data/enlaces.footer";
import EnlacesIconsFooter from "./EnlacesIconsFooter";
import { enlacesIconFooter } from "../data/enlaces.icon.footer";
import Link from "next/link";
import Image from "next/image";

function Footer() {

  return (
    <div
      className={`flex flex-col justify-center items-center pt-20 pb-10 bg-white dark:bg-gray-950 text-black dark:text-white`}
    >
      <Link href="/">
        <Image
          src={logoDynamo}
          alt="Logo de Movimiento Dynamo"
          className="md:w-24 sm:w-16 animate-bounce md:mb-0 sm:mb-5"
        />
      </Link>
      <div className="md:flex flex-row sm:hidden md:my-4">
        {enlacesFooter.map((enlace, i) => {
          return (
            <p
              key={i}
              className="mx-5 font-bold cursor-pointer dark:hover:text-gray-600 hover:text-gray-500"
            >
              <Link href={enlace.ruta}>{enlace.nombre}</Link>
            </p>
          );
        })}
      </div>
      {enlacesIconFooter.map((enlace, i) => {
        const redes = enlace.redes;
        return <EnlacesIconsFooter key={i} enlace={redes} />;
      })}

      <p className="select-none md:w-full md:text-base sm:text-xs text-center">
        © 2023 Movimiento Dynamos, Inc. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
