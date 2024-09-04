import Bienvenida from "@/components/bienvenida/Bienvenida";
import SomosDynamosNew from "@/components/dynamos/SomosDynamosNew";
import Eventos from "@/components/eventos/Eventos";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Team from "@/components/team/Team";
import Testimonios from "@/components/testimonios/Testimonios";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Bienvenida />
      <SomosDynamosNew />
      <Eventos />
      <Testimonios />
      <Team />
      <Footer />
    </div>
  );
}
