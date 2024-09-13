"use client";
import { Button } from "@/components/ui/button";
import {
  Input,
  InputGroup,
  InputLeftAddon,
  Spinner,
  Stack,
  Text,
  Textarea,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import { Label } from "@radix-ui/react-menubar";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsFacebook, BsInstagram, BsPersonFillAdd } from "react-icons/bs";
import { AiOutlineIdcard } from "react-icons/ai";
import { SkeletonEventosLeft } from "./components/SkeletonEventos";
import { MdOutlineAddToPhotos } from "react-icons/md";

const Testimonios = ({ datos }) => {
  const [createData, setCreateData] = useState(false);
  const [Data, setData] = useState([]);
  const [User, setUser] = useState({});
  const [Id, setId] = useState("");
  const toast = useToast();
  const [formData, setFormData] = useState({
    nombre: "",
    img: "",
    cargo: "",
    testimonio: "",
    testimonioCompleto: "",
  });

  // Datos de testimonio para crear
  const [nombre, setNombre] = useState("");
  const [img, setImg] = useState("");
  const [cargo, setCargo] = useState("");
  const [testimonio, setTestimonio] = useState("");
  const [testimonioCompleto, setTestimonioCompleto] = useState("");

  useEffect(() => {
    const cargarDatos = async () => {
      const res = await fetch(`/api/${datos}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setData(data.reverse());

      if (Id === "") {
        return setId(data[0]._id);
      }

      const key = "_id";
      const value = Id;
      const user = await data.find((item) => item[key] === value);
      setUser(user);
    };
    cargarDatos();
  }, [Id]);

  // Manejador de imagenes en array
  const handleArrayImg = (e) => {
    const linkArray = e.target.value.split(",").map((link) => link.trim());
    setImg(linkArray);
  };

  const handleCreate = async (e) => {
    e.preventDefault();

    if (!nombre || !testimonio || !testimonioCompleto) {
      alert("Estos campos son obligatorios.");
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/api/testimonio`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          img,
          cargo,
          testimonio,
          testimonioCompleto,
        }),
      });

      if (res.ok) {
        toast({
          title: "Testimonio creado.",
          description: "El testimonio se ha creado correctamente.",
          status: "success",
          duration: 8000,
          isClosable: true,
          position: "top",
        });
        setTimeout(() => {
          location.reload();
        }, 700);
      } else {
        alert("Ocurrió un error al crear el testimonio");
      }
    } catch (error) {}
  };

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
      } else {
        alert("Ocurrió un error al crear el evento");
      }
    } catch (error) {}
  };

  const handleDelete = async (e) => {
    if (window.confirm("¿Estás seguro de eliminar este testimonio?")) {
      toast({
        title: "Testimonio elminado.",
        description: "El testimonio se ha eliminado correctamente.",
        status: "success",
        duration: 8000,
        isClosable: true,
        position: "top",
      });
      await fetch(`/api/testimonio/${String(e.target.id)}`, {
        method: "DELETE",
      });
      setTimeout(() => {
        location.reload();
      }, 700);
    }
  };


  return (
    <>
      <div className="lg:w-5/12 md:w-5/12 sm:w-full">
        <h2 className="lg:text-2xl md:text-2xl sm:text-xl font-bold px-2 py-2 text-black bg-gray-100 flex flex-row justify-between items-center select-none">
          Testimonios
          <Tooltip
            label={`Crear testimonio`}
            aria-label="A tooltip"
            className="dark:bg-blue-900"
          >
            <span>
              <MdOutlineAddToPhotos
                className="lg:text-2xl md:text-2xl sm:text-base text-gray-950 hover:text-gray-600 lg:mx-5 md:mx-5 sm:mx-2 select-none cursor-pointer"
                onClick={() => setCreateData(!createData)}
              />
            </span>
          </Tooltip>
        </h2>
        {Data.length === 0 && <SkeletonEventosLeft />}
        {Data.map((item, index) => (
          <div
            key={index}
            className="bg-white p-2 m-2 rounded-lg flex flex-row justify-between items-center hover:bg-gray-200 select-none cursor-pointer"
          >
            <div className="flex flex-row justify-start items-center w-full">
              {Data.length != 0 && (
                <Image
                  src={item?.img}
                  alt={item?.nombre}
                  width={30}
                  height={30}
                  className="rounded-full mx-2"
                />
              )}
              <div className="flex flex-col justify-start items-start w-full">
                <p className="font-semibold lg:text-xs md:text-xs sm:text-[8px]">
                  {item?.nombre}
                </p>
                <div className="flex flex-row justify-between items-center w-full">
                  <p className="font-semibold lg:text-xs md:text-xs sm:text-[7px] font-mono text-gray-700">
                    {item?.cargo}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center">
              <div
                id={item?._id}
                onClick={handleDelete}
                className="bg-red-600 hover:bg-red-500 text-white mx-1 lg:text-xs md:text-xs sm:text-[7px] py-1 px-2 rounded-md flex flex-row justify-center items-center"
              >
                Eliminar
              </div>
              <div
                id={item?._id}
                onClick={async (e) => {
                  setCreateData(false);
                  e.preventDefault();
                  setId(e.target.id);
                }}
                className="bg-blue-600 hover:bg-blue-500 text-white mx-1 lg:text-xs md:text-xs sm:text-[7px] py-1 px-2 rounded-md flex flex-row justify-center items-center"
              >
                Editar
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="lg:w-8/12 md:w-8/12 sm:w-full bg-gray-100 flex flex-col justify-start items-center">
        {!createData && (
          <form
            className="w-11/12 mt-5 flex flex-col justify-between items-start lg:px-10 md:px-10 sm:px-2 py-5"
            onSubmit={handleUpdate}
            id={User?._id}
          >
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
              <Label className="font-bold mx-2 my-1 text-gray-700">
                Nombre
              </Label>
              <Input
                type="text"
                name="nombre"
                placeholder="Ingresa el nombre de la persona"
                defaultValue={formData.nombre}
                className="text-gray-500"
                onChange={handleChange}
              />
              <Label className="font-bold mx-2 my-1 text-gray-700 mt-2">
                Cargo
              </Label>
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
        )}
        {createData && (
          <div className="w-full flex flex-col justify-center items-center mt-10">
            <h2 className="lg:text-3xl md:text-3xl sm:text-xl font-bold">
              Crear Testimonio
            </h2>
            <form className="mt-10 lg:w-8/12 md:w-8/12 sm:w-full lg:px-0 md:px-0 sm:px-2">
              <Stack spacing={4}>
                <InputGroup>
                  <InputLeftAddon className="font-semibold dark:bg-blue-900 dark:text-white text-black">
                    Nombre
                  </InputLeftAddon>
                  <Input
                    type="text"
                    placeholder="Ingrese el nombre de la persona que da el testimonio"
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
                    placeholder="Ingrese el cargo de la persona que da el testimonio"
                    value={cargo}
                    onChange={(e) => setCargo(e.target.value)}
                  />
                </InputGroup>
                <Text className="font-semibold">
                  Sube una imagen de la persona que da el testimonio
                </Text>
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
                <Text className="font-semibold">Testimonio</Text>

                <Textarea
                  type="text"
                  placeholder="Ingresa una breve descripción del testimonio"
                  value={testimonio}
                  onChange={(e) => setTestimonio(e.target.value)}
                />
                <Text className="font-semibold">Testimonio completo</Text>

                <Textarea
                  type="text"
                  placeholder="Ingresa el testimonio completo"
                  value={testimonioCompleto}
                  onChange={(e) => setTestimonioCompleto(e.target.value)}
                />
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
          </div>
        )}
      </div>
    </>
  );
};

export default Testimonios;
