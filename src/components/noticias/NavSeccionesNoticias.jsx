import Link from "next/link";
import { categoriasNoticias } from "@/data/noticias.data";

export default function NavSeccionesNoticias() {

  return (
    <nav className="my-6">
      <ul className="flex flex-col justify-center custom:flex-row custom:justify-between gap-4 max-w-fit custom:mx-auto text-bold cursor-pointer">
      {categoriasNoticias.map((categoria, index) => (
          <li className="py-1 rounded hover:bg-[#fb923c] transition-all group" key={index}>
            <Link className="px-4 relative z-10 font-bold group-hover:text-white transition-all duration-" href={categoria.Url}>{categoria.nombre}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}