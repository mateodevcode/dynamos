import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Logo from "../logo/Logo";
import Enlace from "./Enlace";
import { enlacesNavbar } from "@/data/navbar";
import ModoDark from "../mododark/ModoDark";
import UserNavbar from "./UserNavbar";
import MenuHamburger from "./MenuHamburger";
import Login from "./Login";

async function Navbar() {
  const session = await getServerSession(authOptions);

  return (
    <div className="w-full flex flex-row justify-between items-center lg:justify-between md:justify-between sm:justify-between border-gray-200 dark:border-gray-500 border-b-2 z-10 fixed h-12 text-black dark:text-white bg-white dark:bg-gray-950">
      <div className="lg:w-96 md:w-40 sm:w-16 flex flex-row justify-start items-center lg:px-10 md:px-10 sm:px-3">
        <Logo />
      </div>
      <div className="flex-row justify-center items-center lg:flex md:flex sm:hidden">
        {enlacesNavbar.map((enlace, index) => {
          return (
            <Enlace key={index} nombre={enlace.nombre} ruta={enlace.ruta} />
          );
        })}
      </div>
      <div className="lg:w-96 md:w-40 sm:w-56 flex flex-row justify-end items-center select-none lg:px-10 md:px-10 sm:px-3">
        {!session && <Login />}
        <UserNavbar />
        <ModoDark />
        <MenuHamburger />
      </div>
    </div>
  );
}

export default Navbar;
