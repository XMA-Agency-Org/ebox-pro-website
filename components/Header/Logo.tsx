import Image from "next/image";
import Link from "next/link";
import LogoImage from "@/public/Ebox - Final Logo/ebox - final logo -11.svg";
import LogoDark from "@/public/Ebox - Final Logo/ebox - final logo -08.svg";

interface LogoProps {
  variant?: "light" | "dark";
  onClick?: () => void;
}

export default function Logo({ variant = "light", onClick }: LogoProps) {
  const logoSrc = variant === "light" ? LogoImage : LogoDark;

  return (
    <Link href="/" className="shrink-0" onClick={onClick}>
      <Image
        src={logoSrc}
        alt="Ebox Pro"
        width={120}
        height={40}
        className="md:h-20 h-16 w-auto"
      />
    </Link>
  );
}
