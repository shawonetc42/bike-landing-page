import Link from "next/link";
import React from "react";

const products = [
  {
    id: 1,
    name: "Gazelle Arroyo C7 HMB Elite",
    price: "$3,399",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1178d75ed8a35afe5221c068bfcd2686e9ad242f5876a593fb301e9ef76d255c?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7",
  },
  {
    id: 2,
    name: "Gazelle Medeo T9 HMB",
    price: "$3,799",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6f1206bfc977f9ef711f04cd9638a3dff8da245e9364fee26de0c9bb9e70c034?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7",
  },
  {
    id: 3,
    name: "Gazelle Tour Populair",
    price: "$1,499",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e417bbc4db9b2fc0c8606569dc462dbc07f6195c492b9d57d16269b3a26bb02c?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7",
  },
];
export default function ShopProduct() {
  return (
    <div className="flex flex-col max-w-screen-lg mx-auto px-4 py-8">
      <div className="text-center text-5xl font-bold text-black mt-4 max-md:text-4xl">
        Explore eBikes
      </div>
      <div className="mt-10 w-full max-md:mt-8">
        <div className="flex gap-8 max-md:flex-col">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col w-[33%] max-md:w-full bg-neutral-100 rounded-[48px] p-6 shadow-lg transition-transform transform hover:scale-105 max-md:mt-8"
            >
              <Link href={`/products/${product.id}`} key={index}>
                <div className="text-xl font-medium text-black mb-2 text-center">
                  {product.name}
                </div>
                <div className="text-lg text-center mb-4">
                  From<span className="font-bold"> {product.price}</span>
                </div>
                <img
                  loading="lazy"
                  src={product.imageSrc}
                  alt={product.name}
                  className="object-contain w-full aspect-[1.25] mb-6"
                />
                <div className="flex justify-center">
                  <button className="flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-red-500 rounded-xl hover:bg-red-600">
                    View eBikes
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb45c0ba5c879f8e431c01b2bb80b0fe53c1fac309807716d6d1c4087a8b938f?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7"
                      alt="arrow"
                      className="object-contain w-3"
                    />
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
