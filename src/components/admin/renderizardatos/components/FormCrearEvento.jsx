import { Button } from "@/components/ui/button";
import {
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const FormCrearEvento = () => {
  const toast = useToast();
  // Datos de evento para crear
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [descripcionCompleta, setDescripcionCompleta] = useState("");
  const [fecha, setFecha] = useState("");
  const [autor, setAutor] = useState("");
  const [imgAutor, setImgAutor] = useState("");
  const [imgPrincipal, setImgPrincipal] = useState("");
  const [img, setImg] = useState([]);
  const [iconImg, setIconImg] = useState("");
  const [video, setVideo] = useState([]);
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");

  // Manejador de imagenes en array
  const handleArrayImg = (e) => {
    const linkArray = e.target.value.split(",").map((link) => link.trim());
    setImg(linkArray);
  };

  const handleCreate = async (e) => {
    e.preventDefault();

    if (
      !titulo ||
      !descripcion ||
      !descripcionCompleta ||
      !fecha ||
      !autor ||
      !imgAutor ||
      !imgPrincipal ||
      !iconImg
    ) {
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
      const res = await fetch(`http://localhost:3000/api/evento`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          titulo,
          descripcion,
          descripcionCompleta,
          fecha,
          autor,
          imgAutor,
          imgPrincipal,
          img,
          iconImg,
          video,
          redes: {
            facebook,
            instagram,
          },
        }),
      });

      if (res.ok) {
        toast({
          title: "Evento creado.",
          description: "El evento se ha creado correctamente.",
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
        description: "Ocurrió un error al crear el testimonio.",
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
          <InputLeftAddon className="font-semibold dark:bg-blue-900 dark:text-white text-black"
          >
            Autor
          </InputLeftAddon>
          <Input
            type="text"
            placeholder="Ingresa el autor del evento"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
          />
        </InputGroup>
        <Text className="font-semibold">Sube una foto del autor</Text>
        <InputGroup>
          <InputLeftAddon className="font-semibold dark:bg-blue-900 dark:text-white text-black">
            Imagen
          </InputLeftAddon>
          <Input
            type="text"
            placeholder="Ingresa la URL de la imagen"
            value={imgAutor}
            onChange={(e) => setImgAutor(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon className="font-semibold dark:bg-blue-900 dark:text-white text-black">
            Título
          </InputLeftAddon>
          <Input
            type="text"
            placeholder="Ingresa el título del evento"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </InputGroup>

        <Text className="font-semibold">Resumen del evento</Text>
        <Textarea
          type="text"
          placeholder="Ingresa una breve descripción del evento"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />

        <Text className="font-semibold">Descripción completa</Text>
        <Textarea
          type="text"
          placeholder="Ingresa la descripción completa del evento"
          value={descripcionCompleta}
          onChange={(e) => setDescripcionCompleta(e.target.value)}
        />

        <Text className="font-semibold">
          Sube la foto de la portada del evento
        </Text>
        <InputGroup>
          <InputLeftAddon className="font-semibold dark:bg-blue-900 dark:text-white text-black">
            Imagen
          </InputLeftAddon>
          <Input
            type="text"
            placeholder="Ingresa la URL de la imagen"
            value={imgPrincipal}
            onChange={(e) => setImgPrincipal(e.target.value)}
          />
        </InputGroup>

        <Text className="font-semibold">Sube el icono del evento</Text>
        <InputGroup>
          <InputLeftAddon className="font-semibold dark:bg-blue-900 dark:text-white text-black">
            Icono
          </InputLeftAddon>
          <Input
            type="text"
            placeholder="Ingresa la URL del icono de la imagen"
            value={iconImg}
            onChange={(e) => setIconImg(e.target.value)}
          />
        </InputGroup>

        <InputGroup>
          <InputLeftAddon className="font-semibold dark:bg-blue-900 dark:text-white text-black">
            Fecha
          </InputLeftAddon>
          <Input
            type="text"
            placeholder="Ingresa la fecha del evento"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </InputGroup>
        <Text className="text-center text-lg">
          Agrega las redes sociales del evento
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
        <Text className="font-semibold">Agrega las imágenes del evento</Text>
        <InputGroup>
          <InputLeftAddon className="font-semibold dark:bg-blue-900 dark:text-white text-black">
            Imagen
          </InputLeftAddon>
          <Input
            type="text"
            placeholder="Ingresa las URL de las imágenes"
            value={img}
            onChange={handleArrayImg}
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

export default FormCrearEvento;
