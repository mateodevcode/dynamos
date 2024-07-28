import { objetivoGeneral } from "@/data/misionVisionObjetivos";

function ObjGeneral() {

  return (
    // principal
    <div className="md:w-full md:h-full flex flex-col justify-center bg-imagen-aboutus lg:pt-6 lg:pb-60 md:pb-28 md:pt-20">
      {/* Objetivos */}
      <div className="flex md:flex-row sm:flex-col justify-center items-center w-auto">
        {/* recuadro1 */}
        <div className=" flex flex-col justify-between items-center md:w-[670px] sm:w-auto md:py-20 md:-mt-32">
          <div
            className={`trapecio md:hidden sm:-mr-0 md:-mr-[80px] md:w-[556px] sm:w-[200px] md:h-[150px] sm:h-24 md:-mt-10 md:ml-9 sm:ml-40 md:mb-7 sm:z-30 bg-white dark:bg-gray-950`}
          ></div>
          <div className="md:w-[820px] sm:w-[350px] md:h-72 sm:h-12  md:text-8xl sm:text-3xl md:mb-1 sm:mb-20 font-bold md:ml-20 sm:ml-2 sm:text-center md:mt-24 sm:mt-6">
            <h1 className="md:mt-10 sm:mt-8 text-white">OBJETIVOS</h1>
          </div>
          {/* Hexagono 1 */}
          <div 
            className={`hexagono1 md:w-[668px] sm:w-[360px] md:h-[528px] sm:h-[300px] justify-center items-center bg-white dark:bg-gray-950`}
          >
            <div className="hexagono2 md:w-[652px] sm:w-[326px] md:h-[512px] sm:h-[276px] justify-between items-center md:ml-2 sm:ml-4 md:mt-2 sm:mt-3"></div>
          </div>
          <div className="  md:-mt-[470px] sm:-mt-72 w-[360px] h-auto z-30 py-5">
            <h1 className="text-white text-center md:text-4xl sm:text-xl font-bold md:mb-16 sm:mb-4 uppercase italic sombraText">
              {objetivoGeneral.titulo}
            </h1>
            <p className="text-white md:text-2xl sm:text-sm md:ml-4 md:w-96 sm:w-60 sm:ml-20 sm:mt-2">
              {objetivoGeneral.contenido}
            </p>
          </div>
        </div>
        {/* recuadro2 */}
        <div className="flex flex-col justify-around items-center md:w-[670px] sm:w-[360px]">
          <div
            className={`trapecio md:flex sm:hidden sm:-mr-0 md:-mr-[80px] md:w-[556px] sm:w-[250px] md:h-[100px] sm:h-28 md:-mt-7 sm:-mt- md:ml-9 sm:ml-28 md:mb-12 bg-white dark:bg-gray-950`}
          ></div>
          {/* Hexagono2 */}
          <div
            className={`hexagono3  md:w-[668px] sm:w-[360px] md:h-[528px] sm:h-[300px] justify-center items-center md:mb-60 sm:mb-24 bg-white dark:bg-gray-950`}
          >
            <div className="hexagono4 md:w-[652px] sm:w-[326px] md:h-[512px] sm:h-[276px] justify-between items-center md:ml-2 sm:ml-4 md:mt-2 sm:mt-3"></div>
          </div>
          <div
           className={`md:justify-center md:items-center text-transparent trapecio2 md:-mr-[80px] md:w-[556px] sm:w-[200px] sm:h-24 md:ml-9 sm:ml-40
            bg-white dark:bg-gray-950`}
          >
            <p className="md:justify-center md:items-center text-black dark:text-white lg:text-xl md:text-2xl italic font-semibold md:ml-32 sm:ml-4">
              @Dynamos_movimiento
            </p>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}

export default ObjGeneral;
