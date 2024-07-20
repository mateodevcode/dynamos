"use client";
import testimonioDynamo from "../data/testimoniosDynamo";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import { useEffect, useState } from "react";
import Image from "next/image";

function Testimonios() {
  const [contador, setContador] = useState(0);

  const onclickAdelante = () => {
    setContador(contador + 1);
  };

  const onclickAtras = () => {
    setContador(contador - 1);
  };

  useEffect(() => {
    const lonTestimonios = testimonioDynamo.length;
    if (contador == lonTestimonios - 1) {
      setContador(0);
    }
    if (contador == 0) {
      setContador(1);
    }
  }, [contador]);

  return (
    <div
      className={`w-full lg:pt-32 md:pt-32 sm:pt-24 bg-white dark:bg-gray-950`}
    >
      <div>
        <h2 className="text-center md:text-5xl font-bold select-none sm:text-3xl sm:mb-5 text-black dark:text-white">
          Nuestros Testimonios
        </h2>
        <div className="flex w-full justify-center items-center text-black dark:text-white">
          <div>
            <BsFillArrowLeftSquareFill
              className="md:text-6xl mr-3 cursor-pointer sm:text-3xl"
              onClick={onclickAtras}
            />
          </div>
          <div
            className={`md:w-8/12 md:h-96 flex md:flex-row sm:flex-col justify-center items-center select-none sm:mt-16 sm:mb-20 sm:w-9/12 sm:h-96 shadow-lg shadow-black/50 sm:rounded-xl dark:shadow-white/50 dark:shadow-lg dark:rounded-xl dark:bg-gray-950`}
          >
            <div className="md:mt-0 sm:-mt-24 md:-mb-0 sm:mb-5">
              <Image
                src={testimonioDynamo[contador].img}
                alt={`Testimonio de ${testimonioDynamo[contador].nombre}`}
                className="md:w-60 rounded-3xl md:scale-125 md:mr-0 sm:w-36 sm:scale-100 sm:mr-3"
              />
            </div>
            <div className="flex flex-col md:w-7/12 md:ml-20 sm:w-10/12">
              <div className="flex flex-col md:w-full sm:w-10/12 sm:text-justify overflow-auto prueba">
                <p
                  className={`md:text-2xl md:mb-5 sm:text-xs sm:mb-1 italic md:h-40 sm:h-24 font-serif lg:text-base`}
                >
                  {testimonioDynamo[contador].testimonio}
                </p>
              </div>
              <p className={`md:mb-2 md:text-xl sm:text-xs sm:mb-1 mt-2`}>
                <strong>{testimonioDynamo[contador].nombre}</strong>
              </p>
              <p className={`md:text-xl sm:text-xs`}>
                {testimonioDynamo[contador].cargo}
              </p>
            </div>
          </div>
          <BsFillArrowRightSquareFill
            className="md:text-6xl ml-3 cursor-pointer sm:text-3xl"
            onClick={onclickAdelante}
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonios;
