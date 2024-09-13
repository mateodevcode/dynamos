"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoArrowUndo, IoSettingsSharp } from "react-icons/io5";
import { VscSettings } from "react-icons/vsc";
import { MdOutlineMenuOpen } from "react-icons/md";
import { Tooltip } from "@chakra-ui/react";
import Link from "next/link";
import Logo from "../logo/Logo";

const Options = () => {
  const [Data, setData] = useState([]);
  const router = useRouter();
  const [mostrarMenu, setMostrarMenu] = useState(true);

  const estilosItems =
    "text-black lg:text-base md:text-base sm:text-xs  hover:bg-gray-200 px-2 py-1 cursor-pointer flex flex-row justify-between items-center select-none cursor-pointer";

  const handleClick = async (e) => {
    const res = await fetch(`/api/${e}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    setData(data);
    router.push(`/admin/${e}`);
  };

  return (
    <div
      className={`flex flex-col justify-between w-[200px] h-[600px] sticky top-14 ${
        mostrarMenu ? "w-[200px]" : "w-[30px]"
      }`}
    >
      <section className="">
        <div
          className={`w-full flex flex-row items-end my-1 ${
            mostrarMenu ? "justify-end" : "justify-center"
          }`}
        >
          <Tooltip
            label={`${mostrarMenu ? "Cerrar menú" : "Abrir menú"}`}
            aria-label="A tooltip"
            className="dark:bg-blue-900"
          >
            <span>
              <MdOutlineMenuOpen
                className={`cursor-pointer lg:text-xl md:text-xl sm:text-sm hover:text-blue-700 text-blue-900 ${
                  mostrarMenu ? "mx-2" : ""
                }`}
                onClick={() => {
                  setMostrarMenu(!mostrarMenu);
                }}
              />
            </span>
          </Tooltip>
        </div>
        <ul className={`${mostrarMenu ? "" : "hidden"}`}>
          <Link href="/admin" className={estilosItems} id="panel">
            Dashboard
          </Link>
          <li
            className={estilosItems}
            id="evento"
            onClick={(e) => {
              handleClick(e.target.id);
            }}
          >
            Eventos
            <VscSettings className="text-blue-900" />
          </li>
          <li
            className={estilosItems}
            id="userTeam"
            onClick={(e) => {
              handleClick(e.target.id);
            }}
          >
            Team Dynamos
            <VscSettings className="text-blue-900" />
          </li>
          <li
            className={estilosItems}
            id="testimonio"
            onClick={(e) => {
              handleClick(e.target.id);
            }}
          >
            Testimonios
            <VscSettings className="text-blue-900" />
          </li>
          <li
            className={estilosItems}
            id="userGoogle"
            onClick={(e) => {
              handleClick(e.target.id);
            }}
          >
            Usuarios
            <VscSettings className="text-blue-900" />
          </li>
          <li
            className={estilosItems}
            id="config"
            onClick={(e) => {
              handleClick(e.target.id);
            }}
          >
            Configuración
            <IoSettingsSharp className="text-blue-900" />
          </li>
          <Link href="/"
            className={estilosItems}
          >
            Volver a dynamos
            <IoArrowUndo className="text-blue-900" />
          </Link>
        </ul>
      </section>
    </div>
  );
};

export default Options;
