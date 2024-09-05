"use client";
import Image from "next/image";
import DrawerEventos from "@/components/eventos/DrawerEventos";
import { useEffect, useState } from "react";
import FechaFinal from "./FechaFinal";

const CardEvento = () => {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    const cargarEventos = async () => {
      const response = await fetch("/api/evento", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setEventos(data.reverse());
    };
    cargarEventos();
  }, []);


  return (
    <>
      {eventos.map((evento, i) => (
        <div
          key={i}
          className="flex justify-center items-center sm:m-3 sm:mb-5"
        >
          <div className="flex flex-col justify-center items-center rounded-md scrol-img">
            <Image
              src={evento.imgPrincipal}
              alt={`evento ${evento.titulo}`}
              className="w-80 h-96 rounded-xl mb-4"
              width={600}
              height={400}
            />
            <div className="flex flex-col justify-center items-start sm:text-xs md:text-base lg:text-base text-black dark:text-white">
              <div className="flex mb-3 font-semibold">
                <FechaFinal evento={evento} />
                <Image
                  src={evento.imgAutor}
                  alt={`Imagen de ${evento.autor}`}
                  className="md:w-7 rounded-full md:mx-4 sm:mx-2 sm:w-5"
                  width={600}
                  height={400}
                />
                <p>{evento.autor}</p>
              </div>
              <p
                className={`md:w-80 md:text-lg sm:text-justify sm:text-xs sm:w-80 mb-4 lg:h-28 md:h-28 sm:h-10`}
              >
                {evento.descripcion}
              </p>
              <DrawerEventos imagenes={evento.img} evento={evento} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
  // });
};

export default CardEvento;
