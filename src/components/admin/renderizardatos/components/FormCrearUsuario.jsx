import { Button } from "@/components/ui/button";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const FormCrearUsuario = () => {
  const toast = useToast();
  // Datos de evento para crear
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

  const handleCreate = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
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

    if (password !== confirmarContrasena) {
      toast({
        title: "Error.",
        description: "Las contraseñas no coinciden.",
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
          location.reload();
        }, 700);
      }
    } catch (error) {
      toast({
        title: "Error.",
        description: "Ocurrió un error al crear el un usuario.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return;
    }
  };

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

  return (
    <form className="mt-10 lg:w-8/12 md:w-8/12 sm:w-full lg:px-0 md:px-0 sm:px-2">
      <Stack spacing={4}>
        <InputGroup>
          <InputLeftAddon className="font-semibold dark:bg-blue-900 dark:text-white text-black">
            Nombre
          </InputLeftAddon>
          <Input
            type="text"
            placeholder="Ingresa el nombre del usuario"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon className="font-semibold dark:bg-blue-900 dark:text-white text-black">
            Email
          </InputLeftAddon>
          <Input
            type="email"
            placeholder="Ingresa el email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputGroup>
        {comprobarCorreo && (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>El correo ya esta registrado</AlertTitle>
          </Alert>
        )}
        <Text className="font-semibold">Sube una foto</Text>
        <InputGroup>
          <InputLeftAddon className="font-semibold dark:bg-blue-900 dark:text-white text-black">
            Imagen
          </InputLeftAddon>
          <Input
            type="text"
            placeholder="Ingresa la URL de la imagen"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </InputGroup>
        <InputGroup className="flex flex-row justify-center items-center">
          <InputLeftAddon className="font-semibold dark:bg-blue-900 dark:text-white text-black">
            Contraseña
          </InputLeftAddon>
          <Input
            type={tipoContrasena}
            placeholder="Ingresa la contraseña"
            value={password}
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
        </InputGroup>
        <InputGroup className="flex flex-row justify-center items-center">
          <InputLeftAddon className="font-semibold dark:bg-blue-900 dark:text-white text-black">
            Confirmar la contraseña
          </InputLeftAddon>
          <Input
            type={tipoContrasena}
            placeholder="Ingresa la contraseña"
            value={confirmarContrasena}
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
        </InputGroup>
        {confirmarContrasena !== "" && confirmarContrasena !== password && (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>Las contraseñas no coinciden</AlertTitle>
          </Alert>
        )}
        <InputGroup>
          <InputLeftAddon className="font-semibold dark:bg-blue-900 dark:text-white text-black">
            Ocupación
          </InputLeftAddon>
          <Input
            type="ocupacion"
            placeholder="Ingresa la ocupación"
            value={ocupacion}
            onChange={(e) => setOcupacion(e.target.value)}
          />
        </InputGroup>
      </Stack>
      <div className="w-full flex flex-row justify-end items-center my-4">
        <Button
          onClick={handleCreate}
          className="dark:bg-green-700 dark:text-white hover:bg-green-500 dark:hover:bg-green-500 mx-2"
        >
          Crear
        </Button>
      </div>
    </form>
  );
};

export default FormCrearUsuario;
