"use client";
import { useState } from "react";

export default function Buscador({ iconoBusqueda }) {
  const [entradaBuscador, setEntradaBuscador] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    controladorBuscador();
  };

  const controladorBuscador = (e) => {
    setEntradaBuscador(e.target.value);
  };
  console.log(entradaBuscador)
  return (
    <form className="relative w-fit mt-[5rem]" onSubmit={handleSubmit}>
      <input
        type="text"
        className="w-[500px] bg-teal-100 outline outline-2 outline-teal-700 text-teal-900 py-3 px-5 rounded-full"
        placeholder="Que buscas?"
        value={entradaBuscador}
        onChange={controladorBuscador}
      />
      <button
        className="bg-teal-700 p-3 rounded-full absolute right-[0.8%] top-[5%] text-teal-100 hover:bg-teal-500 hover:scale-110 transition-all active:bg-orange-400 active:scale-90"
        type="submit"
      >
        {iconoBusqueda}
      </button>
    </form>
  );
}