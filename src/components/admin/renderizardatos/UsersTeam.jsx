"use client";
import { Button } from "@/components/ui/button";
import { Input, Spinner } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsPersonFillAdd } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

const UsersTeam = ({ datos }) => {
  const [Data, setData] = useState([]);
  const [User, setUser] = useState({
    nombre: "Jecson Cantillo Álvarez",
    cargo: "Pastor Fundador",
    img: "https://i.postimg.cc/tThWnRyc/jecson-cantillo.jpg",
  });
  const [Id, setId] = useState("669bf7d95053e29a5990cf2b");

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
          Team Dynamos
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

      <div className="w-8/12 bg-gray-100 flex flex-col justify-start items-center">
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
          <div className="w-400px mt-5 flex flex-col justify-center items-center px-10 py-5">
            <Image
              src={User?.img}
              alt={"User"}
              width={200}
              height={200}
              className="rounded-full"
            />
            <Input type="file" className="text-black mt-5" />
            <Input
              type="text"
              defaultValue={User?.nombre}
              className="text-black mt-5"
              _placeholder={{
                color: "black",
              }}
            />
            <Input
              type="text"
              defaultValue={User?.cargo}
              className="text-black mt-5"
              _placeholder={{
                color: "black",
              }}
            />
            <Button className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 mt-5">
              Editar
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default UsersTeam;
