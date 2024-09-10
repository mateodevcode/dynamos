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

const Eventos = ({ datos }) => {
  const [createData, setCreateData] = useState(false);
  const [Data, setData] = useState([]);
  const [User, setUser] = useState({});
  const [Id, setId] = useState("");
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
      alert("Estos campos son obligatorios.");
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
      } else {
        alert("Ocurrió un error al crear el usuario");
      }
    } catch (error) {}
  };

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
      } else {
        alert("Ocurrió un error al crear el usuario");
      }
    } catch (error) {}
  };

  const handleDelete = async (e) => {
    if (window.confirm("¿Estás seguro de eliminar este Evento?")) {
      toast({
        title: "Evento elminado.",
        description: "El evento se ha eliminado correctamente.",
        status: "success",
        duration: 8000,
        isClosable: true,
        position: "top",
      });
      await fetch(`/api/evento/${String(e.target.id)}`, {
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
        <h2 className="text-2xl font-bold px-2 py-2 text-black bg-gray-100 flex flex-row justify-between items-center select-none">
          Eventos
          <Tooltip
            label={`Crear evento`}
            aria-label="A tooltip"
            className="dark:bg-blue-900"
          >
            <span>
              <MdOutlineAddToPhotos
                className="text-2xl text-gray-950 hover:text-gray-600 mx-5 select-none cursor-pointer"
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
                  src={item?.iconImg}
                  alt={item?.titulo}
                  width={30}
                  height={30}
                  className="rounded-full mx-2"
                />
              )}
              <div className="flex flex-col justify-start items-start w-full">
                <p className="font-semibold lg:text-xs md:text-xs sm:text-[8px]">{item?.titulo}</p>
                <div className="flex flex-row justify-between items-center w-full">
                  <p className="font-semibold lg:text-xs md:text-xs sm:text-[7px] font-mono text-gray-700">
                    {item?.autor}
                  </p>
                  <p className="font-semibold lg:text-[8px] md:text-[8px] sm:text-[5px] mx-5 font-mono text-gray-500">
                    {item?.fecha}
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
              <Label className="font-bold mx-2 my-1 text-gray-700 mt-2">
                Titulo
              </Label>
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
              <Text className="font-semibold">
                Agrega las imágenes del evento
              </Text>
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
        )}
        {createData && (
          <div className="w-full flex flex-col justify-center items-center mt-10">
            <h2 className="lg:text-3xl md:text-3xl sm:text-xl font-bold">Crear Evento</h2>
            <form className="mt-10 lg:w-8/12 md:w-8/12 sm:w-full lg:px-0 md:px-0 sm:px-2">
              <Stack spacing={4}>
                <InputGroup>
                  <InputLeftAddon className="font-semibold dark:bg-blue-900 dark:text-white text-black">
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
                <Text className="font-semibold">
                  Agrega las imágenes del evento
                </Text>
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
          </div>
        )}
      </div>
    </>
  );
};

export default Eventos;
