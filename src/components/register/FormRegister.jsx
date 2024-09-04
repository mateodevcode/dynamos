"use client";
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
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { logo } from "../../data/navbar";


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
        <div className="w-full flex justify-center items-center mb-10">
          <Link href="/">
            <Image
              src={logo.src}
              alt={logo.alt}
              className="md:w-24 sm:w-20"
              width={400}
              height={400}
            />
          </Link>
        </div>
        <h1 className="lg:text-2xl md:text-2xl sm:text-xl font-bold mb-10 text-center">
          Crea tu cuenta en <strong>Dynamos</strong>
        </h1>
        <form onSubmit={handleSubmit}>
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
          <Link href="/login" className="text-indigo-600 hover:text-zinc-500 font-semibold">
            Iniciar sesión
          </Link>
        </p>
      </div>
    </div>
  );
}

export default FormRegister;
