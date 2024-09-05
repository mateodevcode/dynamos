import { logo } from "@/data/navbar";
import Image from "next/image";

const Bienvenida = () => {
  return (
    <div
      className={`w-full flex flex-col justify-start items-center dark:bg-gray-950 lg:h-[750px] md:h-screen sm:h-72 md:mt-0 sm:pt-12 sm:pb-20`}
    >
      <div className="absolute lg:top-[380px] md:top-[270px] sm:top-[125px] lg:left-32 md:left-10 sm:left-6 flex flex-row justify-center items-center select-none">
        <div className="bg-white/50 dark:bg-gray-900/50 lg:p-10 md:p-10 sm:p-4 rounded-full">
          <Image
            src={logo.src}
            alt={logo.alt}
            className="lg:w-32 md:w-32 sm:w-10"
            width={600}
            height={600}
          />
        </div>
        <h2 className="lg:text-9xl md:text-9xl font-extrabold sm:text-4xl sm:text-center lg:text-black dark:text-white lg:-ml-8 md:l-8 sm:-ml-4">
          ynamos
        </h2>
      </div>
      <div
        className="w-full lg:h-[410px] md:h-[300px] sm:h-[100px]"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(1, 1, 1, 0) 58%, rgb(3, 7, 18, 1) 100%),url('https://i.postimg.cc/GmYFbjGH/img-bienvenida.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="absolute lg:top-[570px] md:top-[480px] sm:top-[190px] lg:left-10 md:left-10 sm:left-6 flex flex-row justify-center items-center select-none">
        <p className="lg:text-2xl md:text-2xl sm:text-xs text-right lg:pl-[500px] md:pl-[10px] sm:pl-[10px] lg:pr-40 md:pr-20 sm:pr-10 dark:text-white">
          Aquí podrán ver lo que hacemos como movimiento al servicio de Dios y
          del prójimo, y también cómo pueden unirse a nosotros en este camino de
          fe.
        </p>
      </div>
    </div>
  );
};

export default Bienvenida;
