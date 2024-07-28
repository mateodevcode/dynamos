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
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { signIn } from "next-auth/react";
import logoGoogle from "@/img/logo/chrome.png";
import { FcGoogle } from "react-icons/fc";

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
    <div className="flex justify-center h-screen items-center md:p-10 rounded-md dark:bg-gray-950 dark:text-white">
      <div className="max-w-md w-full p-10 bg-blue-600/20 rounded-xl py-20">
        <div className="w-full flex justify-center items-center">
          <Link href="/">
            <Image
              src={logoDynamos}
              alt="Imagen del logo dynamos"
              className="md:w-24 sm:w-20 animate-bounce"
            />
          </Link>
        </div>
        <h1 className="lg:text-2xl md:text-2xl sm:text-xl font-bold mb-10 text-center">
          Crea tu cuenta en <strong>Dynamos</strong>
        </h1>
        <form onSubmit={handleSubmit}>
          {/* <p className="font-bold">Nombre</p>
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
          </button> */}
          <button
            onClick={() => signIn("google")}
            type="button"
            className="bg-gray-100 hover:bg-gray-300 text-black w-full p-2 rounded-lg my-2 flex justify-start items-center font-semibold"
          >
            <FcGoogle
              height={20}
              className="ml-4 lg:mr-14 md:mr-14 sm:mr-8 text-xl"
            />
            Registrate con Google
          </button>
          {/* <button 
          onClick={() => signIn("google")}
          type="button"
          className="bg-blue-500 hover:bg-blue-300 text-white w-full p-2 rounded-lg my-2 flex justify-start items-center font-semibold">
            <BsFacebook
            className="ml-4 lg:mr-14 md:mr-14 sm:mr-8 text-white text-xl" />Inicia sesión con Facebook
          </button> */}
        </form>
        {error && (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>Ups!!!</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <p className="text-black mt-3 p-3 flex gap-x-2 justify-between bg-gray-100 select-none md:text-base sm:text-sm">
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
