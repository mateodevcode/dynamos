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
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsPersonFillAdd,
  BsTiktok,
  BsYoutube,
} from "react-icons/bs";
import { AiOutlineIdcard } from "react-icons/ai";
import { SkeletonEventosLeft } from "./components/SkeletonEventos";
import { TbWorldWww } from "react-icons/tb";

const UsersTeam = ({ datos }) => {
  const [createData, setCreateData] = useState(false);
  const [Data, setData] = useState([]);
  const [User, setUser] = useState({});
  const [Id, setId] = useState("");
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
      } else {
        alert("Ocurrió un error al crear el usuario");
      }
    } catch (error) {}
  };

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
      } else {
        alert("Ocurrió un error al crear el usuario");
      }
    } catch (error) {}
  };

  const handleDelete = async (e) => {
    if (window.confirm("¿Estás seguro de eliminar este usuario?")) {
      toast({
        title: "Usuario elminado.",
        description: "El usuario se ha eliminado correctamente.",
        status: "success",
        duration: 8000,
        isClosable: true,
        position: "top",
      });
      await fetch(`/api/userTeam/${String(e.target.id)}`, {
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
          Team Dynamos
          <Tooltip
            label={`Agregar usuario`}
            aria-label="A tooltip"
            className="dark:bg-blue-900"
          >
            <span>
              <BsPersonFillAdd
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
              <Label className="font-bold mx-2 my-1 text-gray-700">
                Nombre
              </Label>
              <Input
                type="text"
                name="nombre"
                placeholder="Ingresa el nombre del usuario"
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
        )}
        {createData && (
          <div className="w-full flex flex-col justify-center items-center mt-10">
            <h2 className="lg:text-3xl md:text-3xl sm:text-xl font-bold">
              Crear usuario
            </h2>
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
                <Text className="font-semibold">
                  Sube una imagen del usuario
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
          </div>
        )}
      </div>
    </>
  );
};

export default UsersTeam;
