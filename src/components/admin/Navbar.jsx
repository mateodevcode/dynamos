import { HiTemplate } from "react-icons/hi";
import UserNavbar from "../navbar/UserNavbar";

const Navbar = () => {
  return (
    <div className="bg-blue-900 w-full text-white text-xl flex flex-row justify-between items-center h-14 sticky top-0">
      <div className="mx-5 flex flex-row justify-start items-center">
        <HiTemplate className="text-2xl mx-2" />
        <h1>Panel de Administración</h1>
      </div>
      <div className="mx-5">
        <UserNavbar />
      </div>
    </div>
  );
};

export default Navbar;
