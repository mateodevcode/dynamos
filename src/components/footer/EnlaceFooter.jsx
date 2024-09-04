import Link from "next/link";

const EnlaceFooter = ({ nombre, ruta }) => {
  return (
    <Link href={`${ruta}`} className="mx-5 hover:text-black font-bold cursor-pointer">
      {nombre}
    </Link>
  );
};

export default EnlaceFooter;
