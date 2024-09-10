"use client";
import { Button } from "@/components/ui/button";
import { Input, Spinner, Textarea } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsPersonFillAdd } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

const Usuarios = ({ datos }) => {
  const [Data, setData] = useState([]);
  const [User, setUser] = useState({
    titulo: "Fiesta Familiar De Las Banderas",
    descripcion:
      "Mega cosecha, Por más de 10 años consecutivos ICAEP Ciudad Camelot, se ha preparado para realizar uno de sus eventos más grandes...",
    imgPrincipal: "https://i.postimg.cc/CxwxW66J/flayer-evento.jpg",
  });
  const [Id, setId] = useState("66d9ebb12414e6a3d568eac3");

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

  return (
    <>
      <div className="w-4/12">
        <h2 className="text-2xl font-bold px-2 py-2 text-black bg-gray-100 flex flex-row justify-between items-center select-none">
          Eventos
          <BsPersonFillAdd className="text-2xl text-gray-950 hover:text-gray-800 mx-5 select-none cursor-pointer" />
        </h2>
        {Data.map((item, index) => (
          <div
            key={index}
            className="bg-white p-2 m-2 rounded-lg flex flex-row justify-between items-center hover:bg-gray-200 select-none cursor-pointer"
          >
            <div className="flex flex-row justify-start items-center">
              {Data.length != 0 && (
                <Image
                  src={item?.image}
                  alt={item?.name}
                  width={30}
                  height={30}
                  className="rounded-full mx-2"
                />
              )}
              <p className="font-semibold text-xs">{item?.name}</p>
            </div>
            <div className="flex flex-row justify-center items-center">
              <RiDeleteBin5Line className="text-xl text-blue-900 hover:text-blue-600 mx-1" />
              <FaRegEdit
                className="text-xl text-green-900 hover:text-green-600 mx-1"
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

      {/* <div className="w-8/12 bg-gray-100 flex flex-col justify-start items-center">
        {User === undefined ? (
          <Spinner
            thickness="4px"
            speed="1.5s"
            emptyColor="gray.200"
            color="red.500"
            size="xl"
            my="20"
          />
        ) : (
          <div className="w-full mt-5 flex flex-row justify-between items-start px-10 py-5">
            <div className="w-6/12">
              <Image
                src={User?.image}
                alt={"User"}
                width={400}
                height={400}
                className="rounded-md"
              />
              <Input type="file" className="text-black mt-5" />
            </div>
            <div className="flex flex-col justify-between items-center w-6/12">
              <Input
                type="text"
                defaultValue={User?.nombre}
                className="text-black mt-5"
                _placeholder={{
                  color: "black",
                }}
              />
              <Textarea
                defaultValue={User?.descripcion}
                className="text-black mt-5"
                height={80}
                _placeholder={{
                  color: "black",
                }}
              />
              <Button className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 mt-5">
                Editar
              </Button>
            </div>
          </div>
        )}
      </div> */}
    </>
  );
};

export default Usuarios;
