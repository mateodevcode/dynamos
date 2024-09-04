import Image from "next/image";

const Bienvenida = () => {
  return (
    <div
      className={`w-full flex flex-col justify-start items-center dark:bg-gray-950 lg:h-[750px] md:h-screen sm:h-72 md:mt-0 sm:pt-12 sm:pb-20`}
    >
      <div className="absolute lg:top-[350px] md:top-[370px] sm:top-[150px] lg:left-32 md:left-10 sm:left-6 flex flex-row justify-center items-center select-none">
        <div className="bg-white/50 dark:bg-gray-900/50 lg:p-10 md:p-10 sm:p-4 rounded-full">
          <Image src="https://i.postimg.cc/D0c276VK/logo-dynamo.png" alt="" className="lg:w-32 md:w-32 sm:w-10" width={600} height={600} />
        </div>
        <h2 className="lg:text-9xl md:text-9xl font-extrabold sm:text-4xl sm:text-center text-white sm:text-black dark:sm:text-white lg:-ml-8 md:l-8 sm:-ml-4">
          ynamos
        </h2>
      </div>
      <div className="lg:h-96 md:h-[400px] md:flex sm:hidden select-none">
        <img src="https://i.postimg.cc/GmYFbjGH/img-bienvenida.jpg" alt="" className="w-[1600px] h-96" />
      </div>
      <div className="md:hidden sm:flex sm:h-32 sm:-mb-3">
        <img src="https://i.postimg.cc/K8NPHDTL/img-bienvenida-sm.jpg" alt="" className="w-full"  />
      </div>
      <div className="w-full">
        <p
          className="lg:text-2xl md:text-2xl sm:text-xs lg:mt-28 md:mt-32
       sm:mt-14 text-right lg:pl-[500px] md:pl-[200px] sm:pl-[20px] lg:pr-40 md:pr-20 sm:pr-10 dark:text-white"
        >
          Aquí podrán ver lo que hacemos como movimiento al servicio de Dios y
          del prójimo, y también cómo pueden unirse a nosotros en este camino de
          fe.
        </p>
      </div>
    </div>
  );
};

export default Bienvenida;
