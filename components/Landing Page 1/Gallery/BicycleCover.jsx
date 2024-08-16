import React from "react";

export default function BicycleCover() {
  return (
    <div className="flex overflow-hidden relative flex-col text-white min-h-[522px] mt-3 ">
      <img
        loading="lazy"
        srcSet="/bg/Background1.png"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col items-start px-20 pt-32 w-full  max-md:px-5 max-md:pt-24 max-md:max-w-full">
        <div className="flex flex-col items-start max-w-full w-[662px]">
          <div className="text-sm font-medium leading-none uppercase tracking-[2px]">
            Mountain Biking
          </div>
          <div className="mt-8 text-4xl font-bold tracking-tighter leading-10 max-md:max-w-full">
            A Bicycle at Helps You to Pass
            <br />
            all the Hurdles
          </div>
          <div className="mt-9 text-base leading-6 text-neutral-200 max-md:max-w-full">
            Inceptos id aliquam phasellus eget ex maximus placerat ligula
            pulvinar.
            <br />
            Ante conubia feugiat hendrerit magna ac volutpat.
          </div>
          <div className="px-6 pt-3.5 pb-8 mt-6 text-sm font-semibold tracking-wide leading-tight text-center uppercase bg-orange-300 text-slate-900 max-md:px-5">
            Discover More
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ffbc61d4d4004150c45be2b7962eb88045cd4a94c054c9c1da9d538e7dbe779b?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7"
            className="object-contain self-end mt-28 w-11 aspect-[2.1] max-md:mt-10"
          />
        </div>
      </div>
    </div>
  );
}
