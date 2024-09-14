import { Tooltip } from "@chakra-ui/react";
import Link from "next/link";
import { RiListSettingsLine } from "react-icons/ri";

const EnlaceAdmin = () => {
  return (
    <Link href="/admin" className="mx-2">
      <Tooltip label="config" fontSize="md">
        <span>
          <RiListSettingsLine className="text-xl cursor-pointer hover:text-gray-500 dark:hover:text-gray-500" />
        </span>
      </Tooltip>
    </Link>
  );
};

export default EnlaceAdmin;
