"use client";
import logoDynamos from "@/img/logo/logo-dynamo.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";

function FormRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  error && setTimeout(() => setError(""), 3000);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    try {
      const resUserExits = await fetch("api/userexits", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExits.json();

      if (user) {
        setError("El correo electrónico ya está registrado.");
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/");
      } else {
        setError("Error al registrar el usuario.");
      }
    } catch (error) {
      setError("Error durante el registro de usuario.");
    }
  };

  return (
    <div className="flex justify-center h-screen items-center md:p-10 rounded-md">
      <div className="max-w-md w-full p-10">
        <div className="w-full flex justify-center items-center">
          <Link href="/">
            <Image
              src={logoDynamos}
              alt="Imagen del logo dynamos"
              className="md:w-24 sm:w-20 animate-bounce"
            />
          </Link>
        </div>
        <h1 className="text-2xl font-bold text-black mb-10 text-center">
          Crea tu cuenta en <strong>Dynamos</strong>
        </h1>
        <form onSubmit={handleSubmit}>
          <p className="font-bold">Nombre</p>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            className="w-full border-2 peer focus:border-2 text-black px-4 py-1 rounded-md my-2"
          />

          <p className="font-bold">Correo electrónico</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            className="w-full border-2 text-black px-4 py-1 rounded-md my-2"
          />
          <p className="font-bold">Contraseña</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            className="w-full border-2 text-black px-4 py-1 rounded-md my-2"
          />

          <button
            type="submit"
            className="text-white bg-indigo-600 hover:bg-indigo-400 w-full p-2 rounded-lg my-2"
          >
            Registrate
          </button>
        </form>
        {error && (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>Ups!!!</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <p className="text-black mt-2 p-3 flex gap-x-2 justify-between bg-gray-100 select-none md:text-base sm:text-sm">
          ¿Ya tienes una cuenta?
          <Link href="/login" className="text-indigo-600 hover:text-zinc-500">
            Iniciar sesión
          </Link>
        </p>
      </div>
    </div>
  );
}

export default FormRegister;
