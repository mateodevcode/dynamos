/*
"use client";


export default function ProductCard({ nombre, descripcion, precio, foto }) {
  

  
  return (
    <div className="w-fit h-full bg-teal-400">
      <h1>{nombre}</h1>
    </div>
  );
}
*/

"use client";
import { useRef, useState } from "react";
import { TfiSharethisAlt } from "react-icons/tfi";
import { TbShoppingCartShare } from "react-icons/tb";
import BotonComercio from "@/components/comercio/BotonComercio";
import ProductoModal from "./ProductoModal";
import CompartirProductosModal from "./CompartirProductosModal";
import Image from "next/image";

export default function ProductCard({ nombre, descripcion, precio, foto }) {
  /* Modal producto con mas informacion */
  const dialogRef = useRef(null);
  const [isDialogoOpen, setIsDialogoOpen] = useState(false);
  const abrirDialogo = () => setIsDialogoOpen(true);
  const cerrarDialogo = () => {
    setIsDialogoOpen(false);
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  /* Modal para compartir en redes sociales */
  const socialDialogRef = useRef(null);
  const [socialDialogRefOpen, setSocialDialogRefOpen] = useState(false);
  const abrirDialogoCompartir = (e) => {
    e.stopPropagation(); // Evita que el evento se propague al elemento padre
    setSocialDialogRefOpen(true);
  }
  const cerrarDialogoCompartir = () => {
    setSocialDialogRefOpen(false);
    if (socialDialogRef.current) {
      socialDialogRef.current.close();
    }
  };

  return (
    <div className="w-[170px] h-[170px] rounded-xl relative overflow-hidden cursor-pointer">
      <div className="group">
        <Image
          width={300}
          height={300}
          className="rounded-t-xl w-full"
          src={foto}
          alt="product"
        />
        <div className="group flex relative">
          <div className="bg-teal-700 w-[50%] py-1 absolute right-2 bottom-[135px] mb-1 rounded-full">
            <p className="text-center text-[0.65rem] text-teal-50 font-bold">
              {precio} COP
            </p>
          </div>
        </div>
        <div onClick={abrirDialogo} className="z-0 flex flex-col justify-between bg-gradient-to-b from-[#0f766e] to-[#fb923c70] px-4 py-2 h-[170px] translate-y-[-50px] group-hover:translate-y-[-170px] group-hover:py-4 transition-all rounded-b-xl">
          <h2 className="font-bold text-[0.9rem] w-full leading-[17px] mb-[22px]">{nombre}</h2>
          <p className="text-[0.7rem]">{descripcion}</p>
          <TfiSharethisAlt
            onClick={abrirDialogoCompartir}
            size="30"
            className="relative z-20 shadow-lg hover:scale-125 transition-all"
          />
        </div>
      </div>
      <div className="flex justify-between">
      </div>
      <ProductoModal
        nombre={nombre}
        descripcion={descripcion}
        precio={precio}
        foto={foto}
        isOpen={isDialogoOpen}
        onClose={cerrarDialogo}
        ref={dialogRef}
      />
      <CompartirProductosModal
        nombre={nombre}
        descripcion={descripcion}
        foto={foto}
        isOpen={socialDialogRefOpen}
        onClose={cerrarDialogoCompartir}
        ref={socialDialogRef}
      />
    </div>
  );
}