import Buscador from "@/components/comercio/Buscador";
import { FaSearch } from "react-icons/fa";
import CarroDeCompras from "./CarroDeCompras";

export default function Header() {
  return(
    <header className="flex justify-center">
      <Buscador
        iconoBusqueda={<FaSearch />}
      />
      <CarroDeCompras />
    </header>
  );
};
