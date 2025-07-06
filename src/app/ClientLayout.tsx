"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div className="min-h-screen">
      {!isHome && <Navbar />}
      {!isHome ? (
        <main className="py-0">
          <div className="max-w-screen">{children}</div>
        </main>
      ) : (
        children
      )}
    </div>
  );
}
