import Image from "next/image"
import Link from "next/link"
import React from "react"

function page() {
  return (
    <div>
      <div className="relative w-screen h-screen">
        <Image
          src={"/assets/about.jpg"}
          fill
          alt="cat"
        />
      </div>
      <div className="grid grid-cols-2 min-h-screen">
        <div className="relative h-[750px] hover:scale-110">
          <Link href={{
            pathname: "/animals",
            query: { mode: "donate" }
          }}>
            <Image
              src="/assets/choice1.jpg"
              alt="choice1"
              fill
              className="object-cover"
            />
          </Link>
        </div>
        <div className="relative h-[750px] hover:scale-110">
          <Link href={{
            pathname: "/animals",
            query: { mode: "adopt" }
          }}>
            <Image
              src="/assets/choice2.jpg"
              alt="choice2"
              fill
              className="object-cover"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default page