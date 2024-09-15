import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { BsList } from "react-icons/bs";
import { enlacesNavbar } from "@/data/navbar";
import Enlace from "./Enlace";
import Logo from "../logo/Logo";
import { useSession } from "next-auth/react";

function MenuHamburger() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [admin, setAdmin] = useState(false);
  const { data: session, status } = useSession();
  const email = String(session?.user?.email);

  useEffect(() => {
    if (email.includes(process.env.NEXT_PUBLIC_ADMIN_EMAIL)) {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
  }, [session]);



  return (
    <>
      <BsList onClick={onOpen} className="text-xl md:flex lg:hidden select-none hover:text-gray-500 dark:hover:text-gray-500" />
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
                {admin && <Enlace nombre={"Panel Admin"} ruta={"/admin"} />}
              </div>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default MenuHamburger;
