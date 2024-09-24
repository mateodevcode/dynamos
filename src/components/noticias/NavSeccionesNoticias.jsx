import Link from "next/link";
import { categoriasNoticias } from "@/data/noticias.data";
import GeneradorUrl from "@/config/GeneradorUrl";

const NavSeccionesNoticias = () => {

  return (
    <nav className="pt-20 pb-4">
      <ul className="flex flex-col justify-center custom:flex-row custom:justify-between gap-4 max-w-fit custom:mx-auto text-bold cursor-pointer">
      {categoriasNoticias.map((categoria, index) => (
          <li className="py-1 rounded bg-zinc-300 dark:bg-zinc-700 hover:bg-[#fb923c] dark:hover:bg-[#fb923c] transition-all group" key={index}>
            <Link className="px-4 relative z-10 font-bold group-hover:text-white transition-all dark:text-white" href={categoria.Url}>{categoria.nombre}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
};

export default NavSeccionesNoticias;