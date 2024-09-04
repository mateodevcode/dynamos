"use client";
import { Avatar, AvatarBadge, Stack, Tooltip } from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { LuLogOut } from "react-icons/lu";

const UserNavbar = () => {
  const { data: session, status } = useSession();
  const [user, setUser] = useState([]);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    if (status == "authenticated" && session) {
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
    <div className="flex flex-row justify-end items-center text-black">
      <div className="my-1 dark:text-white select-none sm:hidden lg:flex md:hidden text-sm">
        {session?.user?.name}
      </div>
      {status == "authenticated" && (
        <Link href={`/datos-perfil/`} className="mx-3">
          <Tooltip label="Editar Perfil" fontSize="md">
            <Avatar src={user} size={"sm"}>
              <AvatarBadge boxSize="1.25em" bg="green.500" />
            </Avatar>
          </Tooltip>
        </Link>
      )}
      {status == "authenticated" && (
        <Stack direction="row" spacing={4}>
          <Tooltip label="Salir" fontSize="md">
          <div
            onClick={() => signOut()}
            className="flex flex-row items-center justify-center cursor-pointer"
          >
            <LuLogOut className="text-xl mx-1 text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-500" />
          </div>
          </Tooltip>
        </Stack>
      )}
    </div>
  );
};

export default UserNavbar;
