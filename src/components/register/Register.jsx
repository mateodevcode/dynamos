"use client";
import { logo } from "@/data/navbar";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import ModoDark from "../mododark/ModoDark";

const Register = () => {
  return (
    <div className="h-screen flex flex-row justify-center items-center dark:bg-gray-950 bg-gray-100">
      <div className="w-[800px] h-[500px] dark:bg-gray-900 bg-white rounded-md shadow-md shadow-black dark:shadow-white/20 flex lg:flex-row-reverse md:flex-row sm:flex-col justify-between items-center">
        <div className="lg:w-6/12 md:w-6/12 sm:w-full h-[500px] flex flex-col justify-start items-center py-20 bg-gray-900 dark:bg-white text-white dark:text-black rounded-e-md">
          <Link href="/">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={100}
              height={100}
              className="mb-5"
            />
          </Link>
          <h2 className="text-4xl font-bold my-4 font-serif">Registrarse</h2>
          <div
            className="bg-white dark:bg-gray-900 dark:hover:bg-gray-700 p-3 rounded-full my-2 cursor-pointer"
            onClick={() => signIn("google")}
          >
            <FcGoogle className="text-2xl" />
          </div>
          <div
            className="px-4 py-2 bg-green-600 hover:bg-green-400 rounded-3xl font-semibold my-5 text-white cursor-pointer"
            onClick={() => signIn("google")}
          >
            Registrate
          </div>
          <p className="flex gap-x-2 justify-between select-none text-white dark:text-black">
            ¿Ya tienes una cuenta?{" "}
            <Link
              href="/login"
              className="text-blue-600 hover:text-zinc-500 font-semibold"
            >
              Iniciar sesión
            </Link>
          </p>
        </div>
        <div className="lg:w-6/12 md:w-6/12 sm:w-full h-[500px] dark:bg-gray-900 bg-white rounded-s-md flex flex-col justify-center items-center lg:mt-0 md:mt-0 sm:pt-10">
          <div className="bg-white absolute top-28 mr-80 p-2 rounded-full">
            <ModoDark />
          </div>
          <Image
            src={"https://i.postimg.cc/76brbjwp/im2.jpg"}
            alt={""}
            width={200}
            height={200}
            className="rounded-full"
          />
          <div className="px-12 font-mono my-5 text-center dark:text-white text-black">
            <p className="mb-10">
              <strong className="text-blue-600 text-lg">Únete a Dynamos</strong>{" "}
              y sé parte del movimiento que transforma vidas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
