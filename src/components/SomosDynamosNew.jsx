import Mision from "./Mision";
import ObjGeneral from "./ObjGeneral";
import ObjEspecificos from "./ObjEspecificos"
import Vision from "./Vision";


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
