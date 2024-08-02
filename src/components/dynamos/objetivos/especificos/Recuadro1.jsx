import { objetivosEspecificos } from "@/data/misionVisionObjetivos";
import Hexagono1 from "./Hexagono1";


function Recuadro1() {
  return (
    <div className=" flex flex-col justify-around items-center md:w-[670px] sm:w-[360px] py-20 md:-mt-[210px]">
      {/* Titulo Objetivos especificos */}
      <div className="md:w-[660px] md:h-80 sm:h-28 justify-center bg-black text-white md:text-7xl sm:text-3xl font-bold md:ml-64 sombraText md:pt-24 sm:mb-20 uppercase">
        <h1 className="md:mt-5 sm:mt-4 sm:ml-5 md:text-start sm:text-center">
          {/* {objetivosEspecificos.titulo} */}
        </h1>
      </div>
      <Hexagono1 />
      
    </div>
  );
}

export default Recuadro1;
