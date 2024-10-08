"use client";
import { logo } from "@/data/navbar";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import ModoDark from "../mododark/ModoDark";
import FormLogin from "./FormLogin";

const Login = () => {
  return (
    <div className="h-screen flex flex-row lg:justify-center md:justify-center sm:justify-start lg:items-center md:items-center sm:items-start dark:bg-gray-950 bg-gray-100">
      <div className="w-[800px] h-[500px] dark:bg-gray-900 bg-white rounded-md shadow-md shadow-black dark:shadow-white/20 flex lg:flex-row md:flex-row sm:flex-col justify-between items-center">
        <div className="lg:w-6/12 md:w-6/12 sm:w-full h-[500px] flex flex-col justify-start items-center py-20 bg-gray-900 dark:bg-white text-white dark:text-black rounded-s-md">
          <Link href="/">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={50}
              height={50}
              className=""
            />
          </Link>
          <h2 className="text-4xl font-bold my-4 font-serif">Iniciar sesión</h2>
          <FormLogin />
          <div
            className="bg-white dark:bg-gray-900 dark:hover:bg-gray-700 p-3 rounded-full my-2 cursor-pointer"
            onClick={() => signIn("google")}
          >
            <FcGoogle className="text-2xl" />
          </div>
          <p className="flex gap-x-2 justify-between select-none text-white dark:text-black">
            ¿No tienes cuenta?{" "}
            <Link
              href="/register"
              className="text-green-600 hover:text-zinc-500 font-semibold"
            >
              Registrate
            </Link>
          </p>
        </div>
        <div className="lg:w-6/12 md:w-6/12 sm:w-full h-[500px] dark:bg-gray-900 bg-white rounded-e-md flex flex-col justify-center items-center lg:mt-0 md:mt-0 sm:pt-10">
          <div className="dark:bg-white absolute lg:top-28 md:top-28 sm:top-6 ml-80 p-[2px] bg-gray-900 rounded-full">
            <ModoDark
              color={"text-white dark:text-black bg-gray-900 dark:bg-white"}
            />
          </div>
          <Image
            src={"https://i.postimg.cc/76brbjwp/im2.jpg"}
            alt={"Imagen de inicio de sesión"}
            width={200}
            height={200}
            className="rounded-full"
          />
          <div className="px-12 font-mono my-5 text-center dark:text-white text-black">
            <p className="mb-10">
              <strong className="text-blue-600 text-lg">Inicia sesión</strong>{" "}
              para conectarte con nuestra comunidad y crecer juntos en la{" "}
              <strong className="text-red-600">fe</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
