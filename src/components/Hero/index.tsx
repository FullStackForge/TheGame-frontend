import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      {/* Wolf image */}
      <Image
        src="/Homepage/lion.svg"
        alt="Wolf"
        width={300}
        height={300}
        className="absolute left-0 bottom-8 z-10"
      />
      {/* Blue circular pattern */}
      <Image
        src="/Homepage/knot.svg"
        alt="Blue Pattern"
        width={300}
        height={300}
        className="absolute right-0 bottom-8"
      />
      <div className="container relative">
        <div className="container flex flex-col mt-28">
          <div className="absolute inset-0 z-0">
            <Image
              src="/Homepage/bggrid.svg"
              alt="Grid background"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="opacity-100"
            />
          </div>
          <p className="text-5xl md:text-8xl font-bold text-white lg:ms-56 z-20">
            Welcome to
          </p>
          <div className="md:me-96  mx-auto z-20 glow-text">
            <span className="instrumental-sans-font font-bold text-5xl md:text-8xl text-white">
              {" "}
              The
            </span>
            <span className="text-black jaro-font tracking-wider text-5xl md:text-8xl z-20">
              Game
            </span>
          </div>
        </div>

        <div className="btn w-full flex justify-center mt-36 relative">
          <Button className="jaro-font shadow-lg bg-[#FF0000] text-4xl px-28 rounded-lg py-10 hover:bg-[#ff8000] hover:scale-110 transition-all duration-300 ease-in-out z-20">
            Lets Begin ➟
          </Button>
          {/* Game controller image */}
          <Image
            src="/Homepage/controller.svg"
            alt="Game Controller"
            width={350}
            height={350}
            className="absolute right-52 top-0 transform -translate-y-1/2 z-10"
          />
        </div>
      </div>
    </>
  );
}
