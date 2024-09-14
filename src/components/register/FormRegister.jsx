import {
  Alert,
  AlertIcon,
  AlertTitle,
  Input,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { validateEmail } from "@/config/validatedEmail";
import { validatePassword } from "@/config/validatedContraseña";

const FormRegister = () => {
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

  const router = useRouter();

  useEffect(() => {
    const comprobarCorreo = async () => {
      const res = await fetch(`/api/user`, {
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
      toast({
        title: "Campos vacíos.",
        description: "Por favor, rellene todos los campos.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    if (password !== confirmarContrasena) {
      toast({
        title: "Las contraseñas no coinciden.",
        description: "Por favor, vuelva a escribir las contraseñas.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    if (!validateEmail(email)) {
      toast({
        title: "Correo inválido.",
        description: "Por favor, ingrese un correo válido.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    if (validatePassword(password) !== "") {
      toast({
        title: validatePassword(password),
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/api/user`, {
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
          router.push("/login");
        }, 700);
      } else {
        alert("Ocurrió un error al crear un usuario");
      }
    } catch (error) {}
  };

  return (
    <form
      className="flex flex-col justify-center items-start w-9/12"
      onSubmit={handleCreate}
    >
      <Input
        type="text"
        placeholder="Nombre"
        value={name}
        className="p-2 my-2 rounded-md dark:bg-gray-100 text-white dark:text-black"
        onChange={(e) => setName(e.target.value)}
        width={"270px"}
      />
      <Input
        type="email"
        placeholder="Email"
        value={email}
        required
        className="p-2 my-2 rounded-md dark:bg-gray-100 text-white dark:text-black"
        onChange={(e) => setEmail(e.target.value)}
        width={"270px"}
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
          className="p-2 my-2 rounded-md dark:bg-gray-100 text-white dark:text-black"
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
          className="p-2 my-2 rounded-md dark:bg-gray-100 text-white dark:text-black"
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
      {confirmarContrasena !== "" && confirmarContrasena !== password && (
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
      <div className="w-full flex flex-row justify-center items-center">
        <Button className="px-4 py-2 bg-green-600 hover:bg-green-400 rounded-3xl font-semibold my-2 text-white cursor-pointer select-none">
          Registrarse
        </Button>
      </div>
    </form>
  );
};

export default FormRegister;
