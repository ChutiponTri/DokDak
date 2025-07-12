import Payment from "@/components/Payment";
import { redirect } from "next/navigation";
import React from "react"

const validNames = {
  "jew": "จิ๋ว", "charcoal": "ชาโค", "sombat": "สมบัติ", "thong": "ทองดี",
  "ngodngam": "งดงาม", "laemkom": "แหลมคม", "eyor": "อียอ", "judy": "จูดี้"
};
const validModes = { "adopt": "รับเลี้ยง", "donate": "บริจาคให้" };
const validPack = ["university", "adult", "vip", "custom"];
const validShipment = ["self", "delivery"];

export default function page({ searchParams }: { searchParams: Record<string, string | undefined> }) {
  const name = searchParams.name;
  const mode = searchParams.mode;
  const pack = searchParams.package;
  const price = searchParams.price;

  if (!name || !mode || !pack || !price) return redirect("/");

  let thaiName: string | null = null;
  if (typeof name === "string" && name in validNames) {
    thaiName = validNames[name as keyof typeof validNames];
  }

  let isValidMode: string | null = null;
  if (typeof mode === "string" && mode in validModes) {
    isValidMode = validModes[mode as keyof typeof validModes];
  }
  const isValidPack = validPack.find((value) => (value === pack.toLowerCase()));

  if (!thaiName || !isValidMode || !isValidPack) return redirect("/");

  const pickup = searchParams.pickup;
  if (!pickup) return redirect("/about");
  if (mode === "adopt") {
    const validShip = validShipment.find((value) => value === pickup);
    if (!validShip) return redirect("/about");
  }

  return (
    <div className="h-screen bg-pink-200">
      <Payment name={thaiName} mode={isValidMode} pack={pack} price={price} pickup={pickup} />
    </div>
  )
}