import Image from "next/image";
import Link from "next/link";
import LogoImg from "@/../public/logos/logo-base-256x256.png";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image src={LogoImg} alt="logo" width={36} height={36} />
    </Link>
  );
};

export default Logo;
