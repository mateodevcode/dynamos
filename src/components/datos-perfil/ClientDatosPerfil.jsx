"use client";
import { Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import DatosPerfil from "@/components/datos-perfil/DatosPerfil";
import AlertaEmailVacio from "@/components/datos-perfil/AlertaEmailVacio";

const ClientDatosPerfil = () => {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState({});
  const [alerta, setAlerta] = useState(null);

  useEffect(() => {
    if (alerta) {
      setTimeout(() => {
        setAlerta("");
      }, 3000);
    }
  }, [alerta]);

  return (
    <div className="flex flex-col items-center justify-start w-full pt-20 dark:bg-gray-950 dark:text-white pb-40">
      <div className="lg:w-5/12 md:w-5/12 sm:w-full sm:px-5 lg:px-0 md:px-0">
        <h2 className="dark:text-white lg:mx-5 md:mx-5 sm:mx-0 font-serif lg:text-4xl md:text-3xl sm:text-lg">
          Ingrese su correo
        </h2>
        <form
          onSubmit={async (e) => {
            e.preventDefault();

            if (email === "") {
              return alert("Ingrese su correo electrónico por favor!!!");
            }

            const res = await fetch(`/api/user/${email}`, {
              method: "GET",
            });
            const user = await res.json();
            setUser(user);
            setAlerta(user.message);
            e.target.reset();
          }}
        >
          <Input
            placeholder="Email"
            className="lg:w-3/4 md:w-3/4 sm:w-full lg:mx-5 md:mx-5 sm:mx-0 my-5"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="lg:mx-5 md:mx-5 sm:mx-0 dark:bg-blue-500 px-3 py-2 rounded-lg dark:hover:bg-blue-300 bg-slate-200 hover:bg-slate-100 font-semibold">
            Buscar
          </button>
        </form>
      </div>
      {user.email && <DatosPerfil user={user} />}
      {alerta && <AlertaEmailVacio alerta={user} />}
    </div>
  );
};

export default ClientDatosPerfil;
