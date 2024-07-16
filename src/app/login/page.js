"use client";
import logoDynamos from "@/img/logo/logo-dynamo.png";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";

function LoginPage() {
  const onclick = (e) => {
    e.preventDefault();
    console.log("click");
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-gray-900 max-w-md md:w-full p-10 rounded-xl">
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
        <form onSubmit={onclick}>
          <p className="text-white">Correo electrónico</p>
          <input
            type="email"
            name="email"
            className="w-full bg-zinc-700 text-white px-4 py-1 rounded-md my-2"
          />
          <p className="text-white mt-2 flex gap-x-2 justify-between">
            Contraseña{" "}
            <Link href="/register" className="text-sky-500 hover:text-zinc-500">
              ¿Olvidaste tu contraseña?
            </Link>
          </p>
          <input
            type="password"
            name="password"
            className="w-full bg-zinc-700 text-white px-4 py-1 rounded-md my-2 mb-4"
          />
          <button
            type="submit"
            className="text-white bg-indigo-600 hover:bg-indigo-400 w-full p-2 rounded-lg my-2"
          >
            Entrar
          </button>
        </form>
        <div>
          <button
            onClick={() => signIn()}
            className="text-white bg-blue-600 hover:bg-blue-400 w-full p-2 rounded-lg my-2"
          >
            Iniciar sesión con Google
          </button>
        </div>
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

export default LoginPage;
