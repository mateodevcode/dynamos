import { Tooltip } from "@chakra-ui/react";
import { signOut } from "next-auth/react";
import { LuLogOut } from "react-icons/lu";

const Logout = () => {
  return (
    <Tooltip label="Salir" fontSize="md">
      <div
        onClick={() => signOut()}
        className="flex flex-row items-center justify-center cursor-pointer"
      >
        <LuLogOut className="text-xl mx-1 text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-500" />
      </div>
    </Tooltip>
  );
};

export default Logout;
