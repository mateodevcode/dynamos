import Image from "next/image";
import EnlacesIconEvento from "./EnlacesIconEvento";
import FechaFinal from "./FechaFinal";

const Evento = ({ imagenes, evento }) => {

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="lg:text-5xl md:text-5xl sm:text-xl dark:text-white lg:my-5 md:my-5 sm:my-3 font-bold font-serif">
        {evento.titulo}
      </h2>
      <p className="lg:text-xl md:text-xl sm:text-lg lg:my-10 md:my-10 sm:my-5 dark:text-white lg:px-28 italic font-serif">
        {evento.descripcionCompleta}
      </p>
      <div
        className={`flex flex-wrap justify-start items-center lg:my-5 md:my-5 sm:my-3`}
      >
        {imagenes.map((imagen, i) => {
          return (
            <Image
              key={i}
              src={imagen}
              alt={`imagen ${i}`}
              className="lg:w-[455px] md:w-[400px] sm:w-80 h-auto rounded-xl lg:m-4 md:m-4 sm:m-2"
              width={600}
              height={400}
            />
          );
        })}
      </div>
      <EnlacesIconEvento valores={evento} />
      <div className="lg:my-10 md:my-10 sm:my-5 lg:text-lg md:text-lg sm:text-sm dark:text-white flex flex-row justify-center items-center font-semibold">
        Publicado por: {evento.autor}
        <Image
          src={evento.imgAutor}
          alt={`Imagen de ${evento.autor}`}
          className="md:w-7 rounded-full md:mx-4 sm:mx-2 sm:w-5"
          width={600}
          height={400}
        />
        <FechaFinal evento={evento.fecha} />
      </div>
    </div>
  );
};

export default Evento;
