"use client";
import { Avatar, AvatarBadge, Stack, Tooltip } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/react";
import React, { use, useEffect, useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import Link from "next/link";

const UserNavbar = () => {
  const { data: session, status } = useSession();
  const [user, setUser] = useState([]);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    if (status == "authenticated" && session ) {
        const cargarUserTeam = async () => {
          const res = await fetch(`/api/user/${session?.user?.email}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await res.json();
          setUser(data.image);
        };
        cargarUserTeam();
    }
  }, [session]);

  useEffect(() => {
    if (session?.user?.email === "bysteffler@gmail.com") {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
  }, [session]);


  return (
    <div className="flex flex-row justify-end items-center text-black lg:px-2 md:px-0 sm:px-0">
      <div className="my-1 font-semibold dark:text-white select-none sm:hidden lg:flex md:flex">
        {session?.user?.name}
      </div>
      {status == "authenticated" && (
        <Link href={`/datos-perfil/`} className="mx-3">
          <Tooltip label="Editar Perfil" fontSize="md">
          <Avatar src={user} size={"sm"}>
            {/* <Avatar src={session?.user?.image} size={"sm"}> */}
              <AvatarBadge boxSize="1.25em" bg="green.500" />
            </Avatar>
          </Tooltip>
        </Link>
      )}
      {status == "authenticated" && (
        <Stack direction="row" spacing={4}>
          <Button
            onClick={() => signOut()}
            rightIcon={<AiOutlineLogout />}
            colorScheme="black"
            variant="outline"
            className="dark:text-white hover:bg-black/20 dark:hover:bg-gray-300/20"
          >
            Salir
          </Button>
        </Stack>
      )}
    </div>
  );
};

export default UserNavbar;
