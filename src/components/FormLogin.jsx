"use client";

import logoDynamos from "@/img/logo/logo-dynamo.png";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";

function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  error && setTimeout(() => setError(""), 3000);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Verifica tus credenciales");
        return;
      }

      router.replace("/");
      location.reload();
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-950 text-black">
      <div className=" max-w-md md:w-full p-10 rounded-xl">
        <div className="w-full flex justify-center items-center md:mb-5 sm:mb-3">
          <Link href="/">
            <Image
              src={logoDynamos}
              alt="Imagen del logo dynamos"
              className="md:w-24 sm:w-20 animate-pulse"
            />
          </Link>
        </div>
        <h1 className="text-2xl text-white mb-10 text-center">
          Inicia sesión en <strong>Dynamos</strong>
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="Correo electrónico"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          <Link href="/register" className="text-sky-500 hover:text-zinc-500">
            ¿Olvidaste tu contraseña?
          </Link>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="Contraseña"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2 mb-4"
          />
          <button
            type="submit"
            className="text-white bg-indigo-600 hover:bg-indigo-400 w-full p-2 rounded-lg my-2"
          >
            Entrar
          </button>
        </form>
        {error && (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>Upss!!</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <p className="text-white mt-4 flex gap-x-2 justify-between select-none">
          ¿No tienes cuenta?{" "}
          <Link href="/register" className="text-sky-500 hover:text-zinc-500">
            Registrate
          </Link>
        </p>
      </div>
    </div>
  );
}

export default FormLogin;
