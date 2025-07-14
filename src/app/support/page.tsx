import { redirect } from "next/navigation";
import Image from "next/image"
import Link from "next/link"
import React from "react"

const assets = { "donate": "thank.png", "delivery": "adopt-deli.jpg", "self": "adopt-self.jpg" }

function page({ searchParams }: { searchParams: Record<string, string | undefined> }) {
  const mode = searchParams.mode;
  const pickup = searchParams.pickup;

  let asset: string | undefined;

  if (mode === "บริจาคให้") {
    asset = assets.donate;
  } else if (mode === "รับเลี้ยง") {
    if (pickup === "delivery") {
      asset = assets.delivery;
    } else if (pickup === "self") {
      asset = assets.self;
    }
  }

  if (!asset) return redirect("/");

  return (
    <div className="h-full">
      <Link href={"/"}>
        <Image
          src={`/assets/${asset}`}
          alt="thank you"
          fill
        />
      </Link>
    </div>
  )
}

export default page