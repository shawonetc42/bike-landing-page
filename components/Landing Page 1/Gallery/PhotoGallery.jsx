import React from "react";

export default function PhotoGallery() {
  // Sample image data
  const images = [
    {
      srcSet:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c59e1d6e38fa3f40d6b77f1365946059fd4821638262c459844217fd986a24fb?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7",
      alt: "Image 1",
      width: 298,
    },
    {
      srcSet:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/28e2ff684ba8118743dd953bbda434b021e546d015862d4705a87490f33bcfd6?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7",
      alt: "Image 2",
      width: 297,
    },
    {
      srcSet:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6f037e9c6ae9bd63b7bc788cd98091ba814fe93938b2e94a2dcfffdaf8cc742b?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7",
      alt: "Image 3",
      width: 298,
    },
    {
      srcSet:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c73625fc82842cd4b873b7e14aeb6d5696b11d5d73d379aa323a04f5c5f6acb7?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7",
      alt: "Image 4",
      width: 298,
    },
    {
      srcSet:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c73625fc82842cd4b873b7e14aeb6d5696b11d5d73d379aa323a04f5c5f6acb7?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7",
      alt: "Image 5",
      width: 298,
    },
    {
      srcSet:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6f037e9c6ae9bd63b7bc788cd98091ba814fe93938b2e94a2dcfffdaf8cc742b?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7",
      alt: "Image 6",
      width: 298,
    },
    {
      srcSet:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c59e1d6e38fa3f40d6b77f1365946059fd4821638262c459844217fd986a24fb?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7",
      alt: "Image 7",
      width: 298,
    },
    {
      srcSet:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/28e2ff684ba8118743dd953bbda434b021e546d015862d4705a87490f33bcfd6?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7",
      alt: "Image 8",
      width: 297,
    },
  ];

  return (
    <div className="flex justify-center max-w-screen-lg mx-auto px-3 mt-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative group">
            <img
              loading="lazy"
              srcSet={image.srcSet}
              alt={image.alt}
              className="object-contain w-full h-auto aspect-[0.99] transition-transform duration-300 ease-in-out grayscale group-hover:grayscale-0"
              style={{ width: `${image.width}px` }}
            />
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-50"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
