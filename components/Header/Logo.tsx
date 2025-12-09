import Image from "next/image";
import Link from "next/link";
import LogoImage from "@/public/Ebox - Final Logo/ebox pro logistics white.png";
import LogoDark from "@/public/Ebox - Final Logo/ebox pro logistics blue.png";

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
        width={150}
        height={50}
        className="h-14 w-auto"
      />
    </Link>
  );
}
