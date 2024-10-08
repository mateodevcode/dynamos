"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import EnlacesIconTeam from "./EnlacesIconTeam";
import Link from "next/link";
import SpinnerLoad from "../loading/SpinnerLoad";

const CardTeamOne = () => {
  const [team, setTeam] = useState(null);
  const Params = useParams();

  useEffect(() => {
    const cargarUserTeam = async () => {
      const res = await fetch("/api/userTeam", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setTeam(data.filter((valor) => valor._id === Params.id));
    };
    cargarUserTeam();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen dark:bg-gray-950">
      {team ? (
        team.map((valor, i) => {
          return (
            <div
              className={`flex md:max-h-96 md:w-96 rounded-2xl flex-col text-center justify-center items-center sm:max-h-80 sm:w-72 m-4 sm:px-16 sm:py-16 shadow-md dark:bg-gray-900/50 dark:shadow-white/10 bg-gray-200 shadow-black/50 cursor-pointer select-none`}
              key={i}
            >
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

              <EnlacesIconTeam valores={valor} />
            </div>
          );
        })
      ) : (
        <SpinnerLoad size="4px" />
      )}
      {team && (
        <div>
          <Link href="/team">
            <button className="mt-4 bg-blue-600 hover:bg-blue-400 text-white rounded-lg px-3 py-2 select-none font-semibold dark mx-2">
              Volver
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CardTeamOne;
