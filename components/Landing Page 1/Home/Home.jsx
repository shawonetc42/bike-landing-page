"use client";
import React, { useState, useEffect } from "react";

// react icons
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

// components
import Menubar from "../Menubar/Menubar";
import Hero from "../Hero/Hero";
import Position from "../Position/Position";
import DutchDesign from "../Dutch-Design/DutchDesign";
import FindRide from "../FindRide/FindRide";
import WaterMark from "../WaterMark/WaterMark";
import PopularMakes from "../PopularMakes/PopularMakes";
import OurTeam from "../OurTeam/OurTeam";
import Footer from "../Footer/Footer";

const Home = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsAtTop(scrollTop === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTopOrBottom = () => {
    if (isAtTop) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <main>
      <div className="">
        <div>
          <Menubar />
          <Hero />
          <Position />
          <DutchDesign />
          <FindRide />
          <WaterMark />
          <PopularMakes />
          <OurTeam />
          <Footer />
        </div>

        <div className="fixed bottom-5 right-5 z-50">
          <button
            onClick={scrollToTopOrBottom}
            className="bg-white p-3 rounded-full shadow-xl"
          >
            {isAtTop ? <FaArrowDown /> : <FaArrowUp />}
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;
