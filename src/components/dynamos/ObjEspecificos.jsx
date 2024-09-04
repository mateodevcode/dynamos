import { objetivosEspecificos } from "@/data/misionVisionObjetivos";

function ObjEspecificos() {
  return (
    // principal
    <div className="flex flex-col lg:w-full lg:h-full md:w-full md:h-full justify-center bg-imagen-aboutus lg:pt-6 lg:pb-60 sm:pt-0 md:pb-20 sm:pb-0 md:pt-32 lg:mt-60 sm:mt-0 md:-mt-16">
      {/* Objetivos */}
      <div className="flex lg:flex-row md:flex-col sm:flex-col justify-center items-center w-full">
        {/* recuadro1 */}
        <div className="flex flex-col justify-around items-center lg:w-[560px] md:w-[430px] sm:w-[360px] py-20 lg:-mt-[210px] sm:mt-0">
          <div className="lg:mb-24 md:mb-24 sm:mb-10 lg:w-[460px] md:w-[460px] sm:w-auto justify-center dark:bg-gray-950 bg-white md:text-7xl sm:text-3xl font-bold uppercase">
            <h1 className="text-center dark:text-white text-black">
              {objetivosEspecificos.titulo}
            </h1>
          </div>
          {/* Hexagono 1 */}
          <div
            className="hexagono1 lg:w-[668x] md:w-[668px] sm:w-[360px] md:h-[528px] sm:h-[300px] justify-center items-center bg-gray-900 dark:bg-gray-100"
          >
            <div className="hexagono4 flex flex-col md:w-[652px] sm:w-[352px] md:h-[512px] sm:h-[292px] justify-center items-center md:ml-2 sm:ml-1 md:mt-2 sm:mt-1">
              <p className="text-white md:text-2xl md:flex sm:hidden sm:text-sm md:font-normal sm:font-bold md:ml-4 md:w-96 sm:w-64 sm:ml-9 sm:mt-20 z-30">
                {objetivosEspecificos.contenido2}
              </p>
              <p className="text-white md:text-2xl sm:flex md:hidden sm:text-sm sm:font-bold md:ml-4 md:w-96 sm:w-64 sm:mt-8 sm:ml-5 z-30">
                {objetivosEspecificos.contenido}
              </p>
              <div className="bg-black md:w-full sm:w[360px] md:h-72 sm:h-32 opacity-60 text-transparent md:-mt-60 sm:-mt-28">
                {objetivosEspecificos.contenido}
              </div>
            </div>
          </div>
        </div>
        {/* recuadro2 */}
        <div className="flex md:flex-col sm:flex-col justify-center items-center md:w-[550px] sm:w-[360px] -mt-60">
          {/* Hexagono2 */}
          <div
            className="hexagono3 lg:w-[668x] md:w-[668px] sm:w-[360px] md:h-[528px] sm:h-[300px] justify-center items-center md:mb-4 bg-gray-900 dark:bg-gray-100 lg:mt-0 md:mt-44 sm:mt-44"
          >
            <div className=" flex flex-col hexagono6  md:w-[652px] sm:w-[352px] md:h-[512px] sm:h-[292px] justify-center items-center md:ml-2 sm:ml-1 md:mt-2 sm:mt-1">
              <p className="text-white md:text-2xl sm:flex md:hidden sm:text-sm sm:font-bold md:ml-4 md:w-96 sm:w-64 sm:ml-5sm:-mt-4 z-30">
                {objetivosEspecificos.contenido2}
              </p>
              <p className="text-white md:w-96 sm:w-60 md:flex sm:hidden md:text-2xl md:ml-4 md:-mt-28 z-30">
                {objetivosEspecificos.contenido}
              </p>
              <div className="bg-black md:w-full sm:w[360px] md:h-60 sm:h-32 opacity-60 text-transparent md:-mt-48 sm:-mt-32">
                {objetivosEspecificos.contenido2}
              </div>
            </div>
          </div>
          <div
            className="hexagono3 lg:w-[668x] md:w-[668px] sm:w-[360px] md:h-[528px] sm:h-[300px] justify-center items-center md:mb-12 md:hidden sm:flex bg-gray-900 dark:bg-gray-100 lg:mt-0 md:mt-0 sm:mt-4"
          >
            <div className=" flex flex-col hexagono6  md:w-[652px] sm:w-[352px] md:h-[512px] sm:h-[292px] justify-center items-center md:ml-2 sm:ml-0 md:mt-2 sm:mt-0">
              <p className="text-white md:text-2xl sm:flex md:hidden sm:text-sm sm:font-bold md:ml-4 md:w-96 sm:w-64 sm:ml-5 sm:mt-2 z-30">
                {objetivosEspecificos.contenido3}
              </p>
              <p className="text-white md:w-96 sm:w-60 md:flex sm:hidden md:text-2xl md:ml-4 md:-mt-28 z-30">
                {objetivosEspecificos.contenido}
              </p>
              {/* <div className="bg-black md:w-full sm:w[360px] md:h-60 sm:h-32 opacity-60 text-transparent md:-mt-48 sm:-mt-32">
                {objetivosEspecificos.contenido2}
              </div> */}
            </div>
          </div>
          <div className="hexagono5 flex flex-col md:w-[608px] sm:w-[360px] md:h-[450px] sm:h-80 justify-start items-center md:-mb-52 lg:mt-16 md:-mt-0 sm:-mt-20 md:flex sm:hidden dark:bg-gray-900 bg-gray-100">
            <p className="text-white md:w-96 sm:w-64 lg:text-xl md:text-xl sm:text-sm md:text-start lg:mt-16 md:mt-8 md:font-normal sm:font-bold sm:mt-9 lg:ml-4 md:ml-12 sm:text-justify md:flex sm:hidden z-30">
              {objetivosEspecificos.contenido3}
            </p>
            <div className="bg-black md:w-full md:h-48 sm:h-32 sm:w-[360px] opacity-60 text-transparent md:-mt-40 sm:-mt-32">
              {objetivosEspecificos.contenido3}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ObjEspecificos;
