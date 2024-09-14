import { Button } from "@/components/ui/button";
import {
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTiktok,
  BsYoutube,
} from "react-icons/bs";
import { TbWorldWww } from "react-icons/tb";

const FormCrearUserTeam = () => {
  const toast = useToast();
  // Datos de evento para crear
  const [nombre, setNombre] = useState("");
  const [cargo, setCargo] = useState("");
  const [img, setImg] = useState([]);
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [tiktok, setTiktok] = useState("");
  const [youtube, setYoutube] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [web, setWeb] = useState("");

  const handleCreate = async (e) => {
    e.preventDefault();

    if (!nombre) {
      alert("Estos campos son obligatorios.");
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/api/userTeam`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          cargo,
          img,
          redes: {
            facebook,
            instagram,
            tiktok,
            youtube,
            linkedin,
            web,
          },
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
        description: "Ocurrió un error al crear el usuario.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return;
    }
  };

  return (
    <form className="mt-10 lg:w-8/12 md:w-8/12 sm:w-full lg:px-0 md:px-0 sm:px-2">
      <Stack spacing={4}>
        <InputGroup>
          <InputLeftAddon className="font-semibold dark:bg-blue-900 dark:text-white text-black">
            Nombre
          </InputLeftAddon>
          <Input
            type="text"
            placeholder="Ingresa el nombre completo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon className="font-semibold dark:bg-blue-900 dark:text-white text-black">
            Cargo
          </InputLeftAddon>
          <Input
            type="text"
            placeholder="Ingresa el cargo que desempeña"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
          />
        </InputGroup>
        <Text className="font-semibold">Sube una imagen del usuario</Text>
        <InputGroup>
          <InputLeftAddon className="font-semibold dark:bg-blue-900 dark:text-white text-black">
            Imagen
          </InputLeftAddon>
          <Input
            type="text"
            placeholder="Ingresa la URL de la imagen"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
        </InputGroup>
        <Text className="text-center text-lg">
          Agrega las redes sociales del usuario
        </Text>
        <InputGroup>
          <InputLeftAddon className="font-semibold dark:bg-blue-900">
            <BsFacebook className="dark:text-white text-black" />
          </InputLeftAddon>
          <Input
            type="text"
            placeholder={"Ingresa la URL de Facebook"}
            value={facebook}
            onChange={(e) => setFacebook(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon className="font-semibold dark:bg-blue-900">
            <BsInstagram className="dark:text-white text-black" />
          </InputLeftAddon>
          <Input
            type="text"
            placeholder={"Ingresa la URL de Instagram"}
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon className="font-semibold dark:bg-blue-900">
            <BsTiktok className="dark:text-white text-black" />
          </InputLeftAddon>
          <Input
            type="text"
            placeholder={"Ingresa la URL de Tiktok"}
            value={tiktok}
            onChange={(e) => setTiktok(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon className="font-semibold dark:bg-blue-900">
            <BsYoutube className="dark:text-white text-black" />
          </InputLeftAddon>
          <Input
            type="text"
            placeholder={"Ingresa la URL de Youtube"}
            value={youtube}
            onChange={(e) => setYoutube(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon className="font-semibold dark:bg-blue-900">
            <BsLinkedin className="dark:text-white text-black" />
          </InputLeftAddon>
          <Input
            type="text"
            placeholder={"Ingresa la URL de Linkedin"}
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon className="font-semibold dark:bg-blue-900">
            <TbWorldWww className="dark:text-white text-black" />
          </InputLeftAddon>
          <Input
            type="text"
            placeholder={"Ingresa la URL de la página web"}
            value={web}
            onChange={(e) => setWeb(e.target.value)}
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

export default FormCrearUserTeam;
