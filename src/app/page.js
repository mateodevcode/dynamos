import Footer from "@/components/footer/Footer";
import Eventos from "@/components/eventos/Eventos";
import BarraDeNavegacion from "@/components/navbar/Navbar";
import Bienvenida from "@/components/bienvenida/Bienvenida";
import SomosDynamosNew from "@/components/dynamos/SomosDynamosNew";
import Team from "@/components/team/Team";
import Testimonios from "@/components/testimonios/Testimonios";


export default function Home() {
  
  
  return (
    <>
      <BarraDeNavegacion />
      <Bienvenida />
      <SomosDynamosNew />
      <Eventos />
      <Testimonios />
      <Team />
      <Footer />
    </>
  );
}
