"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { Center, Divider, Input, Spinner } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { BsPersonFillAdd } from "react-icons/bs";
import RenderizarDatos from "@/components/admin/RenderizarDatos";

const Panel = ({params}) => {
  const [Data, setData] = useState([]);
  const [User, setUser] = useState({
    nombre: "Jecson Cantillo Álvarez",
    cargo: "Pastor Fundador",
    img: "https://i.postimg.cc/tThWnRyc/jecson-cantillo.jpg",
  });
  const [Id, setId] = useState("669bf7d95053e29a5990cf2b");

//   useEffect(() => {
//     const cargarDatos = async () => {
//       const res = await fetch(`/api/${params.id}`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       const data = await res.json();
//       setData(data);
//     };
//     cargarDatos();
//   }, []);

  //   useEffect(() => {
  //     const cargarDatos = async () => {
  //       const res = await fetch(`/api/${params.id}`, {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });
  //       const data = await res.json();
  //       setData(data);

  //     //   const key = "_id";
  //     //   const value = Id;
  //     //   const user = data.find((item) => item[key] === value);
  //     //   setUser(user);
  //     };
  //     cargarDatos();
  //   }, []);

  // console.log(Id);


  return (
    <div className="bg-slate-100 w-full flex flex-row justify-start items-start min-h-screen">
      <RenderizarDatos datos={params.id} />
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
            <Input
              type="text"
              defaultValue="Contraseña"
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
      </div> */}
    </div>
  );
};

export default Panel;
