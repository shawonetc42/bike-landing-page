import React from "react";

export default function ProductsHero() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[420px] px-5 text-white overflow-hidden">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/59a86cdb274413dc2240e3fcb71dcd6a85b7b127a2b554cbc10850d23fbc6e34?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/59a86cdb274413dc2240e3fcb71dcd6a85b7b127a2b554cbc10850d23fbc6e34?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/59a86cdb274413dc2240e3fcb71dcd6a85b7b127a2b554cbc10850d23fbc6e34?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/59a86cdb274413dc2240e3fcb71dcd6a85b7b127a2b554cbc10850d23fbc6e34?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/59a86cdb274413dc2240e3fcb71dcd6a85b7b127a2b554cbc10850d23fbc6e34?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/59a86cdb274413dc2240e3fcb71dcd6a85b7b127a2b554cbc10850d23fbc6e34?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/59a86cdb274413dc2240e3fcb71dcd6a85b7b127a2b554cbc10850d23fbc6e34?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=2000 2000w"
        className="absolute inset-0 w-full h-full object-cover "
        alt="Background"
      />
      <div className="relative z-10 bg-black bg-opacity-50 p-10 rounded-lg text-center max-w-lg mx-auto">
        <h1 className="text-4xl font-bold tracking-widest mb-4 animate-fadeIn">
          PRODUCTS
        </h1>
        <div className="flex items-center justify-center text-sm space-x-3 text-gray-300 animate-fadeInSlow">
          <span>Home</span>
          <span className="flex items-center space-x-1">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae2025bcb5e416abd080a22d304fccc8f985524d696653ed7cadf1a59f43dbcf?placeholderIfAbsent=true&apiKey=4347c25cbbc84e04bdff1e95b941b3c7"
              className="w-3 h-3 object-contain "
              alt="Arrow"
            />
            <span>Product</span>
          </span>
        </div>
      </div>
    </div>
  );
}
