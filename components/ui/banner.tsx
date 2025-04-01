"use client";

import Image from "next/image";

export const Banner = () => {
  return (
    <div className="relative -mb-8 mt-8 flex flex-col items-center justify-between sm:-mb-12 sm:mt-12">
      <div className="relative flex flex-col items-center justify-center">
        <div className="absolute inset-0 top-24 z-10 bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(17,17,17,1)49%,rgba(17,17,17,1)65%)] blur-sm sm:top-36"></div>
        <Image
          src="/logo.svg"
          width={300}
          height={300}
          alt="Operate Fun logo outline"
          className="relative z-0 size-[200px] sm:size-[250px] md:size-[300px]"
          priority
        />
      </div>
      <div className="relative -top-20 z-20 -mt-2 flex flex-col items-center justify-center sm:-top-24 md:-top-32">
        <div className="relative z-0 bg-[url(/grain.png),linear-gradient(rgba(230,232,239,1),rgba(219,221,228,1)32%,rgba(51,51,51,1))] bg-cover bg-clip-text bg-[position:50%_0_0] bg-no-repeat text-5xl font-bold text-transparent sm:text-6xl md:text-7xl lg:text-8xl">
          Operate.Fun
        </div>
        <div className="bg-[linear-gradient(rgba(0,0,0,0),rgba(217,217,217,1))] bg-clip-text text-center text-base font-medium text-transparent sm:text-lg md:text-xl">
          Operators For Everyone.
        </div>
      </div>
    </div>
  );
};
