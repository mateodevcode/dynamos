"use client";
import { Button } from "@/components/ui/button";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Input,
  InputGroup,
  InputLeftAddon,
  Spinner,
  Stack,
  Text,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import { Label } from "@radix-ui/react-menubar";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineIdcard } from "react-icons/ai";
import { SkeletonEventosLeft } from "./components/SkeletonEventos";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Eventos = ({ datos }) => {
  const [createData, setCreateData] = useState(false);
  const [Data, setData] = useState([]);
  const [User, setUser] = useState({});
  const [Id, setId] = useState("");
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    ocupacion: "",
    role: "",
    image: "",
  });
  const [confirmarContrasena, setConfirmarContrasena] = useState("");
  const [verContrasena, setVerContrasena] = useState(false);
  const [tipoContrasena, setTipoContrasena] = useState("password");
  const [comprobarCorreo, setComprobarCorreo] = useState(false);

  // Datos de evento para crear
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ocupacion, setOcupacion] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");

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

  const handleCreate = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Estos campos son obligatorios.");
      return;
    }

    if (password !== confirmarContrasena) {
      alert("Las contraseñas no coinciden.");
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
      } else {
        alert("Ocurrió un error al crear un usuario");
      }
    } catch (error) {}
  };

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
      await fetch(`/api/user/${String(e.target.id)}`, {
        method: "DELETE",
      });
      setTimeout(() => {
        location.reload();
      }, 700);
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
    <>
      <div className="lg:w-5/12 md:w-5/12 sm:w-full">
        <h2 className="lg:text-2xl md:text-2xl sm:text-xl font-bold px-2 py-2 text-black bg-gray-100 flex flex-row justify-between items-center select-none">
          Usuarios
          <Tooltip
            label={`Crear usuario`}
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
                  src={item?.image}
                  alt={item?.name}
                  width={30}
                  height={30}
                  className="rounded-full mx-2"
                />
              )}
              <div className="flex flex-col justify-start items-start w-full">
                <p className="font-semibold lg:text-xs md:text-xs sm:text-[8px]">
                  {item?.name}
                </p>
                <div className="flex flex-row justify-between items-center w-full">
                  <p className="font-semibold lg:text-xs md:text-xs sm:text-[7px] text-gray-700">
                    {item?.email}
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
              <Label className="font-bold mx-2 my-1 text-gray-700">
                Nombre
              </Label>
              <Input
                type="text"
                name="name"
                placeholder="Ingresa el nombre del usuario"
                defaultValue={formData.name}
                className="text-gray-500"
                onChange={handleChange}
              />
              <Label className="font-bold mx-2 my-1 text-gray-700 mt-2">
                Email
              </Label>
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
                    Confirma la contraseña
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
                {confirmarContrasena !== password && (
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
          </div>
        )}
      </div>
    </>
  );
};

export default Eventos;
