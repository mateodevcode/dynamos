"use client";
import { Tooltip } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsPersonFillAdd } from "react-icons/bs";
import { SkeletonEventosLeft } from "./components/SkeletonEventos";
import FormCrearUserTeam from "./components/FormCrearUserTeam";
import UpdateUserTeam from "./components/UpdateUserTeam";

const UsersTeam = ({ datos }) => {
  const [createData, setCreateData] = useState(false);
  const [Data, setData] = useState([]);
  const [User, setUser] = useState({});
  const [Id, setId] = useState("");

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
        {!createData && <UpdateUserTeam User={User} Id={Id} />}
        {createData && (
          <div className="w-full flex flex-col justify-center items-center mt-10">
            <h2 className="lg:text-3xl md:text-3xl sm:text-xl font-bold">
              Crear usuario
            </h2>
            <FormCrearUserTeam />
          </div>
        )}
      </div>
    </>
  );
};

export default UsersTeam;
