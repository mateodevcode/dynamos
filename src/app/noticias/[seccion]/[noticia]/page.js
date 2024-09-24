import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import NavSeccionesNoticias from "@/components/noticias/NavSeccionesNoticias";

const page = () => {
  return (
  <div className="dark:bg-zinc-800">
  <Navbar />
  <div className="pt-2">
    <NavSeccionesNoticias />
  </div>
  <div className="py-16">
    <h1 className="text-5xl text-center font-bold dark:text-zinc-200">Titulo noticia</h1>
  </div>
  <Footer />
  </div>
  )
};

export default page;
