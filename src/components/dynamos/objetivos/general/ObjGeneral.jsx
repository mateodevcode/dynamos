import { objetivo } from "@/data/misionVisionObjetivos";
import Recuadro from "../Recuadro";


function ObjGeneral() {
  return (
    // principal
    <div className="md:w-full md:h-full flex flex-col justify-center bg-imagen-aboutus lg:pt-6 lg:pb-60 md:pb-28 md:pt-20">
      {/* Objetivos */}
      <div className="flex md:flex-row sm:flex-col justify-center items-center w-auto">
        <Recuadro
          posicion="izquierda"
          titulo={objetivo[0].titulo}
          subtitulo={objetivo[0].subtitulo}
          contenido={objetivo[0].contenido}
          contenido2={objetivo[0].contenido2}
          contenido3={objetivo[0].contenido3}
          hexagono="2"
          
        />
        <Recuadro 
        posicion={null} 
        titulo={null} 
        hexagono="4" 
         />
      </div>
      ;
    </div>
  );
}

export default ObjGeneral;
