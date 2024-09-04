import { vision } from "@/data/misionVisionObjetivos";
import Image from "next/image";

function Vision() {
  return (
    // principal
    <div className="w-full h-full flex flex-col justify-center bg-imagen-aboutus lg:pt-6 lg:pb-60 sm:pt-0 pb-0">
      {/* vision */}
      <div className="flex flex-col w-full">
        {/* recuadro1 */}
        <div className="flex flex-row w-full items-center">
          <div className="flex w-1/4"></div>
          <div className="flex justify-end w-3/4 lg:mr-10 md:mr-10">
            <Image className="w-7/12 h-4/6" src="https://i.postimg.cc/bwHjkx85/vision1.jpg" alt="" width={600} height={600} />
          </div>
        </div>
        {/* recuadro2 */}
        <div className="flex flex-row items-center">
          <div className="flex justify-start w-3/4 lg:ml-10 md:ml-10">
            <Image className="w-6/12" src="https://i.postimg.cc/Xvj68rYY/vision2.jpg" alt="" width={600} height={600} />
          </div>
          <div className="flex w-1/4"></div>
        </div>
      </div>
      <div
        className={`flex flex-row lg:w-full lg:h-full md:w-full md:h-full justify-center items-center lg:-mt-[620px] lg:-ml-24 md:-mt-[555px] md:-ml-28 sm:w-72 sm:h-72 sm:-mt-[255px] sm:ml-3 `}
      >
        <div className="lg:text-9xl md:text-8xl -rotate-90 font-extrabold text-gray-500 dark:opacity-30 opacity-40 lg:-mr-[265px] sm:text-5xl sm:-mr-[100px] md:-mr-[205px] ">
          VISION
        </div>
        <div
          className={`flex flex-col lg:w-[500px] lg:h-[500px] lg:justify-around items-center dark:bg-gray-900 bg-gray-100`}
        >
          <h1 className="dark:text-white lg:text-7xl md:text-7xl text-start italic font-extrabold lg:my-16 md:my-16 sm:text-4xl sm:my-2">
            {vision.titulo.toUpperCase()}
          </h1>
          <p className="lg:text-xl dark:text-white font-bold text-justify lg:w-96 lg:ml-6 lg:mb-10 -z-0 sm:text-[8.7px] sm:mb-2 sm:px-5 lg:px-0 md:text-xl md:mb-10 md:w-[450px] md:px-16">
            {vision.contenido}
          </p>
          <p className="lg:text-lg md:text-lg italic font-semibold sm:text-[10px]">
            @Dynamos_movimiento
          </p>
          <p className="text-xl italic font-semibold">...........</p>
        </div>
      </div>
    </div>
  );
}

export default Vision;
