"use client";
import Link from "next/link";
import EnlacesIconTeam from "@/components/team/EnlacesIconTeam";

const CardTeam = ({ teamDynamo }) => {

  return teamDynamo.map((valor, i) => {
    return (
      <div
        className={`flex md:max-h-96 md:w-96 rounded-2xl flex-col text-center justify-center items-center sm:max-h-80 sm:w-72 m-4 sm:px-16 sm:py-12 shadow-md dark:bg-gray-900/50 dark:shadow-white/10 bg-gray-200 shadow-black/50 cursor-pointer lg:hover:scale-[104%] transition duration-500 ease-in-out scrol-img`}
        key={i}
      >
        <Link href={`/team/${valor._id}`}>
          <img
            className="flex w-52 rounded-full items-center justify-center mb-6"
            src={valor.img}
            alt={`Imagen de ${valor.nombre}`}
          />
          <p
            className={`font-bold mb-1 cursor-pointer md:text-base sm:text-sm text-black dark:text-white`}
          >
            {valor.nombre}
          </p>
          <p
            className={`mb-4 md:text-sm sm:text-xs dark:text-gray-400 text-gray-600`}
          >
            {valor.cargo}
          </p>
        </Link>
        <EnlacesIconTeam valores={valor} />
      </div>
    );
  });
};

export default CardTeam;
