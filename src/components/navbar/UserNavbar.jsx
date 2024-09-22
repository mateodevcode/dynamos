"use client";
import { Avatar, AvatarBadge, Tooltip } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Logout from "./Logout";

const UserNavbar = ({color}) => {
  const { data: session, status } = useSession();
  const [user, setUser] = useState([]);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    if (status == "authenticated" && session) {
      const cargarUserTeam = async () => {
        const res = await fetch(`/api/user/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        setUser(data);

        const key = "email";
        const user = data.find((user) => user[key] === session.user.email);
        if (user) {
          setUser(user);
        }

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
    <div className="flex flex-row justify-end items-center">
      <div className="my-1 select-none sm:hidden lg:flex md:hidden text-sm">
        {session?.user?.name}
      </div>
      {status == "authenticated" && (
        <Link href={`/datos-perfil/`} className="mx-2">
          <Tooltip label="Editar Perfil" fontSize="md">
            <Avatar src={user?.image} size={"sm"}>
              <AvatarBadge boxSize="1.24em" bg="green.500" />
            </Avatar>
          </Tooltip>
        </Link>
      )}
      {status == "authenticated" && (
        <Logout color={color} />
      )}
    </div>
  );
};

export default UserNavbar;
