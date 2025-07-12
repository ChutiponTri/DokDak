import Image from "next/image"
import Link from "next/link"
import React from "react"

function page() {
  return (
    <div className="h-full">
      <Link href={"/"}>
        <Image
          src="/assets/thank.png"
          alt="thank you"
          fill
        />
      </Link>
    </div>
  )
}

export default page