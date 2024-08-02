import { objetivosEspecificos } from "@/data/misionVisionObjetivos";

function Hexagono1() {
  return (
    <div
        className={`hexagono1 md:w-[668px] sm:w-[360px] md:h-[528px] sm:h-[300px] justify-center items-center sm: bg-white dark:bg-gray-950`}
      >
        <div className="hexagono4 flex flex-col md:w-[652px] sm:w-[326px] md:h-[512px] sm:h-[276px] justify-center items-center md:ml-2 sm:ml-4 md:mt-2 sm:mt-3 ">
          <p className="text-white md:text-2xl md:flex sm:hidden sm:text-sm md:font-normal sm:font-bold md:ml-4 md:w-96 sm:w-64 sm:ml-9 sm:mt-20 z-30">
            {/* {objetivosEspecificos.contenido2} */}
          </p>
          {/* Texto sm */}
          <p className="text-white md:text-2xl sm:flex md:hidden sm:text-sm sm:font-bold md:ml-4 md:w-96 sm:w-64 sm:mt-8 sm:ml-5 z-30">
            {/* {objetivosEspecificos.contenido} */}
          </p>
          <div className="bg-black md:w-full sm:w[360px] md:h-72 sm:h-32 opacity-60 text-transparent md:-mt-60 sm:-mt-28">
            {objetivosEspecificos.contenido}
          </div>
        </div>
      </div>
  )
}

export default Hexagono1