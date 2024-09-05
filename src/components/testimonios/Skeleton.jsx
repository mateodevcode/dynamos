import { Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const Skeleton = () => {
  return (
    <div className="w-10/12 grid grid-cols-2 gap-4 mt-24">
      <div boxShadow="xl" bg="white" className="w-[600px] bg-gray-900 py-10 px-8 rounded-md">
        <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
        <SkeletonCircle size="10" className="mt-5" />
      </div>
      <div boxShadow="xl" bg="white" className="w-[600px] bg-gray-900 py-10 px-8 rounded-md">
        <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
        <SkeletonCircle size="10" className="mt-5" />
      </div>
      <div boxShadow="xl" bg="white" className="w-[600px] bg-gray-900 py-10 px-8 rounded-md">
        <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
        <SkeletonCircle size="10" className="mt-5" />
      </div>
      <div boxShadow="xl" bg="white" className="w-[600px] bg-gray-900 py-10 px-8 rounded-md">
        <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
        <SkeletonCircle size="10" className="mt-5" />
      </div>
    </div>
  );
};

export default Skeleton;
