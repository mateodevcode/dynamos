import { Spinner } from "@chakra-ui/react";

const SpinnerLoad = ({ size }) => {
  return (
    <Spinner
      thickness={size}
      speed="1.6s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
      my={40}
    />
  );
};

export default SpinnerLoad;
