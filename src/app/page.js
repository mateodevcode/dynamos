import Footer from "@/components/Footer";
import Eventos from "@/components/Eventos";
import BarraDeNavegacion from "@/components/Navbar";
import NewBienvenida from "@/components/NewBienvenida";
import SomosDynamosNew from "@/components/SomosDynamosNew";
import Team from "@/components/Team";
import Testimonios from "@/components/Testimonios";

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
