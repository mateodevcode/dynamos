import { Tooltip } from "@chakra-ui/react";
import { signOut } from "next-auth/react";
import { LuLogOut } from "react-icons/lu";

const Logout = ({color}) => {
  return (
    <Tooltip label="Salir" fontSize="md">
      <div
        onClick={() => signOut()}
        className="flex flex-row items-center justify-center cursor-pointer"
      >
        <LuLogOut className={`text-xl mx-1 ${color}`} />
      </div>
    </Tooltip>
  );
};

export default Logout;
