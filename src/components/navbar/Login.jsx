"use client";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Link from "next/link";
import { BsPersonCircle } from "react-icons/bs";
import { login } from "../../data/navbar";

const Login = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={
          <BsPersonCircle className="lg:text-2xl md:text-2xl sm:text-xl text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-500" />
        }
        variant="off"
      />
      <MenuList style={login.styles}>
        {login.enlaces.map((enlace) => (
          <MenuItem key={enlace.nombre}>
            <Link href={enlace.ruta}>{enlace.nombre}</Link>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default Login;
