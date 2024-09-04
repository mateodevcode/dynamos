"use client";
import { comma } from "@/data/comma";
import Testimonio from "./Testimonio";
import Image from "next/image";

const CardTestimonio = ({testimonioDynamo}) => {

  return (
    <div className="text-gray-600 body-font dark:bg-gray-950">
      <div className="container lg:px-32 md:px-0 sm:px-5 py-24 mx-auto">
        {/* <h2 className="text-center font-bold select-none text-black dark:text-white lg:mt-10 md:mt-10 sm:mt-5 lg:mb-20 md:mb-20 sm:mb-10 font-sans lg:text-5xl md:text-5xl sm:text-3xl">
          Nuestros Testimonios
        </h2> */}
        <div className="flex flex-wrap -m-4">
          {testimonioDynamo.map((testimonio, index) => (
            <div className="p-4 md:w-1/2 w-full" key={index}>
              <div className="h-full bg-gray-100 dark:bg-gray-900 p-8 rounded">
                <div className="block w-5 h-5 text-gray-400 mb-4">
                  {comma.icon}
                </div>
                <p className="leading-relaxed mb-6 dark:text-white text-black">
                  {testimonio.testimonio}
                </p>
                <div className="flex flex-row justify-between items-center">
                  <div className="inline-flex items-center">
                    <Image
                      alt="testimonial"
                      src={testimonio.img}
                      className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                      width={106}
                      height={106}
                    />
                    <span className="flex-grow flex flex-col pl-4 justify-start items-start">
                      <span className="title-font font-medium text-gray-900 dark:text-white">
                        {testimonio.nombre}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {testimonio.cargo}
                      </span>
                    </span>
                  </div>
                  <div>
                    <Testimonio id={testimonio._id} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardTestimonio;
