"use client";
import Link from "next/link";
import { FaRegEdit } from "react-icons/fa";
import { MdAddToPhotos } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { enlacesPanel } from "@/data/panel";

const Panel = () => {
  const estilos =
    "bg-blue-600 lg:w-72 md:w-72 sm:w-40 lg:h-40 md:h-40 sm:h-32 flex flex-col justify-center items-center lg:text-4xl md:text-4xl sm:text-2xl font-bold rounded-md select-none hover:bg-blue-500 cursor-pointer text-gray-100";

  return (
    <div className="bg-slate-100 w-full flex flex-col justify-start items-center h-screen">
      <h2 className="lg:text-6xl md:text-6xl sm:text-2xl font-bold text-slate-700 p-4 text-center select-none">
        Panel de administración de Dynamos
      </h2>
      <div className="flex flex-row justify-center items-center lg:mt-10 md:mt-10 sm:mt-5">
        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 lg:gap-10 md:gap-10 sm:gap-5">
          {enlacesPanel.map((enlace, index) => (
            <Link href={enlace.url} className={estilos} key={index}>
            <p className="my-2 text-center">{enlace.nombre}</p>
            <div className="flex flex-row justify-center items-center lg:text-3xl md:text-3xl sm:text-xl my-2">
              <FaRegEdit />
              <RiDeleteBin5Line />
              <MdAddToPhotos />
            </div>
          </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Panel;
