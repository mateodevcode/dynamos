import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";

function AlertaUserTeam({ mensaje }) {

  return (
    <div className="w-full my-5">
      <Alert status={"success"} className="text-black">
      <AlertIcon />
      <AlertTitle>Upss!!!</AlertTitle>
      {mensaje}
    </Alert>
    </div>
  );
}

export default AlertaUserTeam;
