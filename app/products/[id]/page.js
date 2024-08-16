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

export default function ProductDetail(params) {
  const id = params.params.id;

  const product = products.find((product) => product.id === parseInt(id));

  return (
    <div className="flex flex-col items-center max-w-screen-md mx-auto px-4 py-8">
      <div className="text-center text-3xl font-bold text-black mt-4">
        {product.name}
      </div>
      <div className="mt-8 w-full flex flex-col items-center">
        <img
          loading="lazy"
          src={product.imageSrc}
          alt={product.name}
          className="object-contain w-full max-w-sm mb-6"
        />
        <div className="text-lg text-center mb-4">
          Price: <span className="font-bold">{product.price}</span>
        </div>
        <div className="flex justify-center">
          <button className="px-6 py-3 text-sm font-medium text-white bg-red-500 rounded-xl hover:bg-red-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
