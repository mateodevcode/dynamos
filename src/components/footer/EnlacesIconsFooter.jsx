"use client";
import {
  BsFacebook,
  BsInstagram,
  BsTelegram,
  BsTiktok,
  BsWhatsapp,
  BsYoutube,
} from "react-icons/bs";
import Link from "next/link";
import { Tooltip } from "@chakra-ui/react";

const EnlacesIconsFooter = ({ enlace }) => {
  const red = enlace;

  return (
    <div className="flex flex-row w-full flex-wrap justify-center items-center ">
      {red.facebook && (
        <Link href={red.facebook} target="_blank">
          <Tooltip
            label="Facebook"
            aria-label="Facebook"
            placement="top"
            fontSize={12}
            color={"white"}
            bg={"gray.500"}
          >
            <span>
              <BsFacebook className="mx-2 text-gray-400 dark:text-white text-base cursor-pointer hover:text-blue-600 dark:hover:text-gray-600" />
            </span>
          </Tooltip>
        </Link>
      )}
      {red.tiktok && (
        <Link href={red.tiktok} target="_blank">
          <Tooltip
            label="Tiktok"
            aria-label="Tiktok"
            placement="top"
            fontSize={12}
            color={"white"}
            bg={"gray.500"}
          >
            <span>
              <BsTiktok className="mx-2 text-gray-400 dark:text-white text-base cursor-pointer hover:text-black dark:hover:text-gray-600" />
            </span>
          </Tooltip>
        </Link>
      )}
      {red.instagram && (
        <Link href={red.instagram} target="_blank">
          <Tooltip
            label="Instagram"
            aria-label="Instagram"
            placement="top"
            fontSize={12}
            color={"white"}
            bg={"gray.500"}
          >
            <span>
              <BsInstagram className="mx-2 text-gray-400 dark:text-white text-base cursor-pointer hover:text-pink-500 dark:hover:text-gray-600" />
            </span>
          </Tooltip>
        </Link>
      )}
      {red.youtube && (
        <Link href={red.youtube} target="_blank">
          <Tooltip
            label="Youtube"
            aria-label="Youtube"
            placement="top"
            fontSize={12}
            color={"white"}
            bg={"gray.500"}
          >
            <span>
              <BsYoutube className="mx-2 text-gray-400 dark:text-white text-base cursor-pointer hover:text-red-600 dark:hover:text-gray-600" />
            </span>
          </Tooltip>
        </Link>
      )}
      {red.whatsapp && (
        <Link href={red.whatsapp} target="_blank">
          <Tooltip
            label="Whatsapp"
            aria-label="Whatsapp"
            placement="top"
            fontSize={12}
            color={"white"}
            bg={"gray.500"}
          >
            <span>
              <BsWhatsapp className="mx-2 text-gray-400 dark:text-white text-base cursor-pointer hover:text-green-500 dark:hover:text-gray-600" />
            </span>
          </Tooltip>
        </Link>
      )}
      {red.telegram && (
        <Link href={red.telegram} target="_blank">
          <Tooltip
            label="Telegram"
            aria-label="Telegram"
            placement="top"
            fontSize={12}
            color={"white"}
            bg={"gray.500"}
          >
            <span>
              <BsTelegram className="mx-2 text-gray-400 dark:text-white text-base cursor-pointer hover:text-blue-500 dark:hover:text-gray-600" />
            </span>
          </Tooltip>
        </Link>
      )}
    </div>
  );
};

export default EnlacesIconsFooter;
