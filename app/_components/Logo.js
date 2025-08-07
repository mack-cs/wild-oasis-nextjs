import Link from "next/link";
import logo from "@/public/logo.png";
import Image from "next/image";
function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      {/* <Image src="/logo.png" height="60" width="60" alt="Driftwood Lodge logo" /> */}
      <Image src={logo} height="60" width="60" alt="Driftwood Lodge logo" />
      <span className="text-xl font-semibold text-primary-100">
        Driftwood Lodge
      </span>
    </Link>
  );
}

export default Logo;
