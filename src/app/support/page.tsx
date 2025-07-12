import Image from "next/image"
import React from "react"

function page() {
  return (
    <div className="h-full">
      <Image 
        src="/assets/thank.png"
        alt="thank you"
        fill
      />
    </div>
  )
}

export default page