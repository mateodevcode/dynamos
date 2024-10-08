"use client";
import { useEffect, useState } from "react";
import CardTestimonio from "./CardTestimonio";
import SpinnerLoad from "../loading/SpinnerLoad";

const Testimonios = () => {
  const [testimonioDynamo, setTestimonioDynamo] = useState([]);

  useEffect(() => {
    const testimonios = async () => {
      const res = await fetch("/api/testimonio", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setTestimonioDynamo(data);
    };
    testimonios();
  }, []);

  return (
    <div
      className={`w-full lg:pt-32 md:pt-32 sm:pt-24 bg-white dark:bg-gray-950`}
    >
      <div className="flex flex-col justify-start items-center">
        <h2 className="text-center md:text-5xl font-bold select-none sm:text-3xl text-black dark:text-white">
          Nuestros Testimonios
        </h2>
        <div className="w-full flex flex-col justify-center items-center text-black dark:text-white">
        {testimonioDynamo.length === 0  && (
            <SpinnerLoad size={"4px"} />
          )}
          {testimonioDynamo && (
            <CardTestimonio testimonioDynamo={testimonioDynamo} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonios;
