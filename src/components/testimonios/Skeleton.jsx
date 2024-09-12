import { Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const Skeleton = () => {
  const stilos = {
    width: "600px",
    padding: "40px",
    borderRadius: "8px",
    backgroundColor: "#1a202c",
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Box className="w-10/12 grid grid-cols-2 gap-8 mt-24">
        <Box boxShadow="xl" style={stilos}>
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
          <SkeletonCircle size="10" className="mt-5" />
        </Box>
        <Box boxShadow="xl" style={stilos}>
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
          <SkeletonCircle size="10" className="mt-5" />
        </Box>
        <Box boxShadow="xl" style={stilos}>
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
          <SkeletonCircle size="10" className="mt-5" />
        </Box>
        <Box boxShadow="xl" style={stilos}>
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
          <SkeletonCircle size="10" className="mt-5" />
        </Box>
      </Box>
    </div>
  );
};

export default Skeleton;
