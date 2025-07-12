import DonatePackage from "@/components/DonatePackage";
import { redirect } from "next/navigation";
import React from "react"

const validNames = ["jew", "charcoal", "sombat", "thong", "ngodngam", "laemkom", "eyor", "judy"];
const validModes = ["adopt", "donate"];
const validShipment = ["self", "delivery"];
const positions = {
  jew: "right-28 bottom-28 mr-3 mb-1",
  charcoal: "right-28 bottom-36 mr-3 mb-1",
  sombat: "right-24 bottom-28 mr-3",
  thong: "right-24 bottom-32",
  ngodngam: "right-24 bottom-32 mr-8 mb-1",
  laemkom: "right-24 bottom-28 mr-2 mb-1",
  eyor: "right-24 bottom-32 mr-11 mb-1",
  judy: "right-24 bottom-24 mr-7 mb-2",
}

function page({ searchParams }: { searchParams: Record<string, string | undefined> }) {
  const name = searchParams.name;
  const mode = searchParams.mode;
  if (!name || !mode) return redirect("/about");

  const validMode = validModes.find((value) => value === mode);
  const validName = validNames.find((value) => value === name);

  if (!validName || !validMode) return redirect("/about");

  const pickup = searchParams.pickup;
  if (!pickup) return redirect("/about");
  if (mode === "adopt") {
    const validShip = validShipment.find((value) => value === pickup);
    if (!validShip) return redirect("/about");
  }

  const positionEntry = Object.entries(positions).find(([key]) => key === name);
  const position = positionEntry?.[1] ?? "bottom-24 left-24";

  return (
    <DonatePackage position={position} name={name} mode={mode} pickup={pickup} />
  )
}

export default page