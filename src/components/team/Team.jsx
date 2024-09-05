"use client";
import { Spinner } from "@chakra-ui/react";
import AddUserTeam from "@/components/team/AddUserTeam";
import CardTeam from "./CardTeam";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import HeaderTeam from "./HeaderTeam";

function Team() {
  const [teamDynamo, setTeamDynamo] = useState([]);
  const [admin, setAdmin] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user?.email === "bysteffler@gmail.com") {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
  }, [session]);

  useEffect(() => {
    const cargarUserTeam = async () => {
      const res = await fetch("/api/userTeam", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setTeamDynamo(data);
    };
    cargarUserTeam();
  }, []);

  return (
    <>
      {teamDynamo && (
        <div className="w-full flex flex-col justify-center items-center lg:pt-32 md:pt-32 sm:pt-24 bg-white dark:bg-gray-950">
          <div className="max-h-full w-full flex flex-col justify-center items-center">
            <HeaderTeam />
            <div className="flex flex-row justify-between items-center">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3">
                <CardTeam teamDynamo={teamDynamo} />
              </div>
              {teamDynamo.length === 0 && (
                <Spinner
                  thickness="4px"
                  speed="1.5s"
                  emptyColor="gray.200"
                  color="red.500"
                  size="xl"
                  my="20"
                />
              )}
            </div>
          </div>
          {admin && <AddUserTeam />}
        </div>
      )}
    </>
  );
}

export default Team;
