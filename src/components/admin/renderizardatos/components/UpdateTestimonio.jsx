import { Button } from "@/components/ui/button";
import { Input, Spinner, Textarea, Tooltip, useToast } from "@chakra-ui/react";
import { Label } from "@radix-ui/react-menubar";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineIdcard } from "react-icons/ai";

const UpdateTestimonio = ({ User, Id }) => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    nombre: "",
    img: "",
    cargo: "",
    testimonio: "",
    testimonioCompleto: "",
  });

  const getTestimonio = async () => {
    const res = await fetch(`/api/testimonio/${Id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setFormData({
      _id: data._id,
      nombre: data.nombre,
      img: data.img,
      cargo: data.cargo,
      testimonio: data.testimonio,
      testimonioCompleto: data.testimonioCompleto,
    });
  };

  useEffect(() => {
    if (Id) {
      getTestimonio();
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
      const res = await fetch(`/api/testimonio/${Id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          img: formData.img,
          cargo: formData.cargo,
          testimonio: formData.testimonio,
          testimonioCompleto: formData.testimonioCompleto,
        }),
      });

      if (res.ok) {
        toast({
          title: "Testimonio actualizado.",
          description: "El testimonio se ha actualizado correctamente.",
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
        description: "Ocurrió un error al crear el un evento.",
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
      <div className="w-full flex flex-row justify-end items-center">
        <p className="text-purple-900">{formData._id}</p>
        <Tooltip label="Id" aria-label="A tooltip" className="dark:bg-blue-900">
          <span>
            <AiOutlineIdcard className="mx-2 text-xl text-purple-700" />
          </span>
        </Tooltip>
      </div>
      <div className="flex flex-col justify-between items-start w-full mt-5 lg:mx-4 md:mx-4 sm:mx-0">
        <div className="w-full flex flex-row justify-center items-center">
          {User?.img === undefined ? (
            <div className="w-full flex flex-row justify-center items-center h-[200px]">
              <Spinner
                className="w-40"
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
              width={200}
              height={200}
              className="rounded-md"
            />
          )}
        </div>
        <Input
          type="text"
          name="img"
          placeholder="Ingresa la URL de la imagen"
          className="text-black mt-5"
          defaultValue={formData.img}
          onChange={handleChange}
        />
        <Label className="font-bold mx-2 my-1 text-gray-700">Nombre</Label>
        <Input
          type="text"
          name="nombre"
          placeholder="Ingresa el nombre de la persona"
          defaultValue={formData.nombre}
          className="text-gray-500"
          onChange={handleChange}
        />
        <Label className="font-bold mx-2 my-1 text-gray-700 mt-2">Cargo</Label>
        <Input
          type="text"
          name="cargo"
          placeholder="Ingresa el nombre del cargo de la persona"
          defaultValue={formData.cargo}
          className="text-gray-500"
          onChange={handleChange}
        />
        <Label className="font-bold mx-2 my-1 text-gray-700 mt-2">
          Testimonio
        </Label>
        <Textarea
          name="testimonio"
          placeholder="Ingrese una breve descripción del testimonio"
          defaultValue={formData.testimonio}
          className="text-gray-500"
          height={"90px"}
          onChange={handleChange}
        />
        <Label className="font-bold mx-2 my-1 text-gray-700 mt-2">
          Testimonio completo
        </Label>
        <Textarea
          name="testimonioCompleto"
          placeholder="Ingresa el testimonio completo"
          defaultValue={formData.testimonioCompleto}
          className="text-gray-500"
          height={"90px"}
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

export default UpdateTestimonio;
