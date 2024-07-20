import { objetivosEspecificos } from "../data/misionVisionObjetivos";

function ObjEspecificos() {
  return (
    // principal
    <div className="flex flex-col lg:w-full lg:h-full md:w-full md:h-full justify-center bg-imagen-aboutus lg:pt-6 lg:pb-60 sm:pt-10 md:pb-20 sm:pb-20 md:pt-32 md:-mt-16">
      {/* Objetivos */}
      <div className="flex md:flex-row sm:flex-col justify-center items-center w-full">
        {/* recuadro1 */}
        <div className=" flex flex-col justify-around items-center md:w-[670px] sm:w-[360px] py-20 md:-mt-[210px]">
          <div className="md:w-[660px] md:h-80 sm:h-28 justify-center bg-black text-white md:text-7xl sm:text-3xl font-bold md:ml-64 sombraText md:pt-24 sm:mb-20 uppercase">
            <h1 className="md:mt-5 sm:mt-4 sm:ml-5 md:text-start sm:text-center">
              {objetivosEspecificos.titulo}
            </h1>
          </div>
          {/* Hexagono 1 */}
          <div
            className={`hexagono1 md:w-[668px] sm:w-[360px] md:h-[528px] sm:h-[300px] justify-center items-center sm:z-30 bg-white dark:bg-gray-950`}
          >
            <div className="hexagono4 flex flex-col md:w-[652px] sm:w-[326px] md:h-[512px] sm:h-[276px] justify-center items-center md:ml-2 sm:ml-4 md:mt-2 sm:mt-3 ">
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
        <div className="flex md:flex-col sm:flex-col justify-center items-center md:w-[670px] sm:w-[360px] md:-mt-16 sm:-mt-32">
          {/* Hexagono2 */}
          <div
            className={`hexagono3 md:w-[668px] sm:w-[360px] md:h-[528px] sm:h-[300px] justify-center items-center md:mb-12 dark:bg-gray-950 bg-white`}
          >
            <div className=" flex flex-col hexagono6  md:w-[652px] sm:w-[326px] md:h-[512px] sm:h-[276px] justify-center items-center md:ml-2 sm:ml-4 md:mt-2 sm:mt-3">
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
            className={`hexagono3 md:w-[668px] sm:w-[360px] md:h-[528px] sm:h-[300px] justify-center items-center md:mb-12 sm:-mt-16 md:hidden sm:flex`}
          >
            <div className=" flex flex-col hexagono6  md:w-[628px] sm:w-[326px] md:h-[496px] sm:h-[276px] justify-center items-center md:ml-5">
              <p className="text-white md:text-2xl sm:flex md:hidden sm:text-sm sm:font-bold md:ml-4 md:w-96 sm:w-64 sm:ml-5 sm:mt-2 z-30">
                {objetivosEspecificos.contenido3}
              </p>
              <p className="text-white md:w-96 sm:w-60 md:flex sm:hidden md:text-2xl md:ml-4 md:-mt-28 z-30">
                {objetivosEspecificos.contenido}
              </p>
              <div className="bg-black md:w-full sm:w[360px] md:h-60 sm:h-32 opacity-60 text-transparent md:-mt-48 sm:-mt-32">
                {objetivosEspecificos.contenido2}
              </div>
            </div>
          </div>
          <div className="hexagono5 flex flex-col md:w-[608px] sm:w-[360px] md:h-[450px] sm:h-80 justify-start items-center md:-mb-52 md:-mt-0 sm:-mt-20 md:flex sm:hidden">
            <p className="text-white md:w-96 sm:w-64 md:text-2xl sm:text-sm md:text-start md:mt-8 md:font-normal sm:font-bold sm:mt-9 md:ml-12 sm:text-justify md:flex sm:hidden z-30">
              {objetivosEspecificos.contenido3}
            </p>
            <div className="bg-black md:w-full md:h-48 sm:h-32 sm:w-[360px] opacity-60 text-transparent md:-mt-48 sm:-mt-32">
              {objetivosEspecificos.contenido3}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ObjEspecificos;
