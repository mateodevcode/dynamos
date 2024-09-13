"use client";
import { comma } from "@/data/comma";
import Testimonio from "./Testimonio";
import Image from "next/image";

const CardTestimonio = ({testimonioDynamo}) => {

  return (
    <div className="text-gray-600 body-font dark:bg-gray-950">
      <div className="container lg:px-32 md:px-0 sm:px-5 lg:pt-20 md:pt-20 sm:pt-10 pb-10 mx-auto">
        <div className="flex flex-wrap -m-4">
          {testimonioDynamo.map((testimonio, index) => (
            <div className="p-4 md:w-1/2 w-full" key={index}>
              <div className="h-full bg-gray-100 dark:bg-gray-900 p-8 rounded">
                <div className="block lg:w-5 md:w-5 sm:w-3 lg:h-5 md:h-5 sm:h-3 text-gray-400 mb-2">
                  {comma.icon}
                </div>
                <p className="leading-relaxed mb-6 dark:text-white text-black lg:text-base md:text-base sm:text-xs">
                  {testimonio.testimonio}
                </p>
                <div className="flex flex-row justify-between items-center">
                  <div className="inline-flex items-center">
                    <Image
                      alt="testimonial"
                      src={testimonio.img}
                      className="lg:w-12 md:w-12 sm:w-6 lg:h-12 md:h-12 sm:h-6 rounded-full flex-shrink-0 object-cover object-center"
                      width={106}
                      height={106}
                    />
                    <span className="flex-grow flex flex-col pl-4 justify-start items-start">
                      <span className="title-font font-medium text-gray-900 dark:text-white lg:text-base md:text-base sm:text-xs">
                        {testimonio.nombre}
                      </span>
                      <span className="text-gray-500 lg:text-base md:text-base sm:text-xs">
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
