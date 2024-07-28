import Mision from "@/components/dynamos/Mision";
import ObjGeneral from "@/components/dynamos/ObjGeneral";
import ObjEspecificos from "@/components/dynamos/ObjEspecificos";
import Vision from "@/components/dynamos/Vision";

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
