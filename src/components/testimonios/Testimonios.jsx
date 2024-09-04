"use client";
import { useEffect, useState } from "react";
import CardTestimonio from "./CardTestimonio";
import { Spinner } from "@chakra-ui/react";

const Testimonios = () => {
  const [testimonioDynamo, setTestimonioDynamo] = useState([]);

  useEffect(() => {
    const testimonios = async () => {
      const res = await fetch("http://localhost:3000/api/testimonio");
      const data = await res.json();
      setTestimonioDynamo(data);
    };
    testimonios();
  }, []);

  return (
    <div
      className={`w-full lg:pt-32 md:pt-32 sm:pt-24 bg-white dark:bg-gray-950`}
    >
      <div>
        <h2 className="text-center md:text-5xl font-bold select-none sm:text-3xl sm:mb-5 text-black dark:text-white">
          Nuestros Testimonios
        </h2>
        <div className="w-full flex justify-center items-center text-black dark:text-white">
          {testimonioDynamo.length === 0 ? (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="red.500"
              size="xl"
              my="20"
            />
          ) : (
            <CardTestimonio testimonioDynamo={testimonioDynamo} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonios;
