import Image from "next/image"
import Link from "next/link"
import React from "react"

function page() {
  const mode = "adopt";
  return (
    <div className="relative h-screen">
      <Image 
        src="/assets/pickup.jpg"
        alt="pickup"
        fill
      />

      <div className="absolute top-80 left-24">
        <Link href={{
          pathname: "/animals",
          query: { mode: mode, pickup: "self" }
        }} className="rounded-full px-60 py-36 opacity-50 text-transparent hover:bg-slate-50"
        >
          Jews
        </Link>
      </div>

      <div className="absolute top-80 right-14 ml-20">
        <Link href={{
          pathname: "/animals",
          query: { mode: mode, pickup: "delivery" }
        }}
          className="rounded-full px-60 py-36 opacity-50 text-transparent hover:bg-slate-50"
        >
          chaq
        </Link>
      </div>
    </div>
  )
}

export default page