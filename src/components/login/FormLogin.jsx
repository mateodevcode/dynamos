"use client";
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
              src="https://i.postimg.cc/D0c276VK/logo-dynamo.png"
              alt="Imagen del logo dynamos"
              className="lg:w-24 md:w-24 sm:w-20"
              width={400}
              height={400}
            />
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <button 
          onClick={() => signIn("google")}
          type="button"
          className="bg-gray-100 hover:bg-gray-300 text-black w-full p-2 rounded-lg my-2 flex justify-start items-center font-semibold lg:text-base md:text-base sm:text-base">
            <FcGoogle
            height={20}
            className="lg:ml-4 md:ml-4 sm:ml-4 lg:mr-16 md:mr-16 sm:mr-10 text-xl" />Inicia sesión con Google
          </button>
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
