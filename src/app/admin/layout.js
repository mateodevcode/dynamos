import Navbar from "@/components/admin/Navbar";
import Options from "@/components/admin/Options";

export const metadata = {
  title: "Panel de Administración - Dynamos",
  description:
    "Bienvenido a la Iglesia Dynamos, una comunidad cristiana vibrante en el Atlántico, Colombia. Únase a nosotros para adorar, aprender y crecer en la fe.",
  keywords:
    "Iglesia, Iglesia Cristiana, Atlántico, Colombia, Comunidad Cristiana, Servicios Religiosos, Fe, Adoración, Eventos Cristianos",
  ogTitle: "Iglesia Dynamos - Comunidad Cristiana en el Atlántico, Colombia",
};

export default async function Layout({ children }) {
  return (
    <div className="flex flex-col justify-start items-center w-full">
      <Navbar />
      <div className="flex flex-row justify-start items-start w-full h-full">
        <Options />
        {children}
      </div>
    </div>
  );
}
