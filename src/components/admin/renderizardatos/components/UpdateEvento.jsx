import { Button } from "@/components/ui/button";
import { Input, Spinner, Text, Textarea, Tooltip, useToast } from "@chakra-ui/react";
import { Label } from "@radix-ui/react-menubar";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiOutlineIdcard } from "react-icons/ai";

const UpdateEvento = ({ User, Id }) => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    titulo: "",
    descripcion: "",
    descripcionCompleta: "",
    fecha: "",
    autor: "",
    imgAutor: "",
    imgPrincipal: "",
    img: [],
    iconImg: "",
  });

  const getEvento = async () => {
    const res = await fetch(`/api/evento/${Id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setFormData({
      _id: data._id,
      titulo: data.titulo,
      descripcion: data.descripcion,
      descripcionCompleta: data.descripcionCompleta,
      fecha: data.fecha,
      autor: data.autor,
      imgAutor: data.imgAutor,
      imgPrincipal: data.imgPrincipal,
      img: data.img,
      iconImg: data.iconImg,
      video: data.video,
      redes: {
        facebook: data.redes.facebook,
        instagram: data.redes.instagram,
      },
    });
  };

  useEffect(() => {
    if (Id) {
      getEvento();
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
      const res = await fetch(`/api/evento/${Id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          titulo: formData.titulo,
          descripcion: formData.descripcion,
          descripcionCompleta: formData.descripcionCompleta,
          fecha: formData.fecha,
          autor: formData.autor,
          imgAutor: formData.imgAutor,
          imgPrincipal: formData.imgPrincipal,
          img: formData.img,
          iconImg: formData.iconImg,
        }),
      });
      if (res.ok) {
        toast({
          title: "Evento actualizado.",
          description: "El evento se ha actualizado correctamente.",
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
        description: "Ocurrió un error al crear un usuario.",
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
      className="w-full mt-5 flex lg:flex-row md:flex-row sm:flex-col justify-between items-start lg:px-10 md:px-10 sm:px-2 py-5"
      onSubmit={handleUpdate}
      id={User?._id}
    >
      <div className="lg:w-6/12 md:w-6/12 sm:w-full">
        {User?.imgPrincipal === undefined ? (
          <div className="w-full h-[450px] flex flex-row justify-center items-center">
            <Spinner
              className="w-80"
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </div>
        ) : (
          <Image
            src={formData?.imgPrincipal}
            alt={formData.titulo}
            width={400}
            height={400}
            className="rounded-md h-[450px]"
          />
        )}
        <Input
          type="text"
          name="imgPrincipal"
          placeholder="Ingresa la URL de la imagen"
          className="text-black mt-5"
          defaultValue={formData.imgPrincipal}
          onChange={handleChange}
        />
        <Label className="font-bold mx-2 my-1 text-gray-700 mt-2">
          Icono del evento
        </Label>
        <div className="flex flex-row justify-between items-center my-1">
          {User?.iconImg === undefined ? (
            <div className="w-20 flex flex-row justify-center items-center">
              <Spinner
                className="mx-auto"
                thickness="2px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="md"
              />
            </div>
          ) : (
            <Image
              src={formData?.iconImg}
              alt={formData.titulo}
              width={50}
              height={50}
              className="rounded-full mx-4 w-10 h-10"
            />
          )}
          <Input
            type="text"
            className="text-black text-sm"
            name="iconImg"
            placeholder="Ingresa la URL de la imagen"
            defaultValue={formData.iconImg}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-col justify-between items-start lg:w-6/12 md:w-6/12 sm:w-full mt-5 lg:mx-4 md:mx-4 sm:mx-0">
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
        <Label className="font-bold mx-2 my-1 text-gray-700">Autor</Label>
        <Input
          type="text"
          name="autor"
          placeholder="Ingresa el autor del evento"
          defaultValue={formData.autor}
          className="text-gray-500"
          onChange={handleChange}
        />
        <Label className="font-bold mx-2 my-1 text-gray-700 mt-2">
          Imagen del autor
        </Label>
        <div className="flex flex-row justify-between items-center my-1">
          {User?.imgPrincipal === undefined ? (
            <div className="w-20 flex flex-row justify-center items-center">
              <Spinner
                className="mx-auto"
                thickness="2px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="md"
              />
            </div>
          ) : (
            <Image
              src={formData?.imgAutor}
              alt={formData.autor}
              width={50}
              height={50}
              className="rounded-full mx-4 w-10 h-10"
            />
          )}
          <Input
            type="text"
            className="text-black text-sm"
            name="imgAutor"
            placeholder="Ingresa la URL de la imagen"
            defaultValue={formData.imgAutor}
            onChange={handleChange}
          />
        </div>
        <Label className="font-bold mx-2 my-1 text-gray-700 mt-2">Titulo</Label>
        <Input
          type="text"
          name="titulo"
          placeholder="Ingresa el título del evento"
          defaultValue={formData.titulo}
          className="text-gray-500"
          onChange={handleChange}
        />
        <Label className="font-bold mx-2 my-1 text-gray-700 mt-2">
          Descripción
        </Label>
        <Textarea
          name="descripcion"
          placeholder="Ingresa una breve descripción del evento"
          defaultValue={formData.descripcion}
          className="text-gray-500"
          height={"90px"}
          onChange={handleChange}
        />
        <Label className="font-bold mx-2 my-1 text-gray-700 mt-2">
          Descripción completa
        </Label>
        <Textarea
          name="descripcionCompleta"
          placeholder="Ingresa la descripción completa del evento"
          defaultValue={formData.descripcionCompleta}
          className="text-gray-500"
          height={"90px"}
          onChange={handleChange}
        />
        <Label className="font-bold mx-2 my-1 text-gray-700 mt-2">
          Fecha de publicación
        </Label>
        <Input
          name="fecha"
          placeholder="Ingresa la fecha del evento"
          defaultValue={formData.fecha}
          className="text-gray-500"
          onChange={handleChange}
        />
        <Text className="font-semibold">Agrega las imágenes del evento</Text>
        <Input
          type="text"
          name="img"
          placeholder="Ingresa las URL de las imágenes"
          defaultValue={formData.img}
          onChange={handleChange}
        />
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

export default UpdateEvento;
