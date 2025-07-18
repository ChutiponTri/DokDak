"use client";

import { MenuIcon, MoonIcon, SunIcon, HandCoinsIcon, HomeIcon, DogIcon, InfoIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

function MobileNavbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex md:hidden items-center space-x-2">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="mr-2"
      >
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>

      <Sheet open={showMobileMenu} onOpenChange={setShowMobileMenu}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <MenuIcon className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px]">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col space-y-4 mt-6">
            <Button variant="ghost" className="flex items-center gap-3 justify-start" asChild>
              <Link href="/">
                <HomeIcon className="w-4 h-4" />
                หน้าแรก
              </Link>
            </Button>

            <>
              <Button variant="ghost" className="flex items-center gap-3 justify-start" asChild>
                <Link href={{
                  pathname: "/animals",
                  query: { mode: "donate" }
                }}>
                  <HandCoinsIcon className="w-4 h-4" />
                  บริจาค
                </Link>
              </Button>
              <Button variant="ghost" className="flex items-center gap-3 justify-start" asChild>
                <Link href={{
                  pathname: "/pickup",
                }}>
                  <DogIcon className="w-4 h-4" />
                  รับเลี้ยง
                </Link>
              </Button>
              <Button variant="ghost" className="flex items-center gap-3 justify-start" asChild>
                <Link href="/about">
                  <InfoIcon className="w-4 h-4" />
                  เกี่ยวกับเรา
                </Link>
              </Button>
            </>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNavbar;