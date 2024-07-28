"use client";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import Evento from "@/components/eventos/Evento";

function DrawerEventos({ imagenes: imagen, datosEvento }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button
        onClick={onOpen}
        className="text-black text-5xl justify-end cursor-pointer hover:text-white hover:bg-blue-500 dark:hover:bg-red-500"
        _hover={{ bg: "blue.500" }}
      >
        Ver mas
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent className="bg-white dark:bg-gray-950">
          <DrawerCloseButton
            bg={"black"}
            color={"white"}
            className="dark:bg-white dark:text-black bg-black text-white"
          />

          <DrawerBody className="bg-white dark:bg-gray-950">
            <Evento imagenes={imagen} datosEvento={datosEvento} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerEventos;
