import { Button } from "@/components/ui/button";
import {
  Input,
  InputGroup,
  InputLeftAddon,
  Spinner,
  Text,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import { Label } from "@radix-ui/react-menubar";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiOutlineIdcard } from "react-icons/ai";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTiktok,
  BsYoutube,
} from "react-icons/bs";
import { TbWorldWww } from "react-icons/tb";

const UpdateUserTeam = ({ User, Id }) => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    nombre: "",
    cargo: "",
    img: "",
    facebook: "",
    instagram: "",
    tiktok: "",
    youtube: "",
    linkedin: "",
    web: "",
    redes: [],
  });

  const getUsuario = async () => {
    const res = await fetch(`/api/userTeam/${Id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setFormData({
      _id: data._id,
      nombre: data.nombre,
      cargo: data.cargo,
      img: data.img,
      facebook: data.redes.facebook,
      instagram: data.redes.instagram,
      tiktok: data.redes.tiktok,
      youtube: data.redes.youtube,
      linkedin: data.redes.linkedin,
      web: data.redes.web,
    });
  };

  useEffect(() => {
    if (Id) {
      getUsuario();
    }
  }, [Id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/userTeam/${Id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          cargo: formData.cargo,
          img: formData.img,
          redes: {
            facebook: formData.facebook,
            instagram: formData.instagram,
            tiktok: formData.tiktok,
            youtube: formData.youtube,
            linkedin: formData.linkedin,
            web: formData.web,
          },
        }),
      });

      if (res.ok) {
        toast({
          title: "Usuario actualizado.",
          description: "El usuario se ha actualizado correctamente.",
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
    <form
      className="w-11/12 mt-5 flex flex-col justify-between items-start lg:px-10 md:px-10 sm:px-2 py-5"
      onSubmit={handleUpdate}
      id={User?._id}
    >
      <div className="w-full">
        <div className="w-full flex flex-row justify-end items-center">
          <p className="text-purple-900">{formData._id}</p>

          <Tooltip
            label="Id"
            aria-label="A tooltip"
            className="dark:bg-blue-900"
          >
            <span>
              <AiOutlineIdcard className="mx-2 text-xl text-purple-700" />
            </span>
          </Tooltip>
        </div>
        <div className="flex flex-col justify-between items-center my-1">
          {User?.img === undefined ? (
            <div className="flex flex-row justify-center items-center w-72 h-72">
              <Spinner
                className="mx-auto"
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            </div>
          ) : (
            <Image
              src={formData.img}
              alt={formData.nombre}
              width={400}
              height={400}
              className="rounded-full m-2"
            />
          )}
          <Label className="font-bold mx-2 my-1 text-gray-700">
            URL de la imagen
          </Label>
          <Input
            type="text"
            className="text-black text-sm"
            name="img"
            placeholder="Ingresa la URL de la imagen"
            defaultValue={formData.img}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-col justify-between items-start w-full mt-5">
        <Label className="font-bold mx-2 my-1 text-gray-700">Nombre</Label>
        <Input
          type="text"
          name="nombre"
          placeholder="Ingresa el nombre del usuario"
          defaultValue={formData.nombre}
          className="text-gray-500"
          onChange={handleChange}
        />
        <Label className="font-bold mx-2 my-1 text-gray-700 mt-2">Cargo</Label>
        <Input
          type="text"
          name="cargo"
          placeholder="Ingresa el cargo del usuario"
          defaultValue={formData.cargo}
          className="text-gray-500"
          onChange={handleChange}
        />
        <Text className="font-bold mx-2 my-1 text-gray-700 mt-2">
          Redes Sociales
        </Text>
        <InputGroup className="mt-2">
          <InputLeftAddon className="font-semibold dark:bg-blue-900">
            <BsFacebook className="dark:text-white text-black" />
          </InputLeftAddon>
          <Input
            type="text"
            name="facebook"
            placeholder={"Ingresa la URL de Facebook"}
            defaultValue={formData.facebook}
            className="text-gray-500"
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup className="mt-2">
          <InputLeftAddon className="font-semibold dark:bg-blue-900">
            <BsInstagram className="dark:text-white text-black" />
          </InputLeftAddon>
          <Input
            type="text"
            name="instagram"
            placeholder={"Ingresa la URL de Instagram"}
            defaultValue={formData.instagram}
            className="text-gray-500"
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup className="mt-2">
          <InputLeftAddon className="font-semibold dark:bg-blue-900">
            <BsTiktok className="dark:text-white text-black" />
          </InputLeftAddon>
          <Input
            type="text"
            name="tiktok"
            placeholder={"Ingresa la URL de Tiktok"}
            defaultValue={formData.tiktok}
            className="text-gray-500"
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup className="mt-2">
          <InputLeftAddon className="font-semibold dark:bg-blue-900">
            <BsYoutube className="dark:text-white text-black" />
          </InputLeftAddon>
          <Input
            type="text"
            name="youtube"
            placeholder={"Ingresa la URL de Youtube"}
            defaultValue={formData.youtube}
            className="text-gray-500"
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup className="mt-2">
          <InputLeftAddon className="font-semibold dark:bg-blue-900">
            <BsLinkedin className="dark:text-white text-black" />
          </InputLeftAddon>
          <Input
            type="text"
            name="linkedin"
            placeholder={"Ingresa la URL de Linkedin"}
            defaultValue={formData.linkedin}
            className="text-gray-500"
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup className="mt-2">
          <InputLeftAddon className="font-semibold dark:bg-blue-900">
            <TbWorldWww className="dark:text-white text-black" />
          </InputLeftAddon>
          <Input
            type="text"
            name="web"
            placeholder={"Ingresa la URL de la página web"}
            defaultValue={formData.web}
            className="text-gray-500"
            onChange={handleChange}
          />
        </InputGroup>
        <div className="flex flex-row justify-end items-center w-full">
          <Button
            className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 mt-5"
            id={User?._id}
          >
            Editar
          </Button>
        </div>
      </div>
    </form>
  );
};

export default UpdateUserTeam;
