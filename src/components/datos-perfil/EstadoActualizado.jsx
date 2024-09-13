import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";

const EstadoActualizado = ({ estado }) => {
  return (
    <Alert
      status="success"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="150px"
      color={"black"}
      my={10}
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        Felicidades !!!
      </AlertTitle>
      <AlertDescription maxWidth="sm" className="font-semibold">
        {estado}
      </AlertDescription>
    </Alert>
  );
};

export default EstadoActualizado;
