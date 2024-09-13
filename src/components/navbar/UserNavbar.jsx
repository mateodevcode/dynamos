"use client";
import { Avatar, AvatarBadge, Tooltip } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Logout from "./Logout";

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
    const adminEmail = process.env.NEXT_AUTH_ADMIN_EMAIL;
    if (session?.user?.email === adminEmail) {
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
        <Link href={`/datos-perfil/`} className="mx-2">
          <Tooltip label="Editar Perfil" fontSize="md">
            <Avatar src={user} size={"sm"}>
              <AvatarBadge boxSize="1.25em" bg="green.500" />
            </Avatar>
          </Tooltip>
        </Link>
      )}
      {status == "authenticated" && (
        <Logout />
      )}
    </div>
  );
};

export default UserNavbar;
