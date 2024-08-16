import React from "react";

export default function HeroGallery() {
  return (
    <div className="flex overflow-hidden relative flex-col min-h-[436px]">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/44ee37d5f39aa121ce460ff4310de39d9d3d935c399d2868e40d02abb87ebec1?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/44ee37d5f39aa121ce460ff4310de39d9d3d935c399d2868e40d02abb87ebec1?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/44ee37d5f39aa121ce460ff4310de39d9d3d935c399d2868e40d02abb87ebec1?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/44ee37d5f39aa121ce460ff4310de39d9d3d935c399d2868e40d02abb87ebec1?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/44ee37d5f39aa121ce460ff4310de39d9d3d935c399d2868e40d02abb87ebec1?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/44ee37d5f39aa121ce460ff4310de39d9d3d935c399d2868e40d02abb87ebec1?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/44ee37d5f39aa121ce460ff4310de39d9d3d935c399d2868e40d02abb87ebec1?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/44ee37d5f39aa121ce460ff4310de39d9d3d935c399d2868e40d02abb87ebec1?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col pt-40 w-full max-md:pt-24 max-md:max-w-full">
        <div className="flex flex-col ml-96 max-w-full w-[249px] max-md:ml-2.5">
          <div className="text-5xl font-bold tracking-tighter leading-none text-white max-md:text-4xl">
            Our Gallery
          </div>
          <div className="flex gap-2.5 items-center self-start mt-5 text-sm font-semibold tracking-wide leading-tight uppercase whitespace-nowrap text-neutral-200">
            <div className="grow self-stretch my-auto">Home</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/530fa5ed7826ce326b931cce76953b9ab8245f3ce16d9665ad21427073e19f4d?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7"
              className="object-contain shrink-0 self-stretch w-5 aspect-[0.83]"
            />
            <div className="self-stretch my-auto">Gallery</div>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9fae224818194616e8f316007032bb59bec209f28f538596b325ec5dd23cebf?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7"
          className="object-contain mt-24 w-full aspect-[21.74] max-md:mt-10 max-md:max-w-full"
        />
      </div>
    </div>
  );
}
