import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";

function AlertaEmailVacio({ alerta }) {
 
  return (
    <div className="w-80 my-5">
      <Alert status="error" className="text-black">
      <AlertIcon />
      <AlertTitle>Upss!!!</AlertTitle>
      {alerta.message}
    </Alert>
    </div>
  );
}

export default AlertaEmailVacio;
