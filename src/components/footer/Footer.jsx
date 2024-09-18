"use client";
import { logo } from "@/data/navbar";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Input,
  useToast,
} from "@chakra-ui/react";
import Image from "next/image";
import EnlacesIconsFooter from "./EnlacesIconsFooter";
import { enlacesIconFooter } from "@/data/enlaces.icon.footer";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

const Footer = () => {
  const [admin, setAdmin] = useState(false);
  const { data: session, status } = useSession();
  const email = String(session?.user?.email);
  const toast = useToast();
  const [emailUser, setEmailUser] = useState("");
  const [comprobarCorreo, setComprobarCorreo] = useState(false);

  useEffect(() => {
    const comprobarCorreo = async () => {
      const res = await fetch(`/api/suscribirse`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      const correo = data.find((item) => item.email === emailUser);
      if (correo) {
        setComprobarCorreo(true);
      } else {
        setComprobarCorreo(false);
      }
    };
    comprobarCorreo();
  }, [emailUser]);

  const handleEmail = async (e) => {
    e.preventDefault();

    if (!emailUser) {
      toast({
        title: "Campo vacío.",
        description: "Debes ingresar un correo.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    try {
      const res = await fetch("/api/suscribirse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailUser }),
      });

      if (res.ok) {
        toast({
          title: "Correo registrado.",
          description: "Gracias por suscribirte.",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
        e.target.reset();
      }
    } catch (error) {
      toast({
        title: "Error.",
        description: "Ha ocurrido un error.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
  };

  useEffect(() => {
    if (email.includes(process.env.NEXT_PUBLIC_ADMIN_EMAIL)) {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
  }, [session]);

  return (
    <footer className="mt-auto bg-slate-900 w-full dark:bg-zinc-950">
      <div className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <div className="col-span-full lg:col-span-1">
            <Link href="/">
              <div className="w-40 h-40 bg-gray-100 dark:bg-white flex flex-row justify-center items-center rounded-full select-none">
                <Image src={logo.src} alt="Logo" width={70} height={70} />
              </div>
            </Link>
          </div>

          <div className="col-span-1">
            <h4 className="font-semibold text-white dark:text-white">
              Novedades
            </h4>

            <div className="mt-3 grid space-y-3 text-gray-400  dark:text-neutral-400">
              <Link href="/eventos" className="hover:text-gray-600">
                Eventos
              </Link>
              <Link href="/noticias" className="hover:text-gray-600">
                Noticias
              </Link>
              <Link href="/podcasts" className="hover:text-gray-600">
                Podcasts
              </Link>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="font-semibold text-white dark:text-white">
              Dynamos
            </h4>

            <div className="mt-3 grid space-y-3 text-gray-400  dark:text-neutral-400">
              <Link href="/dynamos" className="hover:text-gray-600">
                Nosotros
              </Link>
              <Link href="/testimonios" className="hover:text-gray-600">
                Testimonios
              </Link>
              <Link href="/team" className="hover:text-gray-600">
                Unete + TEAM{" "}
                <span className="inline-block ms-1 text-xs bg-blue-700 text-white py-1 px-2 rounded-lg">
                  Nuevo
                </span>
              </Link>
              {admin && (
                <Link href="/podacasts" className="hover:text-gray-600">
                  Admin
                </Link>
              )}
            </div>
          </div>

          <div className="col-span-2">
            <h4 className="font-semibold text-white dark:text-white">
              Suscríbete ahora!
            </h4>

            <form onSubmit={handleEmail}>
              <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 rounded-lg p-2 dark:bg-gray-900 bg-gray-50">
                <div className="w-full">
                  <Input
                    type="email"
                    id="hero-input"
                    name="hero-input"
                    className="py-3 px-4 block w-full border-transparent rounded-lg text-sm dark:text-white"
                    placeholder="Ingresa tu correo"
                    onChange={(e) => setEmailUser(e.target.value)}
                  />
                  {comprobarCorreo && (
                    <Alert status="error" className="mt-2">
                      <AlertIcon />
                      <AlertTitle>El correo ya esta registrado</AlertTitle>
                    </Alert>
                  )}
                </div>
                <Button className="w-full sm:w-auto whitespace-nowrap p-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700">
                  Suscribirse
                </Button>
              </div>
              <p className="mt-3 text-sm text-gray-400">
                Nuevos eventos, noticias y podcasts en tu bandeja de entrada.
              </p>
            </form>
          </div>
        </div>

        <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:flex-col-reverse lg:flex-row sm:justify-between sm:items-center">
          <div className="flex justify-between items-center lg:my-0 sm:my-5">
            <p className="text-sm text-gray-400 dark:text-neutral-400 sm:text-center">
              © 2023 Todos los derechos reservados. Desarrollado por{" "}
              <Link
                href="https://one-second-cybersecurity.vercel.app"
                target="_blank"
              >
                <strong>One Second Cybersecurity</strong>
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-row justify-center items-center text-sm text-gray-400 dark:text-neutral-400">
            <p className="mx-2">
              {status == "authenticated" && session?.user?.email}
            </p>
            {status == "authenticated" && (
              <p
                className="mx-2 cursor-pointer select-none"
                onClick={() => {
                  signOut();
                }}
              >
                Cerrar Sesión
              </p>
            )}
          </div>
          <div>
            {enlacesIconFooter.map((enlace, i) => {
              const redes = enlace.redes;
              return <EnlacesIconsFooter key={i} enlace={redes} />;
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
