"use client";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import ContenedorNoticias from "@/components/noticias/ContenedorNoticias";
import NavSeccionesNoticias from "@/components/noticias/NavSeccionesNoticias";
import Titulares from "@/components/noticias/Titulares";
import TituloSeccion from "@/components/noticias/TituloSeccion";
import { categoriasNoticias } from "@/data/noticias.data";

const page = ({ params }) => {
  return (
    <div className="dark:bg-zinc-800">
      <Navbar />
      <NavSeccionesNoticias />
      {categoriasNoticias.map((categoria, index) =>
        params.seccion == categoria.nombre.toLowerCase() ? (
          <div key={index}>
            <TituloSeccion nombre={categoria.nombre} descripcion={categoria.descripcion} key={index} />
            <div>
              <ContenedorNoticias
                seccion={categoria.nombre}
                noticias={categoria.noticias}
              />
            </div>
          </div>
        ) : null
      )}
      <Footer />
    </div>
  );
};

export default page;
