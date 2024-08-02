import { objetivosEspecificos } from "@/data/misionVisionObjetivos";

function Hexagono2 () {
  return (
    <div><div
    className={`hexagono3 md:w-[668px] sm:w-[360px] md:h-[528px] sm:h-[300px] justify-center items-center md:mb-12 dark:bg-gray-950 bg-white`}
  >
    <div className=" flex flex-col hexagono6  md:w-[652px] sm:w-[326px] md:h-[512px] sm:h-[276px] justify-center items-center md:ml-2 sm:ml-4 md:mt-2 sm:mt-3">
      {/* Texto sm */}
      <p className="text-white md:text-2xl sm:flex md:hidden sm:text-sm sm:font-bold md:ml-4 md:w-96 sm:w-64 sm:ml-5 sm:-mt-4 z-30">
        {/* {objetivosEspecificos.contenido2} */}
      </p>

      <p className="text-white md:w-96 sm:w-60 md:flex sm:hidden md:text-2xl md:ml-4 md:-mt-28 z-30">
        {/* {objetivosEspecificos.contenido} */}
      </p>
      <div className="bg-black md:w-full sm:w[360px] md:h-60 sm:h-32 opacity-60 text-transparent md:-mt-48 sm:-mt-32 md:-z-30">
        {/* {objetivosEspecificos.contenido2} */}
      </div>
    </div>
  </div> </div>
  )
}

export default Hexagono2 