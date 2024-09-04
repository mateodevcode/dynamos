import { mision } from "@/data/misionVisionObjetivos";
import Image from "next/image";

function Mision() {

  return (
    <div className={`flex flex-row justify-center items-center w-full h-full bg-imagen-aboutus sm:mb-20`}>
      {/* Mision */}
      <div
        className="flex flex-col justify-center items-center h-auto lg:w-[600px] lg:pb-60 lg:pt-20 lg:mb-20 md:w-[600px] md:pb-60 md:pt-20 md:mb-20
      sm:w-[600px] sm:pb-10 sm:pt-20 sm:mb-20"
       >
        {/* circulo */}
        <div
          className={`flex flex-col rounded-full items-center lg:w-[600px] lg:h-[600px] lg:-mb-20 md:w-[600px] md:h-[600px] md:-mb-32 sm:w-[320px] sm:h-[320px] sm:-mb-64 dark:bg-gray-900 bg-gray-100`}
        ></div>
        {/* texto */}
        <div className="lg:w-96 lg:-mt-96 lg:mr-24 md:w-96 md:-mt-96 md:mr-24 sm:w-48 sm:-mt-7">
          <h1 className="italic font-extrabold lg:text-[68px] lg:mb-16 lg:ml-10 md:text-[68px] md:mb-10 md:ml-10 sm:text-3xl sm:mb-3 sm:ml-0 dark:text-white">
            {mision.titulo.toUpperCase()}
          </h1>
          <p className="text-justify font-bold lg:text-[12px] lg:mb-12 lg:w-80 lg:-ml-2 md:text-base md:mb-12 md:w-80 md:-ml-1 sm:text-[8.7px] sm:mb-6 sm:w-44 sm:-ml-8 sm:font-extrabold-bold dark:text-white">
            {mision.contenido}
          </p>
          <p className="text-gray-400 italic lg:text-sm md:text-sm sm:text-xs font-semibold lg:ml-18 md:ml-36 sm:ml-2">
            @Dynamos_movimiento
          </p>
        </div>
      </div>
      {/* Imagenes */}
      <div className="flex flex-col justify-center items-center w-auto h-auto lg:-mt-36 lg:-ml-52 md:-mt-48 md:-ml-52 sm:-mt-3 sm:-ml-32 sm:mr-2">
        <Image
          className="lg:w-64 lg:h-56 lg:my-2 md:w-64 md:h-56 md:my-2 sm:w-48 sm:h-28 sm:my-1"
          src="https://i.postimg.cc/NF9cHZf8/mision1.jpg"
          alt=""
          width={600} height={600}
        />
        <Image
          className="lg:w-64 lg:h-56 lg:my-2 md:w-64 md:h-56 md:my-2 sm:w-48 sm:h-28 sm:my-1"
          src="https://i.postimg.cc/qRZrgp0M/mision2.jpg"
          alt=""
          width={600} height={600}
        />
        <Image
          className="lg:w-64 lg:h-56 lg:my-2 md:w-64 md:h-56 md:my-2 sm:w-48 sm:h-28 sm:my-1"
          src="https://i.postimg.cc/HWRHgWB6/mision3.jpg"
          alt=""
          width={600} height={600}
        />
      </div>
    </div>
  );
}

export default Mision;
