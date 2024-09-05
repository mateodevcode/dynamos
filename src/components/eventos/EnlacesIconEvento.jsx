import Link from "next/link";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTiktok,
  BsYoutube,
} from "react-icons/bs";
import { TbWorldWww } from "react-icons/tb";

function EnlacesIconEvento({ valores }) {

  return (
    <div className="team-icons flex flex-row justify-center items-center">
      {valores.redes.facebook && (
        <Link href={valores.redes.facebook} target="_blank">
          <BsFacebook
            className={`mx-2 text-2xl text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400`}
          />
        </Link>
      )}
      {valores.redes.instagram && (
        <Link href={valores.redes.instagram} target="_blank">
          <BsInstagram
            className={`mx-2 text-2xl text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400`}
          />
        </Link>
      )}
      {valores.redes.tikTok && (
        <Link href={valores.redes.tikTok} target="_blank">
          <BsTiktok
            className={`mx-2 text-2xl text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400`}
          />
        </Link>
      )}
      {valores.redes.youTube && (
        <Link href={valores.redes.youTube} target="_blank">
          <BsYoutube
            className={`mx-2 text-2xl text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400`}
          />
        </Link>
      )}
      {valores.redes.linkedIn && (
        <Link href={valores.redes.linkedIn} target="_blank">
          <BsLinkedin
            className={`mx-2 text-2xl text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400`}
          />
        </Link>
      )}
      {valores.redes.web && (
        <Link href={valores.redes.web} target="_blank">
          <TbWorldWww
            className={`mx-2 text-2xl text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400`}
          />
        </Link>
      )}
    </div>
  );
}

export default EnlacesIconEvento;
