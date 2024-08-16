import Footer from "@/components/Landing Page 1/Footer/Footer";
import ProductsHero from "@/components/Products/ProductsHero";
import ShopProduct from "@/components/Products/ShopProduct";
import React from "react";

export default function page() {
  return (
    <div>
      <ProductsHero />
      <ShopProduct />
      <Footer />
    </div>
  );
}
