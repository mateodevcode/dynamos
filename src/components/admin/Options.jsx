import { IoSettingsSharp } from "react-icons/io5";
import { VscSettings } from "react-icons/vsc";
import { Button } from "../ui/button";

const Options = () => {
  const estilosItems =
    "text-white hover:bg-slate-500 px-2 py-1 cursor-pointer flex flex-row justify-between items-center select-none";

  return (
    <div className="flex flex-col justify-between w-[200px] bg-slate-400 h-[635px]">
      <section className="">
        <ul className="">
          <li className={estilosItems}>
            Eventos
            <VscSettings />
          </li>
          <li className={estilosItems}>
            Team Dynamos
            <VscSettings />
          </li>
          <li className={estilosItems}>
            Testimonios
            <VscSettings />
          </li>
          <li className={estilosItems}>
            Usuarios
            <VscSettings />
          </li>
          <li className={estilosItems}>
            Configuración
            <IoSettingsSharp />
          </li>
        </ul>
      </section>
      <div>
        <Button className="bg-gray-500 hover:bg-gray-400 text-white px-2 py-1 mx-4 my-5">
          Cerrar Sesión
        </Button>
      </div>
    </div>
  );
};

export default Options;
