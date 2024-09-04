import {
  BsFacebook,
  BsFillEnvelopeAtFill,
  BsInstagram,
  BsTelegram,
  BsTiktok,
  BsWhatsapp,
  BsYoutube,
} from "react-icons/bs";
import { enviarCorreo } from "@/config/enviarCorreo";
import Link from "next/link";

const EnlacesIconsFooter = ({ enlace }) => {
  const red = enlace;

  return (
    <div className="flex md:flex-row md:mb-10 sm:mb-5 md:w-full sm:flex-wrap sm:justify-center sm:items-center sm:w-10/12 md:mt-5">
      {red.facebook && (
        <Link href={red.facebook} target="_blank">
          <BsFacebook className="md:mx-5 sm:mx-2 md:text-3xl sm:text-base cursor-pointer hover:text-blue-600 dark:hover:text-gray-600" />
        </Link>
      )}
      {red.tiktok && (
        <Link href={red.tiktok} target="_blank">
          <BsTiktok className="md:mx-5 sm:mx-2 md:text-3xl sm:text-base cursor-pointer hover:text-black dark:hover:text-gray-600" />
        </Link>
      )}
      {red.instagram && (
        <Link href={red.instagram} target="_blank">
          <BsInstagram className="md:mx-5 sm:mx-2 md:text-3xl sm:text-base cursor-pointer hover:text-pink-500 dark:hover:text-gray-600" />
        </Link>
      )}
      {red.youtube && (
        <Link href={red.youtube} target="_blank">
          <BsYoutube className="md:mx-5 sm:mx-2 md:text-3xl sm:text-base cursor-pointer hover:text-red-600 dark:hover:text-gray-600" />
        </Link>
      )}
      {red.whatsapp && (
        <Link href={red.whatsapp} target="_blank">
          <BsWhatsapp className="md:mx-5 sm:mx-2 md:text-3xl sm:text-base cursor-pointer hover:text-green-500 dark:hover:text-gray-600" />
        </Link>
      )}
      {red.telegram && (
        <Link href={red.telegram} target="_blank">
          <BsTelegram className="md:mx-5 sm:mx-2 md:text-3xl sm:text-base cursor-pointer hover:text-blue-500 dark:hover:text-gray-600" />
        </Link>
      )}
      {red.correo && (
        <Link href={red.correo} onClick={enviarCorreo}>
          <BsFillEnvelopeAtFill className="md:mx-5 sm:mx-2 md:text-3xl sm:text-base cursor-pointer hover:text-black dark:hover:text-gray-600" />
        </Link>
      )}
    </div>
  );
};

export default EnlacesIconsFooter;
