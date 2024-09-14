import { Button } from "@/components/ui/button";
import { Input, Spinner, Tooltip, useToast } from "@chakra-ui/react";
import { Label } from "@radix-ui/react-menubar";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineIdcard } from "react-icons/ai";
import { FiEye, FiEyeOff } from "react-icons/fi";

const UpdateUsuario = ({ User, Id }) => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    ocupacion: "",
    role: "",
    image: "",
  });

  const [verContrasena, setVerContrasena] = useState(false);
  const [tipoContrasena, setTipoContrasena] = useState("password");

  const getEvento = async () => {
    const res = await fetch(`/api/user/${Id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setFormData({
      _id: data._id,
      name: data.name,
      email: data.email,
      password: data.password,
      ocupacion: data.ocupacion,
      role: data.role,
      image: data.image,
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
      const res = await fetch(`/api/user/${Id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          ocupacion: formData.ocupacion,
          role: formData.role,
          image: formData.image,
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
        description: "Ocurrió un error al crear el un usuario.",
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
      className="w-full mt-5 flex flex-col justify-start items-center lg:px-10 md:px-10 sm:px-2 py-5"
      onSubmit={handleUpdate}
      id={User?._id}
    >
      <div className="flex flex-col justify-between items-start w-8/12 mt-5 lg:mx-4 md:mx-4 sm:mx-0">
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
        <div className="w-full flex flex-row justify-center items-center my-4 mt-10">
          {User?.image === undefined ? (
            <div className="flex flex-col justify-center items-center ">
              <Spinner
                className="mx-auto my-16"
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            </div>
          ) : (
            <Image
              src={formData?.image}
              alt={formData.name}
              width={200}
              height={200}
              className="rounded-full w-40 h-40"
            />
          )}
        </div>
        <Input
          type="text"
          className="text-black text-sm"
          name="image"
          placeholder="Ingresa la URL de la imagen"
          defaultValue={formData.image}
          onChange={handleChange}
        />
        <Label className="font-bold mx-2 my-1 text-gray-700">Nombre</Label>
        <Input
          type="text"
          name="name"
          placeholder="Ingresa el nombre del usuario"
          defaultValue={formData.name}
          className="text-gray-500"
          onChange={handleChange}
        />
        <Label className="font-bold mx-2 my-1 text-gray-700 mt-2">Email</Label>
        <Input
          type="text"
          name="email"
          placeholder="Ingresa el email"
          defaultValue={formData.email}
          className="text-gray-500"
          onChange={handleChange}
        />
        <Label className="font-bold mx-2 my-1 text-gray-700 mt-2">
          Contraseña
        </Label>
        <div className="w-full flex flex-row justify-center items-center">
          <Input
            type={tipoContrasena}
            name="password"
            placeholder="Ingresa la contraseña"
            defaultValue={formData.password}
            className="text-gray-500"
            onChange={handleChange}
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
        <Label className="font-bold mx-2 my-1 text-gray-700 mt-2">
          Ocupación
        </Label>
        <Input
          type="text"
          name="ocupacion"
          placeholder="Ingresa la ocupación"
          defaultValue={formData.ocupacion}
          className="text-gray-500"
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

export default UpdateUsuario;
