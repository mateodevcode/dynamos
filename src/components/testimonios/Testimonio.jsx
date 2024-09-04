"use client";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { comma } from "@/data/comma";

const Testimonio = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [testimonio, setTestimonio] = useState([]);

  useEffect(() => {
    const testimonios = async () => {
      const res = await fetch("/api/testimonio", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      const key = "_id";
      const value = id;
      const testimonio = data.find((testimonio) => testimonio[key] === value);
      setTestimonio(testimonio);
    };
    testimonios();
  }, []);


  return (
    <>
      <Button
        className="bg-green-600 text-white dark:hover:bg-green-400 hover:bg-green-400"
        onClick={onOpen}
      >
        Ver más
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent className="bg-gray-100 dark:bg-gray-900">
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody className="w-full h-full">
            <div className="p-4 w-full">
              <div className="h-full bg-gray-100 dark:bg-gray-900 p-8 rounded">
                <div className="block w-5 h-5 text-gray-400 mb-4">
                  {comma.icon}
                </div>
                <p className="leading-relaxed mb-6 dark:text-white text-black">
                  {testimonio.testimonioCompleto}
                </p>
                <div className="flex flex-row justify-between items-center">
                  <div className="inline-flex items-center">
                    <img
                      alt="testimonial"
                      src={testimonio.img}
                      className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                      width={106}
                      height={106}
                    />
                    <span className="flex-grow flex flex-col pl-4 justify-start items-start">
                      <span className="title-font font-medium text-gray-900 dark:text-white">
                        {testimonio.nombre}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {testimonio.cargo}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              className="bg-gray-950 text-white dark:hover:bg-gray-600 hover:bg-green-400"
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Testimonio;
