
function Hexagono4({ contenido3 }) {
  return (
    <div className="hexagono5 flex flex-col md:w-[608px] sm:w-[360px] md:h-[450px] sm:h-80 justify-start items-center md:-mb-52 md:mt-80 sm:-mt-20 md:flex sm:hidden">
      <p className="text-white md:w-96 sm:w-64 md:text-2xl sm:text-sm md:text-start md:mt-8 md:font-normal sm:font-bold sm:mt-9 md:ml-12 sm:text-justify md:flex sm:hidden z-30">
        {contenido3}
      </p>
      <div className="bg-black md:w-full md:h-48 sm:h-32 sm:w-[360px] opacity-60 text-transparent md:-mt-48 sm:-mt-32">
        {contenido3}
      </div>
    </div>
  );
}

export default Hexagono4;
