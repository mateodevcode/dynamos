"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { VscSettings } from "react-icons/vsc";

const Options = () => {
  const [Data, setData] = useState([]);
  const router = useRouter();


  const estilosItems =
    "text-black hover:bg-gray-200 px-2 py-1 cursor-pointer flex flex-row justify-between items-center select-none cursor-pointer";

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
    <div className="flex flex-col justify-between w-[200px] h-[600px] sticky top-14">
      <section className="">
        <ul className="">
          <li
            className={estilosItems}
            id="evento"
            onClick={(e) => {
              handleClick(e.target.id);
            }}
          >
            Eventos
            <VscSettings />
          </li>
          <li
            className={estilosItems}
            id="userTeam"
            onClick={(e) => {
              handleClick(e.target.id);
            }}
          >
            Team Dynamos
            <VscSettings />
          </li>
          <li
            className={estilosItems}
            id="testimonio"
            onClick={(e) => {
              handleClick(e.target.id);
            }}
          >
            Testimonios
            <VscSettings />
          </li>
          <li
            className={estilosItems}
            id="usuario"
            onClick={(e) => {
              handleClick(e.target.id);
            }}
          >
            Usuarios
            <VscSettings />
          </li>
          <li
            className={estilosItems}
            id="config"
            onClick={(e) => {
              handleClick(e.target.id);
            }}
          >
            Configuración
            <IoSettingsSharp />
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Options;
