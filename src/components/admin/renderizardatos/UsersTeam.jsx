"use client";
import { Button } from "@/components/ui/button";
import { Input, InputGroup, InputLeftAddon, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsPersonFillAdd, BsTiktok, BsYoutube } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { TbWorldWww } from "react-icons/tb";

const UsersTeam = ({ datos }) => {
  const [createData, setCreateData] = useState(false);
  const [Data, setData] = useState([]);
  const [User, setUser] = useState({
    nombre: "Mayra Hernández Palacio",
    cargo: "Pastora Fundadora",
    img: "https://i.postimg.cc/8zjvBmNM/mayra-hernandez.jpg",
  });
  const [Id, setId] = useState("669bf8b45053e29a5990cf2e");
  const [nombre, setNombre] = useState("");
  const [cargo, setCargo] = useState("");
  const [img, setImg] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [tiktok, setTiktok] = useState("");
  const [youtube, setYoutube] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [web, setWeb] = useState("");
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    const cargarDatos = async () => {
      const res = await fetch(`/api/${datos}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setData(data);

      const key = "_id";
      const value = Id;
      const user = data.find((item) => item[key] === value);
      setUser(user);
    };
    cargarDatos();
  }, [Id]);


  const handleCreate = async (e) => {
    e.preventDefault();

    if (!nombre || !cargo || !img) {
      alert("Estos campos son obligatorios.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/userTeam", {
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
        setMensaje("Usuario creado correctamente.");
        setTimeout(() => {
          location.reload();
          setMensaje("");
        }, 3000);
      } else {
        alert("Ocurrió un error al crear el usuario");
      }
    } catch (error) {}
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    window.confirm("¿Estás seguro de eliminar este usuario?");
    setMensaje("Eliminando usuario...");
    try {
      const res = await fetch(`http://localhost:3000/api/userTeam/${String(e.target.id)}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        setMensaje("Usuario eliminado correctamente.");
        setTimeout(() => {
          location.reload();
          setMensaje("");
        }, 3000);
      } else {
        alert("Ocurrió un error al eliminar el usuario");
      }
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <div className="w-4/12">
        <h2 className="text-2xl font-bold px-2 py-2 text-black bg-gray-100 flex flex-row justify-between items-center select-none">
          Team Dynamos
          <BsPersonFillAdd
            className="text-2xl text-gray-950 hover:text-gray-800 mx-5 select-none cursor-pointer"
            onClick={() => setCreateData(!createData)}
          />
        </h2>
        {Data.map((item, index) => (
          <div
            key={index}
            className="bg-white p-2 m-2 rounded-lg flex flex-row justify-between items-center hover:bg-gray-200 select-none cursor-pointer"
          >
            <div className="flex flex-row justify-start items-center">
              {Data.length != 0 && (
                <Image
                  src={item?.img}
                  alt={item?.nombre}
                  width={30}
                  height={30}
                  className="rounded-full mx-2"
                />
              )}
              <p className="font-semibold">{item?.nombre}</p>
            </div>
            <div className="flex flex-row justify-center items-center">
              <RiDeleteBin5Line className="text-xl text-blue-900 hover:text-blue-600 mx-2" 
                id={item?._id}
              onClick={handleDelete}
              />
              <FaRegEdit
                className="text-xl text-green-900 hover:text-green-600 mx-2"
                id={item?._id}
                onClick={async (e) => {
                  e.preventDefault();
                  setId(e.target.id);
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="w-8/12 bg-gray-100 flex flex-col justify-start items-center">
          <>
            {!createData && (
              <div className="w-400px mt-5 flex flex-col justify-center items-center px-10 py-5">
                <Image
                  src={User?.img}
                  alt={"User"}
                  width={200}
                  height={200}
                  className="rounded-full"
                />
                <Input
                  type="file"
                  className="text-black mt-5"
                  onChange={(e) => {
                    setImg(e.target.files);
                  }}
                />
                <Input
                  type="text"
                  defaultValue={User?.nombre}
                  className="text-black mt-5"
                  _placeholder={{
                    color: "black",
                  }}
                  onChange={(e) => {
                    setNombre(e.target.value);
                  }}
                />
                <Input
                  type="text"
                  defaultValue={User?.cargo}
                  className="text-black mt-5"
                  _placeholder={{
                    color: "black",
                  }}
                  onChange={(e) => {
                    setCargo(e.target.value);
                  }}
                />
                <Button className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 mt-5">
                  Editar
                </Button>
              </div>
            )}
            {createData && <form>
              <Stack spacing={4}>
                <InputGroup>
                  <InputLeftAddon className="font-semibold dark:bg-blue-700 dark:text-white text-black">
                    Nombre
                  </InputLeftAddon>
                  <Input
                    type="text"
                    placeholder={"Ingresa el nombre completo"}
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </InputGroup>
                <InputGroup>
                  <InputLeftAddon className="font-semibold dark:bg-blue-700 dark:text-white text-black">
                    Cargo
                  </InputLeftAddon>
                  <Input
                    type="text"
                    placeholder={"Ingresa el cargo que desempeña"}
                    value={cargo}
                    onChange={(e) => setCargo(e.target.value)}
                  />
                </InputGroup>
                <Text className="font-semibold">Sube una foto</Text>
                <InputGroup>
                  <InputLeftAddon className="font-semibold dark:bg-blue-700 dark:text-white text-black">
                    Imagen
                  </InputLeftAddon>
                  <Input
                    type="text"
                    placeholder={"Ingresa la URL de la imagen"}
                    value={img}
                    onChange={(e) => setImg(e.target.value)}
                  />
                </InputGroup>
                {/* <Input type="file" /> */}
                <Text className="text-center text-lg">
                  ¿Tiene redes sociales?
                </Text>
                <InputGroup>
                  <InputLeftAddon className="font-semibold dark:bg-blue-700">
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
                  <InputLeftAddon className="font-semibold dark:bg-blue-700">
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
                  <InputLeftAddon className="font-semibold dark:bg-blue-700">
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
                  <InputLeftAddon className="font-semibold dark:bg-blue-700">
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
                  <InputLeftAddon className="font-semibold dark:bg-blue-700">
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
                  <InputLeftAddon className="font-semibold dark:bg-blue-700">
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
              <Button
              onClick={handleCreate}
              className="dark:bg-green-700 dark:text-white hover:bg-green-500 dark:hover:bg-green-500 mx-2"
            >
              Crear
            </Button>
            </form>}
          </>
      </div>
    </>
  );
};

export default UsersTeam;
