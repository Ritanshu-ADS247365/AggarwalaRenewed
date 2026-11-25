import Link from "next/link";
import { site } from "@/lib/site";
import Image from "next/image";

export function LogoMark({ size = 54 }: { size?: number }) {
  return (
    <Image src={"/Assets/logo/logo.png"} alt="" width={size} height={size}/>
  );
}

export function Logo() {
  return (
    <Link href="/" className="brand" aria-label={`${site.name} home`}>
      <LogoMark />
      {site.name}
    </Link>
  );
}
