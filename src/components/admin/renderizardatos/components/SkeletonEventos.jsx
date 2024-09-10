import { Box, SkeletonText } from "@chakra-ui/react";

export const SkeletonEventosLeft = () => {
  return (
    <div className="mx-2 grid gap-2">
      <Box padding="4" boxShadow="lg" bg="white" className="rounded-md">
        <SkeletonText noOfLines={2} spacing="2" skeletonHeight="2" />
      </Box>
      <Box padding="4" boxShadow="lg" bg="white" className="rounded-md">
        <SkeletonText noOfLines={2} spacing="2" skeletonHeight="2" />
      </Box>
      <Box padding="4" boxShadow="lg" bg="white" className="rounded-md">
        <SkeletonText noOfLines={2} spacing="2" skeletonHeight="2" />
      </Box>
      <Box padding="4" boxShadow="lg" bg="white" className="rounded-md">
        <SkeletonText noOfLines={2} spacing="2" skeletonHeight="2" />
      </Box>
      <Box padding="4" boxShadow="lg" bg="white" className="rounded-md">
        <SkeletonText noOfLines={2} spacing="2" skeletonHeight="2" />
      </Box>
      <Box padding="4" boxShadow="lg" bg="white" className="rounded-md">
        <SkeletonText noOfLines={2} spacing="2" skeletonHeight="2" />
      </Box>
      <Box padding="4" boxShadow="lg" bg="white" className="rounded-md">
        <SkeletonText noOfLines={2} spacing="2" skeletonHeight="2" />
      </Box>
    </div>
  );
};
