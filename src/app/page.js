import Footer from "@/components/footer/Footer";
import Eventos from "@/components/eventos/Eventos";
import BarraDeNavegacion from "@/components/navbar/Navbar";
import NewBienvenida from "@/components/bienvenida/NewBienvenida";
import SomosDynamosNew from "@/components/dynamos/SomosDynamosNew";
import Team from "@/components/Team";
import Testimonios from "@/components/testimonios/Testimonios";


export default function Home() {
  
  
  return (
    <>
      <BarraDeNavegacion />
      <NewBienvenida />
      <SomosDynamosNew />
      <Eventos />
      <Testimonios />
      <Team />
      <Footer />
    </>
  );
}
