"use client";
import { logo } from "@/data/navbar";
import Image from "next/image";
import Link from "next/link";
import ModoDark from "../mododark/ModoDark";
import { useEffect, useState } from "react";
import { Alert, AlertIcon, AlertTitle, Input, useToast } from "@chakra-ui/react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Register = () => {
  const toast = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ocupacion, setOcupacion] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
  const [confirmarContrasena, setConfirmarContrasena] = useState("");
  const [verContrasena, setVerContrasena] = useState(false);
  const [tipoContrasena, setTipoContrasena] = useState("password");
  const [comprobarCorreo, setComprobarCorreo] = useState(false);

  useEffect(() => {
    const comprobarCorreo = async () => {
      const res = await fetch(`/api/userGoogle`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      const correo = data.find((item) => item.email === email);
      if (correo) {
        setComprobarCorreo(true);
      } else {
        setComprobarCorreo(false);
      }
    };
    comprobarCorreo();
  }, [email]);

  const handleCreate = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Estos campos son obligatorios.");
      return;
    }

    if (password !== confirmarContrasena) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/api/userGoogle`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          ocupacion,
          role,
          image,
        }),
      });

      if (res.ok) {
        toast({
          title: "Usuario creado.",
          description: "El usuario se ha creado correctamente.",
          status: "success",
          duration: 8000,
          isClosable: true,
          position: "top",
        });
        setTimeout(() => {
          location.reload();
        }, 700);
      } else {
        alert("Ocurrió un error al crear un usuario");
      }
    } catch (error) {}
  };

  return (
    <div className="h-screen flex flex-row lg:justify-center md:justify-center sm:justify-start lg:items-center md:items-center sm:items-start dark:bg-gray-950 bg-gray-100">
      <div className="w-[800px] h-[500px] dark:bg-gray-900 bg-white rounded-md shadow-md shadow-black dark:shadow-white/20 flex lg:flex-row-reverse md:flex-row sm:flex-col justify-between items-center">
        <div className="lg:w-6/12 md:w-6/12 sm:w-full h-[500px] flex flex-col justify-center items-center bg-gray-900 dark:bg-white text-white dark:text-black rounded-e-md py-5">
          <Link href="/">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={30}
              height={30}
              className="mb-2"
            />
          </Link>
          <h2 className="text-4xl font-bold my-2 font-serif">Registrarse</h2>
          <form className="flex flex-col justify-center items-center w-9/12">
            <Input
              type="text"
              placeholder="Nombre"
              value={name}
              className="w-3/4 p-2 my-2 rounded-md dark:bg-gray-900 dark:text-white"
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="email"
              placeholder="Email"
              value={email}
              required
              className="w-3/4 p-2 my-2 rounded-md dark:bg-gray-900 dark:text-white"
              onChange={(e) => setEmail(e.target.value)}
            />
            {comprobarCorreo && (
              <Alert status="error">
                <AlertIcon />
                <AlertTitle>El correo ya esta registrado</AlertTitle>
              </Alert>
            )}

            <div className="flex flex-row justify-center items-center w-full">
              <Input
                type={tipoContrasena}
                placeholder="Contraseña"
                value={password}
                className="w-3/4 p-2 my-2 rounded-md dark:bg-gray-900 dark:text-white"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                className="cursor-pointer mx-2"
                onClick={() => {
                  setVerContrasena(!verContrasena);
                  setTipoContrasena(verContrasena ? "password" : "text");
                }}
              >
                {verContrasena ? <FiEye /> : <FiEyeOff />}
              </div>
            </div>
            <div className="flex flex-row justify-center items-center w-full">
              <Input
                type={tipoContrasena}
                placeholder="Confirmar contraseña"
                className="w-3/4 p-2 my-2 rounded-md dark:bg-gray-900 dark:text-white"
                onChange={(e) => setConfirmarContrasena(e.target.value)}
              />
              <div
                className="cursor-pointer mx-2"
                onClick={() => {
                  setVerContrasena(!verContrasena);
                  setTipoContrasena(verContrasena ? "password" : "text");
                }}
              >
                {verContrasena ? <FiEye /> : <FiEyeOff />}
              </div>
              
            </div>
            {confirmarContrasena !== password && (
                  <Alert status="error">
                    <AlertIcon />
                    <AlertTitle>Las contraseñas no coinciden</AlertTitle>
                  </Alert>
                )}
                {password !== "" && confirmarContrasena === password && (
                  <Alert status="success">
                    <AlertIcon />
                    <AlertTitle>Las contraseñas coinciden</AlertTitle>
                  </Alert>
                )}
                <div
            className="px-4 py-2 bg-green-600 hover:bg-green-400 rounded-3xl font-semibold my-5 text-white cursor-pointer select-none"
            onClick={handleCreate}
          >
            Registrarse
          </div>
          </form>
          
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
          <div className="bg-white absolute lg:top-28 md:top-28 sm:top-6 mr-80 p-2 rounded-full">
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
