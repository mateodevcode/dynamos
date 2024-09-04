"use client";
import React, { useEffect, useState } from "react";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

const CardTestimonio = ({ testimonioDynamo }) => {
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
    <>
      <BsFillArrowLeftSquareFill
        className="lg:text-6xl md:text-6xl cursor-pointer sm:text-3xl md:mx-6"
        onClick={onclickAtras}
      />
      <div
        className={`lg:w-8/12 md:w-full md:h-96 flex md:flex-row sm:flex-col justify-center items-center select-none sm:mt-16 sm:mb-20 sm:w-9/12 sm:h-96 shadow-lg shadow-black/50 sm:rounded-xl dark:shadow-white/50 dark:shadow-lg dark:rounded-xl dark:bg-gray-950`}
      >
        <div className="md:mt-0 sm:-mt-24 md:-mb-0 sm:mb-5">
          <img
            src={testimonioDynamo[contador].img}
            alt={`Testimonio de ${testimonioDynamo[contador].nombre}`}
            className="lg:w-60 md:w-80 rounded-3xl lg:scale-125 md:scale-100 md:mr-0 sm:w-36 sm:scale-100 sm:mr-3"
          />
        </div>
        <div className="flex flex-col md:w-7/12 lg:ml-20 md:ml-10 sm:w-10/12">
          <div className="flex flex-col md:w-full sm:w-full sm:text-justify overflow-auto prueba">
            <p
              className={`lg:text-base md:text-sm md:mb-5 sm:text-xs sm:mb-1 italic md:h-40 sm:h-24 font-serif`}
            >
              {testimonioDynamo[contador].testimonio}
            </p>
          </div>
          <p className={`md:mb-2 md:text-xl sm:text-xs sm:mb-1 mt-2`}>
            <strong>{testimonioDynamo[contador].nombre}</strong>
          </p>
          <p className={`lg:text-xl md:text-lg sm:text-xs`}>
            {testimonioDynamo[contador].cargo}
          </p>
        </div>
      </div>
      <BsFillArrowRightSquareFill
        className="lg:text-6xl md:text-6xl cursor-pointer sm:text-3xl md:mx-6"
        onClick={onclickAdelante}
      />
    </>
  );
};

export default CardTestimonio;
