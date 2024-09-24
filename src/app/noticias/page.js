import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import ContenedorNoticias from "@/components/noticias/ContenedorNoticias";
import NavSeccionesNoticias from "@/components/noticias/NavSeccionesNoticias";
import TituloSeccion from "@/components/noticias/TituloSeccion";
import { categoriasNoticias } from "@/data/noticias.data";

const page = () => {
  return (
    <div className="bg-white dark:bg-zinc-800">
      <Navbar />
      <NavSeccionesNoticias />
      <div className="separador h-12"></div>
      {categoriasNoticias.map((categoria, index) => (
        <div key={index}>
          <TituloSeccion nombre={categoria.nombre} descripcion={categoria.descripcion}/>
          <div>
            <ContenedorNoticias noticias={categoria.noticias} nombreCategoria={categoria.nombre} />
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default page;
