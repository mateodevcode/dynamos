"use client";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { BsList } from "react-icons/bs";
import { enlacesNavbar } from "@/data/navbar";
import Enlace from "./Enlace";
import Logo from "../logo/Logo";

function MenuHamburger() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <BsList onClick={onOpen} className="text-xl md:flex lg:hidden select-none" />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton className="bg-white text-black dark:bg-black dark:text-white" />
          <DrawerBody className="bg-white dark:bg-gray-950 text-black dark:text-white">
            <div className="flex flex-col justify-between items-start">
              <div className="mx-2 my-10">
                <Logo />
              </div>
              <div
                className={`w-full flex flex-col justify-center items-start mt-5 mb-40`}
              >
                {enlacesNavbar.map((enlace, index) => {
                  return (
                    <Enlace
                      key={index}
                      nombre={enlace.nombre}
                      ruta={enlace.ruta}
                    />
                  );
                })}
                {/* <Enlace nombre="Iniciar Sesión" ruta="/login" />
                <Enlace nombre="Registrarse" ruta="/register" /> */}
              </div>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default MenuHamburger;
