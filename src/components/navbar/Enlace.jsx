import Link from "next/link";

const Enlace = ({ nombre, ruta }) => {
  return (
    <Link
      href={`${ruta}`}
       className="text-base px-2 cursor-pointer hover:text-gray-500 hover:scale-105 lg:my-0 md:my-0 sm:my-2"
    >
      {nombre}
    </Link>
  );
};

export default Enlace;
