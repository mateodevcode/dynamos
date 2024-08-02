import { objetivo } from "@/data/misionVisionObjetivos";
import Recuadro from "../Recuadro";
import Recuadro2 from "./Recuadro2";

function ObjEspecificos() {
  return (
    // principal
    <div className="flex flex-col lg:w-full lg:h-full md:w-full md:h-full justify-center bg-imagen-aboutus lg:pt-6 lg:pb-60 sm:pt-10 md:pb-20 sm:pb-20 md:pt-32 md:-mt-16">
      {/* Objetivos */}
      <div className="flex md:flex-row sm:flex-col justify-center items-center w-full">
        <Recuadro
          posicion="izquierda"
          titulo={objetivo[1].titulo}
          subtitulo={objetivo[1].subtitulo}
          contenido={objetivo[1].contenido}
          contenido2={objetivo[1].contenido2}
          contenido3={null}
          hexagono="4"
          
        />
        <Recuadro
          posicion="derecha"
          titulo={null}
          subtitulo={null}
          contenido={objetivo[1].contenido}
          contenido2={null}
          contenido3={objetivo[1].contenido3}
          hexagono="6"
          
        />
      </div>
    </div>
  );
}

export default ObjEspecificos;
