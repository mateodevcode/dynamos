import { HiTemplate } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="bg-blue-900 py-4 w-full text-white text-xl">
      <div className="mx-5 flex flex-row justify-start items-center">
        <HiTemplate className="text-2xl mx-2" />
        <h1>Panel de Administración</h1>
      </div>
    </div>
  );
};

export default Navbar;
