"use client";
import {
  ModalOverlay,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  ModalFooter,
  useDisclosure,
  Stack,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTiktok,
  BsYoutube,
} from "react-icons/bs";
import { TbWorldWww } from "react-icons/tb";
import AlertaUserTeam from "@/components/team/AlertaUserTeam";
import { IoPersonAdd } from "react-icons/io5";
import { Button } from "../ui/button";

function AddUserTeam() {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="30%"
      backdropBlur="2px"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);
  const [nombre, setNombre] = useState("");
  const [cargo, setCargo] = useState("");
  const [img, setImg] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [tiktok, setTiktok] = useState("");
  const [youtube, setYoutube] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [web, setWeb] = useState("");
  const [mensaje, setMensaje] = useState("");

  const hadlesubmit = async (e) => {
    e.preventDefault();

    if (!nombre || !cargo || !img) {
      alert("Estos campos son obligatorios.");
      return;
    }

    try {
      const res = await fetch("api/userTeam", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          cargo,
          img,
          redes: {
            facebook,
            instagram,
            tiktok,
            youtube,
            linkedin,
            web,
          },
        }),
      });

      if (res.ok) {
        setMensaje("Usuario creado correctamente.");
        setTimeout(() => {
          onClose();
          location.reload();
          setMensaje("");
        }, 3000);
      } else {
        alert("Ocurrió un error al crear el usuario");
      }
    } catch (error) {}
  };

  return (
    <>
      <Button
        className="dark:bg-blue-700 dark:text-white hover:bg-blue-500 dark:hover:bg-blue-500 mt-20"
        onClick={() => {
          setOverlay(<OverlayTwo />);
          onOpen();
        }}
      >
        <IoPersonAdd className="mr-3" />
        Añadir Usuario
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent className="dark:bg-black dark:text-white">
          <ModalHeader className="text-center">
            Unete + Team Dynamos
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {mensaje && <AlertaUserTeam mensaje={mensaje} />}
            <form>
              <Stack spacing={4}>
                <InputGroup>
                  <InputLeftAddon className="font-semibold dark:bg-blue-700 dark:text-white text-black">
                    Nombre
                  </InputLeftAddon>
                  <Input
                    type="text"
                    placeholder={"Ingresa el nombre completo"}
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </InputGroup>
                <InputGroup>
                  <InputLeftAddon className="font-semibold dark:bg-blue-700 dark:text-white text-black">
                    Cargo
                  </InputLeftAddon>
                  <Input
                    type="text"
                    placeholder={"Ingresa el cargo que desempeña"}
                    value={cargo}
                    onChange={(e) => setCargo(e.target.value)}
                  />
                </InputGroup>
                <Text className="font-semibold">Sube una foto</Text>
                <InputGroup>
                  <InputLeftAddon className="font-semibold dark:bg-blue-700 dark:text-white text-black">
                    Imagen
                  </InputLeftAddon>
                  <Input
                    type="text"
                    placeholder={"Ingresa la URL de la imagen"}
                    value={img}
                    onChange={(e) => setImg(e.target.value)}
                  />
                </InputGroup>
                {/* <Input type="file" /> */}
                <Text className="text-center text-lg">
                  ¿Tiene redes sociales?
                </Text>
                <InputGroup>
                  <InputLeftAddon className="font-semibold dark:bg-blue-700">
                    <BsFacebook className="dark:text-white text-black" />
                  </InputLeftAddon>
                  <Input
                    type="text"
                    placeholder={"Ingresa la URL de Facebook"}
                    value={facebook}
                    onChange={(e) => setFacebook(e.target.value)}
                  />
                </InputGroup>
                <InputGroup>
                  <InputLeftAddon className="font-semibold dark:bg-blue-700">
                    <BsInstagram className="dark:text-white text-black" />
                  </InputLeftAddon>
                  <Input
                    type="text"
                    placeholder={"Ingresa la URL de Instagram"}
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                  />
                </InputGroup>
                <InputGroup>
                  <InputLeftAddon className="font-semibold dark:bg-blue-700">
                    <BsTiktok className="dark:text-white text-black" />
                  </InputLeftAddon>
                  <Input
                    type="text"
                    placeholder={"Ingresa la URL de Tiktok"}
                    value={tiktok}
                    onChange={(e) => setTiktok(e.target.value)}
                  />
                </InputGroup>
                <InputGroup>
                  <InputLeftAddon className="font-semibold dark:bg-blue-700">
                    <BsYoutube className="dark:text-white text-black" />
                  </InputLeftAddon>
                  <Input
                    type="text"
                    placeholder={"Ingresa la URL de Youtube"}
                    value={youtube}
                    onChange={(e) => setYoutube(e.target.value)}
                  />
                </InputGroup>
                <InputGroup>
                  <InputLeftAddon className="font-semibold dark:bg-blue-700">
                    <BsLinkedin className="dark:text-white text-black" />
                  </InputLeftAddon>
                  <Input
                    type="text"
                    placeholder={"Ingresa la URL de Linkedin"}
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}
                  />
                </InputGroup>
                <InputGroup>
                  <InputLeftAddon className="font-semibold dark:bg-blue-700">
                    <TbWorldWww className="dark:text-white text-black" />
                  </InputLeftAddon>
                  <Input
                    type="text"
                    placeholder={"Ingresa la URL de la página web"}
                    value={web}
                    onChange={(e) => setWeb(e.target.value)}
                  />
                </InputGroup>
              </Stack>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={hadlesubmit}
              className="dark:bg-green-700 dark:text-white hover:bg-green-500 dark:hover:bg-green-500 mx-2"
            >
              Crear
            </Button>
            <Button
              onClick={onClose}
              className="dark:bg-gray-700 dark:text-white hover:bg-gray-500 dark:hover:bg-gray-500 mx-2"
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddUserTeam;
