import { HandCoinsIcon, HomeIcon, DogIcon, InfoIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ModeToggle from "./ModeToggle";

async function DesktopNavbar() {
  return (
    <div className="hidden md:flex items-center space-x-4">
      <ModeToggle />

      <Button variant="ghost" className="flex items-center gap-2" asChild>
        <Link href="/">
          <HomeIcon className="w-4 h-4" />
          <span className="hidden lg:inline">หน้าแรก</span>
        </Link>
      </Button>

      <>
        <Button variant="ghost" className="flex items-center gap-2" asChild>
          <Link href={{
            pathname: "/animals",
            query: { mode: "donate" }
          }}
          >
            <HandCoinsIcon className="w-4 h-4" />
            <span className="hidden lg:inline">บริจาค</span>
          </Link>
        </Button>
        <Button variant="ghost" className="flex items-center gap-2" asChild>
          <Link href={{
            pathname: "/animals",
            query: { mode: "adopt" }
          }}>
            <DogIcon className="w-4 h-4" />
            <span className="hidden lg:inline">รับเลี้ยง</span>
          </Link>
        </Button>
        <Button variant="ghost" className="flex items-center gap-2" asChild>
          <Link href="/about">
            <InfoIcon className="w-4 h-4" />
            <span className="hidden lg:inline">เกี่ยวกับเรา</span>
          </Link>
        </Button>
      </>
    </div>
  );
}
export default DesktopNavbar;