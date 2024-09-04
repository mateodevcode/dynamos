import React, { useEffect, useState } from "react";
import {
  Input,
  InputGroup,
  InputLeftAddon,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import EstadoActualizado from "@/components/datos-perfil/EstadoActualizado";


const DatosPerfil = ({ user }) => {
  const [editar, setEditar] = useState(false);
  const [name, setname] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [ocupacion, setOcupacion] = useState(user.ocupacion);
  const [estado, setEstado] = useState(null);

  useEffect(() => {
    if (estado) {
      setTimeout(() => {
        setEstado(null);
        location.reload();
      }, 3000);
    }
  }, [estado]);

  return (
    <>
      <div className="flex justify-center w-full lg:pt-20 md:pt-16 sm:pt-10 dark:bg-gray-950 dark:text-white">
        <div className="lg:w-5/12">
          <h1 className="lg:text-6xl md:text-5xl sm:text-3xl font-serif mb-10 p-5">Editar perfil</h1>
          <div className="flex flex-row justify-start items-center w-full">
            <div className="border-black border rounded-full mx-5 mb-10 w-52">
              <img
                src={user.image}
                alt="Imagen de perfil"
                className="w-full rounded-full"
              />
              {/* <Input type="file" className="w-full mt-5" /> */}
            </div>
          </div>
          <div className="mx-5 mb-20">
          {estado && <EstadoActualizado estado={estado} />}
            <form
              onSubmit={async (e) => {
                e.preventDefault();

                if (editar) {
                  const res = await fetch(`/api/user/${email}`, {
                    method: "PUT",
                    body: JSON.stringify({
                      name,
                      email,
                      password,
                      ocupacion,
                    }),
                    headers: {
                      "Content-Type": "application/json",
                    },
                  });
                  const user = await res.json();
                  console.log(user);
                  setEstado("Usuario actualizado correctamente");
                }
              }}
            >
              <Stack spacing={4}>
                <Input type="file" />
                <InputGroup className="mb-2">
                  <InputLeftAddon className="font-semibold dark:bg-blue-700">
                    Nombre
                  </InputLeftAddon>
                  <Input
                    type="text"
                    placeholder={user.name}
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                  />
                </InputGroup>
                <InputGroup className="my-2">
                  <InputLeftAddon className="font-semibold dark:bg-blue-700">
                    Email
                  </InputLeftAddon>
                  <Input
                    type="email"
                    placeholder={user.email}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
                <InputGroup className="my-2">
                  <InputLeftAddon className="font-semibold dark:bg-blue-700">
                    Contraseña
                  </InputLeftAddon>
                  <Input
                    type="password"
                    placeholder={user.password}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </InputGroup>
                <InputGroup className="my-2">
                  <InputLeftAddon className="font-semibold dark:bg-blue-700">
                    Profesión
                  </InputLeftAddon>
                  <Input
                    type="text"
                    placeholder={user.ocupacion}
                    value={ocupacion}
                    onChange={(e) => setOcupacion(e.target.value)}
                  />
                </InputGroup>
                <p className="font-semibold">Perteneces al Team Dynamos?</p>
                <RadioGroup defaultValue="1">
                  <Stack spacing={5} direction="row">
                    <Radio colorScheme="blue" value="1">
                      Si
                    </Radio>
                    <Radio colorScheme="red" value="2">
                      No
                    </Radio>
                  </Stack>
                </RadioGroup>
                <div className="mt-5 flex">
                  <div
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg mx-2 w-max cursor-pointer"
                    onClick={() => {
                      if (editar) {
                        location.reload();
                        setEditar(false);
                      } else {
                        setEditar(true);
                      }
                    }}
                  >
                    {editar ? "Cancelar" : "Editar"}
                  </div>
                  {editar && (
                    <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mx-2"
                  >
                    Guardar
                  </button>
                  )}
                </div>
              </Stack>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DatosPerfil;
