import ContactHero from "@/components/Landing Page 1/Contact/ContactHero";
import SendMessages from "@/components/Landing Page 1/Contact/SendMessages";
import Footer from "@/components/Landing Page 1/Footer/Footer";
import Maps from "@/components/Tools/Maps";
import React from "react";

export default function page() {
  return (
    <div>
      <ContactHero />
      <SendMessages />
      <Maps />
      <Footer />
    </div>
  );
}
