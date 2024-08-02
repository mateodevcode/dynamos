import Mision from "@/components/dynamos/mision_vision/Mision";
import ObjGeneral from "@/components/dynamos/objetivos/general/ObjGeneral";
import ObjEspecificos from "@/components/dynamos/objetivos/especificos/ObjEspecificos";
import Vision from "@/components/dynamos/mision_vision/Vision";

function SomosDynamosNew() {
  return (
    <div className="bg-black">
      <Mision />
      <Vision />
      <ObjGeneral />
      <ObjEspecificos />
    </div>
  );
}

export default SomosDynamosNew;
