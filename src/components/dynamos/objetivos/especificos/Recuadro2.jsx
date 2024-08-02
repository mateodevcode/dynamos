import Hexagono2 from "./Hexagono2 ";
import Hexagono3 from "./Hexagono3";
import Hexagono4 from "./Hexagono4";

function Recuadro2() {
  return (
    <div className="flex md:flex-col sm:flex-col justify-center items-center md:w-[670px] sm:w-[360px] md:-mt-16 sm:-mt-32">
      <Hexagono2 />
      <Hexagono3 />
      <Hexagono4 />
    </div>
  );
}

export default Recuadro2;
