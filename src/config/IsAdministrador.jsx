import { useEffect, useState } from "react";
import { Admin } from "@/data/admin";


const IsAdministrador = (session) => {
  const [admin, setAdmin] = useState(false);

  useEffect(() => {

    if (session?.user?.email === Admin) {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
  }, [session]);
  return admin;
};

export default IsAdministrador;
