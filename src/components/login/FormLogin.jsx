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
import { FcGoogle } from "react-icons/fc";

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
    <div className="flex h-screen items-center justify-center dark: dark:bg-gray-950 text-black">
      <div className="max-w-md md:w-full sm:w-full p-10 rounded-xl bg-blue-400/10 py-20">
        <div className="w-full flex justify-center items-center sm:pb-10">
          <Link href="/">
            <Image
              src={logoDynamos}
              alt="Imagen del logo dynamos"
              className="lg:w-24 md:w-24 sm:w-20 animate-pulse"
            />
          </Link>
        </div>
        {/* <h1 className="text-2xl text-white mb-10 text-center">
          Inicia sesión en <strong>Dynamos</strong>
        </h1> */}
        <form onSubmit={handleSubmit}>
          {/* <input
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
          </button> */}
          <button 
          onClick={() => signIn("google")}
          type="button"
          className="bg-gray-100 hover:bg-gray-300 text-black w-full p-2 rounded-lg my-2 flex justify-start items-center font-semibold lg:text-base md:text-base sm:text-base">
            <FcGoogle
            height={20}
            className="lg:ml-4 md:ml-4 sm:ml-4 lg:mr-16 md:mr-16 sm:mr-10 text-xl" />Inicia sesión con Google
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
            <AlertTitle>Upss!!</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <p className=" mt-4 flex gap-x-2 justify-between select-none dark:text-white">
          ¿No tienes cuenta?{" "}
          <Link href="/register" className="text-sky-500 hover:text-zinc-500 font-semibold">
            Registrate
          </Link>
        </p>
      </div>
    </div>
  );
}

export default FormLogin;
