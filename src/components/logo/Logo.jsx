import Image from "next/image";
import Link from "next/link";
import { logo } from "@/data/navbar";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        className={logo.className}
        src={logo.src}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
      />
    </Link>
  );
};

export default Logo;
