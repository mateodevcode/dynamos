"use client"

import ContenedorNoticias from "@/components/noticias/ContenedorNoticias";
import NavSeccionesNoticias from "@/components/noticias/NavSeccionesNoticias";
import NoticiaCard from "@/components/noticias/NoticiaCard";
import Titulares from "@/components/noticias/Titulares";
import { categoriasNoticias } from "@/data/noticias.data"

export default function seccionNoticias({ params }) {
  console.log(params)
  console.log(params.seccion)

  return (
    <div>
      <NavSeccionesNoticias />
      {categoriasNoticias.map((categoria, index) => (
        params.seccion == categoria.nombre.toLowerCase() ? (
          <div key={index}>

            <h1 className="text-center mt-12 mb-4 text-6xl font-bold">{categoria.nombre}</h1>
            <div>
              <Titulares
              noticias={categoria.noticias}
              />
            </div>
            <div>
              <ContenedorNoticias
              seccion={categoria.nombre}
              noticias={categoria.noticias} />
            </div>
          </div>
        ) : null
      ))}
    </div>
  )
};

