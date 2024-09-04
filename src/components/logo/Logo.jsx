import Image from "next/image";
import Link from "next/link";
import { logo } from "@/data/navbar";

const Logo = () => {
  return (
    <Link href={"/"} className="w-8 h-8">
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
