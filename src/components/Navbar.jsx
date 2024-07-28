import logoDynamo from "../img/logo/logo-dynamo.png";
import { enlacesNavbar } from "../data/enlaces.navbar";
import EnlaceNavbar from "./EnlaceNavbar";
import ModoDark from "./ModoDark";
import MenuHamburger from "./MenuHamburger";
import Link from "next/link";
import Image from "next/image";
import UserNavbar from "./UserNavbar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function BarraDeNavegacion() {
  const session = await getServerSession(authOptions);

  console.log("session", session);

  return (
    <div className="flex flex-col justify-start items-start z-50 ">
      <div
        className={`w-full h-12 flex flex-row items-center lg:justify-between md:justify-around sm:justify-between dark:text-white border-gray-200 dark:border-gray-500 border-b-2 z-10 fixed bg-white/50 dark:bg-gray-900/50 shadow-md shadow-black/80 dark:shadow-white/50`}
      >
        {/* Imagen principal */}
        <Link href={"/"}>
          <Image
            className="w-8 lg:mx-40 md:mx-40 sm:mx-8 animate-bounce"
            src={logoDynamo}
            alt="Logo de Dynamo"
            width={32}
            height={32}
          />
        </Link>

        {/* Un map de los enlaces */}
        <div
          className={`md:flex flex-row justify-center items-center sm:hidden`}
        >
          {enlacesNavbar.map((enlace, index) => {
            return (
              <EnlaceNavbar
                key={index}
                nombre={enlace.nombre}
                ruta={enlace.ruta}
              />
            );
          })}
        </div>
        <div
          className={`flex flex-row justify-center items-center cursor-pointer`}
        >
          {!session && <EnlaceNavbar nombre="Entrar" ruta="/login" />}
          {!session && <EnlaceNavbar nombre="Registrarse" ruta="/register" />}

          <UserNavbar />
          <ModoDark />
          <MenuHamburger />
        </div>
      </div>
    </div>
  );
}

export default BarraDeNavegacion;
