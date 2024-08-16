import Image from "next/image";
import React from "react";

export default function ContactHero() {
  return (
    <div className="flex overflow-hidden relative flex-col pt-16 pl-20 min-h-[300px] max-md:pl-5">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d58944e77ee01d041da078477b9334135040b30502837be7726bf189d7a5ea74?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d58944e77ee01d041da078477b9334135040b30502837be7726bf189d7a5ea74?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d58944e77ee01d041da078477b9334135040b30502837be7726bf189d7a5ea74?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d58944e77ee01d041da078477b9334135040b30502837be7726bf189d7a5ea74?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d58944e77ee01d041da078477b9334135040b30502837be7726bf189d7a5ea74?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d58944e77ee01d041da078477b9334135040b30502837be7726bf189d7a5ea74?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d58944e77ee01d041da078477b9334135040b30502837be7726bf189d7a5ea74?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d58944e77ee01d041da078477b9334135040b30502837be7726bf189d7a5ea74?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7"
        className="object-cover absolute inset-0 size-full"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f71c49466bb56ecc1c8b6fe414fe83c6f02e7aca7a69cd19fdf5253c0f298d0f?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7"
        className="object-contain aspect-[1.94] w-[68px]"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9564989a6d4b3c3cbaea14f988843003caa3fc73b77fe5070816640f96aae5e7?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7"
        className="object-contain z-10 self-center mt-0 ml-80 aspect-[1.36] w-[65px]"
      />
      <div className="flex relative z-10 flex-col ml-40 max-w-full w-[324px] max-md:ml-2.5">
        <div className="text-4xl font-semibold leading-tight text-slate-900">
          Contact With Us
        </div>
        <div className="flex items-center gap-3 self-start mt-7 text-base leading-loose whitespace-nowrap">
          <div className="grow text-indigo-950">Home</div>
          <div className="font-black leading-none text-slate-500">
            <Image
              src="/icons/arrow-right.svg"
              width={5}
              height={5}
              alt="icons"
            />
          </div>
          <div className="text-red-500">Contact</div>
        </div>
      </div>
    </div>
  );
}
