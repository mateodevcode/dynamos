"use client"
import logoDynamos from "@/img/logo/logo-dynamo.png";
import Image from "next/image";
import Link from "next/link";

function RegisterPage() {
  const onclick = (e) => {
    e.preventDefault();
    console.log("click");
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
        <form onSubmit={onclick}>
          <p className="font-bold">Nombre</p>
          <input
            type="text"
            name="username"
            className="w-full border-2 peer focus:border-2 text-black px-4 py-1 rounded-md my-2"
          />

          <p className="font-bold">Correo electrónico</p>
          <input
            type="email"
            name="email"
            className="w-full border-2 text-black px-4 py-1 rounded-md my-2"
          />
          <p className="font-bold">Contraseña</p>
          <input
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

export default RegisterPage;
