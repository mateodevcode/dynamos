"use client"
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
import { enlacesNavbar } from "../data/enlaces.navbar";
import EnlaceNavbar from "./EnlaceNavbar";
import { useAuth } from "../context/AuthContext";
import logoDynamo from "../img/logo/logo-dynamo.png";
import Link from "next/link";
import Image from "next/image";

function MenuHamburger() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  // const { darkMode } = useAuth();
  const darkMode = false;


  return (
    <>
      <BsList onClick={onOpen} className="mx-4 text-2xl md:hidden" />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={darkMode ? "#111827" : "white"}>
          <DrawerCloseButton
            bg={darkMode ? "white" : "black"}
            color={darkMode ? "#111827" : "white"}
          />

          <DrawerBody>
            <div className="flex flex-col justify-between items-start">
              <div
                className={`w-full flex flex-col justify-center items-start dark:bg-gray-900 dark:text-gray-300 mt-16 mb-40`}
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
              <div className="mx-2">
                <Link href={"/"}>
                  <Image
                    className="w-28 animate-bounce"
                    src={logoDynamo}
                    alt="Logo de Dynamo"
                  />
                </Link>
              </div>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default MenuHamburger;
