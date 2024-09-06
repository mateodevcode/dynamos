"use client"
import {useState} from "react";
import { RiShoppingCartFill } from "react-icons/ri";

export default function CarroDeCompras() {

  const [conteo, actualizarConteo] = useState(0);
  const controladorContador = () => {
    actualizarConteo(prevConteo => {
      
  console.log(prevConteo +1)
    return prevConteo +1
    })
  }
  return (
    <div className="flex gap-3 h-fit w-fit px-2 py-1 mt-[5.2rem] mb-[2rem] mx-[2rem] bg-teal-700 rounded-lg">
      <RiShoppingCartFill size="30" className="text-teal-50 mt-1" onClick={()=>controladorContador()}/>
      {conteo > 0 ? <p className="mt-[3px] text-teal-50 text-bold text-[1.4rem]">{conteo}</p> : ''}
    </div>
  );
}
