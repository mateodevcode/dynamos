import { HiTemplate } from "react-icons/hi";
import UserNavbar from "../navbar/UserNavbar";

const Navbar = () => {
  return (
    <div className="bg-blue-900 w-full text-white text-xl flex flex-row justify-between items-center h-14 sticky top-0 z-10">
      <div className="lg:mx-5 md:mx-5 sm:mx-2 flex flex-row justify-start items-center">
        <HiTemplate className="text-2xl mx-2" />
        <h1 className="lg:text-xl md:text-xl sm:text-lg">Panel de Administración</h1>
      </div>
      <div className="mx-5">
        <UserNavbar color="text-white text-gray-100 dark:text-white hover:text-gray-400 dark:hover:text-gray-500" />
      </div>
    </div>
  );
};

export default Navbar;
