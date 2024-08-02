function Hexagono({
  posicion,
  subtitulo,
  contenido,
  contenido2,
  contenido3,
  hexagono,
}) {
  // const

  return (
    <>
      <div
        className={`hexagonoFondo  md:w-[668px] sm:w-[360px] md:h-[528px] sm:h-[300px] justify-center items-center  bg-white dark:bg-gray-950 ${
          posicion == "izquierda" ? null : "md:mb-60 sm:mb-24"
        } `}
      >
        <div
          className={`hexagono${hexagono} md:w-[652px] sm:w-[326px] md:h-[512px] sm:h-[276px] justify-between items-center md:ml-2 sm:ml-4 md:mt-2 sm:mt-3 md:-z-40`}
        ></div>
      </div>
      {posicion ? (
        <div className="  md:-mt-[470px] sm:-mt-72 w-[360px] h-auto md:z-10 py-5">
          <h1 className="text-white text-center md:text-4xl sm:text-xl font-bold md:mb-16 sm:mb-4 uppercase italic sombraText">
            {subtitulo}
          </h1>
          {contenido2 ? (
            <p className="text-white md:text-2xl sm:text-sm md:ml-4 md:w-96 sm:w-60 sm:ml-20 sm:mt-2">
              {contenido2}
            </p>
          ) : (
            <div
              className={`${
                contenido3 &&
                "w-full bg-slate-600 -mt-72  "
              }`}
            >
              <p
                className={`text-white md:text-2xl sm:text-sm md:ml-4 md:w-96 sm:w-60 sm:ml-20 sm:mt-2 ${
                  contenido3 &&
                  ""
                }`}
              >
                {contenido}
              </p>
            </div>
          )}
        </div>
      ) : null}
    </>
  );
}

export default Hexagono;
