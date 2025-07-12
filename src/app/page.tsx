import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <div>
      <div className="relative w-screen h-screen">
        <Image
          src="/assets/intro.jpg"
          alt="Full Background"
          fill
          className="object-cover"
          priority
        />
        <Link
          href="/about"
          className="absolute bottom-48 right-52 bg-black bg-opacity-0 px-24 py-16 pb-8 mt-8 rounded-full hover:bg-opacity-10 transition text-white text-opacity-0"
        >
          Learn More
        </Link>
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
            pathname: "/pickup",
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
  );
}
