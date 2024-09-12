"use client";
import EnlacesIconsFooter from "@/components/footer/EnlacesIconsFooter";
import { enlacesIconFooter } from "@/data/enlaces.icon.footer";
import Link from "next/link";
import Image from "next/image";
import { enlacesNavbar, logo } from "@/data/navbar";

function Footer() {
  return (
    <div className="flex flex-col justify-center items-center pt-20 pb-10 bg-white dark:bg-gray-950 text-black dark:text-white w-full">
      <Link href="/">
        <Image
          src={logo.src}
          alt={logo.alt}
          className="lg:w-24 md:w-28 sm:w-8 md:mb-0 sm:mb-5"
          width={400}
          height={400}
        />
      </Link>
      
        {/* <Categoria /> */}
      
      <div className="md:flex flex-row sm:hidden md:my-4 pt-10">
        {enlacesNavbar.map((enlace, i) => {
          return (
            <p
              key={i}
              className="mx-5 cursor-pointer dark:hover:text-gray-500 hover:text-gray-500"
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
      <div className="select-none md:w-full md:text-base sm:text-xs text-center">
        © 2023 Movimiento Dynamos. Todos los derechos reservados.
      </div>
    </div>
  );
}

export default Footer;
