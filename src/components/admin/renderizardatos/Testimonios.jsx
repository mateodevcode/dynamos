"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsPersonFillAdd } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

const Testimonios = ({ datos }) => {
  const [Data, setData] = useState([]);

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
    };
    cargarDatos();
  }, []);

  return (
    <div className="w-4/12">
      <h2 className="text-2xl font-bold px-2 py-2 text-black bg-gray-100 flex flex-row justify-between items-center select-none">
        Testimonios
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
  );
};

export default Testimonios;
