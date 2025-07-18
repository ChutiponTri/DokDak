import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react"

const validModes = ["adopt", "donate"];
const validShipment = ["self", "delivery"];

function page({ searchParams }: { searchParams: Record<string, string | undefined> }) {
  const mode = searchParams.mode;
  if (!mode) return redirect("/about");
  
  const validMode = validModes.find((value) => value === mode);
  if (!validMode) return redirect("/about");

  const pickup = searchParams.pickup || "undefined";
  if (mode === "adopt") {
    const validShip = validShipment.find((value) => value === pickup);
    if (!validShip) return redirect("/about");
  }

  return (
    <div className="relative w-screen h-screen">
      <Image
        src={"/assets/all.jpg"}
        alt="All pets"
        fill
      />

      <div className="absolute top-80 left-28">
        <Link href={{
          pathname: "/profile",
          query: { mode: mode, name: "jew", pickup: pickup }
        }} className="rounded-none px-32 py-28 opacity-50 text-transparent hover:bg-slate-50"
        >
          Jews
        </Link>
      </div>

      <div className="absolute top-80 left-96 ml-20">
        <Link href={{
          pathname: "/profile",
          query: { mode: mode, name: "charcoal", pickup: pickup }
        }}
          className="rounded-none px-32 py-28 opacity-50 text-transparent hover:bg-slate-50"
        >
          chaq
        </Link>
      </div>

      <div className="absolute top-80 right-96 mr-16">
        <Link href={{
          pathname: "/profile",
          query: { mode: mode, name: "sombat", pickup: pickup }
        }}
          className="rounded-none px-32 py-28 opacity-50 text-transparent hover:bg-slate-50"
        >
          som
        </Link>
      </div>

      <div className="absolute top-80 right-28">
        <Link href={{
          pathname: "/profile",
          query: { mode: mode, name: "thong", pickup: pickup }
        }}
          className="rounded-none px-32 py-28 opacity-50 text-transparent hover:bg-slate-50"
        >
          tong
        </Link>
      </div>

      <div className="absolute bottom-36 left-28 ">
        <Link href={{
          pathname: "/profile",
          query: { mode: mode, name: "ngodngam", pickup: pickup }
        }}
          className="rounded-none px-32 py-28 opacity-50 text-transparent hover:bg-slate-50" 
        >
          nga
        </Link>
      </div>

      <div className="absolute bottom-36 left-96 ml-20">
        <Link href={{
          pathname: "/profile",
          query: { mode: mode, name: "laemkom", pickup: pickup }
        }}
          className="rounded-none px-36 py-28 opacity-50 text-transparent hover:bg-slate-50"
        >
          l
        </Link>
      </div>

      <div className="absolute bottom-36 right-96 mr-16">
        <Link href={{
          pathname: "/profile",
          query: { mode: mode, name: "eyor", pickup: pickup }
        }}
          className="rounded-none px-32 py-28 opacity-50 text-transparent hover:bg-slate-50"
        >
          eyor
        </Link>
      </div>

      <div className="absolute bottom-36 right-28">
        <Link href={{
          pathname: "/profile",
          query: { mode: mode, name: "judy", pickup: pickup }
        }}
          className="rounded-none px-32 py-28 opacity-50 text-transparent hover:bg-slate-50">
          judy
        </Link>
      </div>


    </div>
  )
}

export default page