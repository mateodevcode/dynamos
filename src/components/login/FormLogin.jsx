import { Input, useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";

const FormLogin = () => {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [verContrasena, setVerContrasena] = useState(false);
  const [tipoContrasena, setTipoContrasena] = useState("password");

  const router = useRouter();

  const signInEmail = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast({
        title: "Campos vacíos.",
        description: "Todos los campos son obligatorios.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        toast({
          title: "Error",
          description: "Correo o contraseña incorrectos",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      } else {
        router.replace("/");
      }
    } catch (error) {}
  };

  return (
    <form
      onSubmit={signInEmail}
      className="flex flex-col justify-center items-start w-9/12"
    >
      <Input
        type="email"
        placeholder="Email"
        value={email}
        required
        className="p-2 my-2 rounded-md dark:bg-gray-100 text-white dark:text-black"
        onChange={(e) => setEmail(e.target.value)}
        width={"270px"}
      />
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
      <div className="w-full flex flex-row justify-center items-center">
        <Button className="px-4 py-2 bg-blue-600 hover:bg-blue-400 rounded-3xl font-semibold my-2 text-white cursor-pointer select-none">
          Ingresar
        </Button>
      </div>
    </form>
  );
};

export default FormLogin;
