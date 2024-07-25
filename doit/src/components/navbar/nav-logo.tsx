"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import smallLogo from "./logos/Size=Small.png";
import largeLogo from "./logos/Size=Large.png";

export default function NavLogo() {
  const router = useRouter();
  const handleClick = () => {
    router.replace("/");
    window.location.reload();
  };
  //
  return (
    <div className="content-center cursor-pointer">
      <Image
        src={smallLogo}
        alt="small_logo"
        className="block tablet:hidden desktop:hidden"
        onClick={handleClick}
      />
      <Image
        src={largeLogo}
        alt="large_logo"
        className="hidden tablet:block desktop:block"
        onClick={handleClick}
      />
    </div>
  );
}