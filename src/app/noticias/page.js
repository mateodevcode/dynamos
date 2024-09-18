import ContenedorNoticias from "@/components/noticias/ContenedorNoticias";
import NavSeccionesNoticias from "@/components/noticias/NavSeccionesNoticias";
import Titulares from "@/components/noticias/Titulares";
import { categoriasNoticias } from "@/data/noticias.data";



export default function() {

  return(
    <>
    <NavSeccionesNoticias />
    <Titulares />
    {categoriasNoticias.map((categoria, index) => (
        <div key={index}>
          <div className="mx-24 p-4 mt-12 bg-amber-500 rounded">
            <h1 className="text-left text-6xl font-bold">{categoria.nombre}</h1>
            <div className="w-full h-1 bg-black "></div>
            <p className="text-slate-700">{categoria.descripcion}</p>
          </div>
          <div>
            <ContenedorNoticias noticias={categoria.noticias}/>
          </div>
        </div>
    ))}
    </>
  )
}