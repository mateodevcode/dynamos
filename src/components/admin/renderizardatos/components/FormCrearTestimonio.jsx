import { Button } from "@/components/ui/button";
import {
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";

const FormCrearTestimonio = () => {
  const toast = useToast();

  // Datos de testimonio para crear
  const [nombre, setNombre] = useState("");
  const [img, setImg] = useState("");
  const [cargo, setCargo] = useState("");
  const [testimonio, setTestimonio] = useState("");
  const [testimonioCompleto, setTestimonioCompleto] = useState("");

  const handleCreate = async (e) => {
    e.preventDefault();

    if (!nombre || !testimonio || !testimonioCompleto) {
      toast({
        title: "Campos vacíos.",
        description: "Todos los campos son obligatorios.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/api/testimonio`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          img,
          cargo,
          testimonio,
          testimonioCompleto,
        }),
      });

      if (res.ok) {
        toast({
          title: "Testimonio creado.",
          description: "El testimonio se ha creado correctamente.",
          status: "success",
          duration: 8000,
          isClosable: true,
          position: "top",
        });
        setTimeout(() => {
          location.reload();
        }, 700);
      }
    } catch (error) {
      toast({
        title: "Error.",
        description: "Ocurrió un error al crear el testimonio.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return;
    }
  };

  return (
    <form className="mt-10 lg:w-8/12 md:w-8/12 sm:w-full lg:px-0 md:px-0 sm:px-2">
      <Stack spacing={4}>
        <InputGroup>
          <InputLeftAddon className="font-semibold dark:bg-blue-900 dark:text-white text-black">
            Nombre
          </InputLeftAddon>
          <Input
            type="text"
            placeholder="Ingrese el nombre de la persona que da el testimonio"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon className="font-semibold dark:bg-blue-900 dark:text-white text-black">
            Cargo
          </InputLeftAddon>
          <Input
            type="text"
            placeholder="Ingrese el cargo de la persona que da el testimonio"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
          />
        </InputGroup>
        <Text className="font-semibold">
          Sube una imagen de la persona que da el testimonio
        </Text>
        <InputGroup>
          <InputLeftAddon className="font-semibold dark:bg-blue-900 dark:text-white text-black">
            Imagen
          </InputLeftAddon>
          <Input
            type="text"
            placeholder="Ingresa la URL de la imagen"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
        </InputGroup>
        <Text className="font-semibold">Testimonio</Text>

        <Textarea
          type="text"
          placeholder="Ingresa una breve descripción del testimonio"
          value={testimonio}
          onChange={(e) => setTestimonio(e.target.value)}
        />
        <Text className="font-semibold">Testimonio completo</Text>

        <Textarea
          type="text"
          placeholder="Ingresa el testimonio completo"
          value={testimonioCompleto}
          onChange={(e) => setTestimonioCompleto(e.target.value)}
        />
      </Stack>
      <div className="w-full flex flex-row justify-end items-center my-4">
        <Button
          onClick={handleCreate}
          className="dark:bg-green-700 dark:text-white hover:bg-green-500 dark:hover:bg-green-500 mx-2"
        >
          Crear
        </Button>
      </div>
    </form>
  );
};

export default FormCrearTestimonio;
