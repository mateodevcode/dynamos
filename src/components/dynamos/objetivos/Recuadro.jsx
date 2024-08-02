import Hexagono4 from "./especificos/Hexagono4";
import Hexagono from "./general/Hexagono";

function Recuadro({
  posicion,
  titulo,
  subtitulo,
  contenido,
  contenido2,
  contenido3,
  hexagono,
}) {
  return (
    <div
      className={`flex flex-col items-center md:w-[670px] ${
        posicion == "izquierda"
          ? "justify-between sm:w-auto md:py-20 md:-mt-32"
          : `justify-around sm:w-[360px] ${
              contenido3 &&
              "flex md:flex-col sm:flex-col justify-between items-center md:w-[670px] sm:w-[360px] md:-mt-16 sm:-mt-32"
            } `
      } `}
    >
      {/* Trapecio superior */}
      {contenido3 ? null : (
        <div
          className={`trapecio sm:-mr-0 md:-mr-[80px] md:w-[556px] md:ml-9 bg-white dark:bg-gray-950 ${
            posicion == "izquierda"
              ? "md:hidden sm:w-[200px] md:h-[150px] sm:h-24 md:-mt-10 sm:ml-40 md:mb-7 sm:z-30 md:z-0"
              : "md:flex sm:hidden sm:w-[250px] md:h-[100px] sm:h-28 md:-mt-7  sm:ml-28 md:mb-12"
          }`}
        ></div>
      )}

      {/* Titulo Objetivos */}
      {titulo ? (
        <div
          className={`${
            titulo == "objetivos"
              ? "md:w-[820px] sm:w-[350px] md:h-72 sm:h-12  md:text-8xl sm:text-3xl md:mb-1 sm:mb-20 font-bold md:ml-20 sm:ml-2 sm:text-center md:mt-24 sm:mt-6"
              : "md:w-[660px] md:h-80 sm:h-28 justify-center bg-black text-white md:text-7xl sm:text-3xl font-bold md:ml-64 sombraText md:pt-24 sm:mb-20 uppercase"
          }`}
        >
          <h1
            className={`${
              titulo == "objetivos"
                ? "md:mt-10 sm:mt-8 text-white bg-black uppercase"
                : "md:mt-5 sm:mt-4 sm:ml-5 md:text-start sm:text-center"
            }`}
          >
            {titulo}
          </h1>
        </div>
      ) : null}
      <Hexagono
        posicion={posicion}
        subtitulo={subtitulo}
        contenido={contenido}
        contenido2={contenido2}
        contenido3={contenido3}
        hexagono={hexagono}
      />

      {contenido3 ? null : (
        <>
          {" "}
          {posicion == "izquierda" ? null : (
            <div
              className={`md:justify-center md:items-center text-transparent trapecio2 md:-mr-[80px] md:w-[556px] sm:w-[200px] sm:h-24 md:ml-9 sm:ml-40
            bg-white dark:bg-gray-950`}
            >
              <p className="md:justify-center md:items-center text-black dark:text-white lg:text-xl md:text-2xl italic font-semibold md:ml-32 sm:ml-4">
                @Dynamos_movimiento
              </p>
            </div>
          )}
        </>
      )}
      {contenido3 && <Hexagono4 contenido3={contenido3} />}
    </div>
  );
}

export default Recuadro;
