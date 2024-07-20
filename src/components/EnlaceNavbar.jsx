import Link from "next/link";

const EnlaceNavbar = ({ nombre, ruta }) => {
  return (
    <Link
      href={ruta}
       className="text-lg mx-2 cursor-pointer dark:hover:text-gray-400 hover:text-black hover:scale-110 my-2"
    >
      {nombre}
    </Link>
  );
};

export default EnlaceNavbar;
