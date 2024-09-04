"use client";

import Image from "next/image";
import { eventos } from "@/data/eventoDynamo";
import DrawerEventos from "@/components/eventos/DrawerEventos";
import { useState } from "react";

const CardEvento = () => {
  const [indiceSeleccionado, setIndiceSeleccionado] = useState(null);
  const handleClick = (indice) => {
    setIndiceSeleccionado(indice);
  };

  const image = eventos.map((evento) => {
    4;
    const img_eventos = [[evento.img]];
    return img_eventos;
  });

  const componentes_imagenes = [
    [image[0][0][0]],
    [image[1][0][0]],
    [image[2][0][0]],
    [image[3][0][0]],
  ];

  const event = eventos.map((evento) => {
    return evento;
  });

  const datosEventos = [[event[0]], [event[1]], [event[2]], [event[3]]];

  return eventos.map((valor, i) => {
    return (
      <div key={i} className="flex justify-center items-center sm:m-3 sm:mb-5">
        <div
          className={`flex flex-col justify-center items-center rounded-md scrol-img`}
          onClick={() => handleClick(i)}
        >
          <Image
            src={valor.imgPrincipal}
            alt={`evento ${valor.titulo}`}
            className="w-80 h-96 rounded-xl mb-4"
            width={600}
            height={400}
          />
          <div className="flex flex-col justify-center items-start sm:text-xs md:text-base lg:text-base text-black dark:text-white">
            <div className="flex mb-3 font-semibold">
              <p>{valor.fecha}</p>
              <Image
                src={valor.imgAutor}
                alt={`Imagen de ${valor.autor}`}
                className="md:w-7 rounded-full md:mx-4 sm:mx-2 sm:w-5"
                width={600}
                height={400}
              />
              <p>{valor.autor}</p>
            </div>
            <p
              className={`md:w-80 md:text-lg sm:text-justify sm:text-xs sm:w-80 mb-4 lg:h-28 md:h-28 sm:h-10`}
            >
              {valor.descripcion}
            </p>
            <DrawerEventos
              imagenes={componentes_imagenes[indiceSeleccionado]}
              datosEvento={datosEventos[indiceSeleccionado]}
            />
          </div>
        </div>
      </div>
    );
  });
};

export default CardEvento;
