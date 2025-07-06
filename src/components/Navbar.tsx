import Link from "next/link";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import Image from "next/image";

async function Navbar() {

  return (
    <nav className="sticky top-0 w-full border-b bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-primary font-mono tracking-wider">
            <Image 
              src={"/assets/favicon.png"}
              width={24}
              height={24}
              alt="favicon"
              className="inline mr-2"
            />
            <span>Homeless Dok-Dak</span>
            </Link>
          </div>

          <DesktopNavbar />
          <MobileNavbar />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;