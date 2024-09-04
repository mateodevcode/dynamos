import Link from "next/link";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTiktok,
  BsYoutube,
} from "react-icons/bs";
import { TbWorldWww } from "react-icons/tb";

const EnlacesIconTeam = ({ valores }) => {

  const valor = valores;
  return (
    <div className="team-icons flex flex-row justify-center items-center">
      {valor.redes.facebook && (
        <Link href={valor.redes.facebook} target="_blank">
          <BsFacebook
            className={`mx-2 text-2xl text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400`}
          />
        </Link>
      )}
      {valor.redes.instagram && (
        <Link href={valor.redes.instagram} target="_blank">
          <BsInstagram
            className={`mx-2 text-2xl text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400`}
          />
        </Link>
      )}
      {valor.redes.tiktok && (
        <Link href={valor.redes.tiktok} target="_blank">
          <BsTiktok
            className={`mx-2 text-2xl text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400`}
          />
        </Link>
      )}
      {valor.redes.youtube && (
        <Link href={valor.redes.youtube} target="_blank">
          <BsYoutube
            className={`mx-2 text-2xl text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400`}
          />
        </Link>
      )}
      {valor.redes.linkedin && (
        <Link href={valor.redes.linkedin} target="_blank">
          <BsLinkedin
            className={`mx-2 text-2xl text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400`}
          />
        </Link>
      )}
      {valor.redes.web && (
        <Link href={valor.redes.web} target="_blank">
          <TbWorldWww
            className={`mx-2 text-2xl text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400`}
          />
        </Link>
      )}
    </div>
  );
};



export default EnlacesIconTeam;

