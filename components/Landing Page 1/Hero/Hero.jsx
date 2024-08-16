import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import bg from "@/public/Riding-Assets/hero-bg.png";
import bike from "@/public/Riding-Assets/black-motorcycle.png";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to update state based on window width
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slidesData = [
    {
      title: "Slide 1",
      description: "Description for slide 1",
      specs: [
        { title: "349 CC", subtitle: "ENGINE" },
        { title: "13 Ltr", subtitle: "FUEL CAPACITY" },
        { title: "5 speed", subtitle: "GEARS" },
        { title: "6100 rpm", subtitle: "MAX POWER" },
      ],
      bgImage: bg.src,
      bikeImage: bike.src,
    },
    {
      title: "Slide 2",
      description: "Description for slide 2",
      specs: [
        { title: "300 CC", subtitle: "ENGINE" },
        { title: "10 Ltr", subtitle: "FUEL CAPACITY" },
        { title: "6 speed", subtitle: "GEARS" },
        { title: "6500 rpm", subtitle: "MAX POWER" },
      ],
      bgImage: bg.src,
      bikeImage: bike.src,
    },
    {
      title: "Slide 3",
      description: "Description for slide 3",
      specs: [
        { title: "400 CC", subtitle: "ENGINE" },
        { title: "15 Ltr", subtitle: "FUEL CAPACITY" },
        { title: "4 speed", subtitle: "GEARS" },
        { title: "7000 rpm", subtitle: "MAX POWER" },
      ],
      bgImage: bg.src,
      bikeImage: bike.src,
    },
  ];

  const SlideContent = ({ slide }) => (
    <main className="bg-[#d3edf9] h-screen">
      <div
        className="w-full h-full absolute top-16 md:top-0 right-0 bg-cover bg-center"
        style={{
          backgroundImage: !isMobile ? `url(${slide.bgImage})` : "none",
          backgroundSize: "50%",
          backgroundPosition: "top right",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-3 lg:px-0 relative">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center relative md:mx-20">
            <div className="text-center md:text-left mt-5 md:mt-0">
              <p className="font-bold text-base">Decoding the Essence of</p>
              <h2 className="caveat-regular text-5xl my-3 uppercase italic tracking-widest">
                {slide.title}
              </h2>
              <p className="text-[#42454a] text-sm">{slide.description}</p>
              <button
                className="mt-5 px-3 py-2 rounded-md text-sm text-white"
                style={{
                  background:
                    "linear-gradient(to right top, #a88050, #845a43, #5b3b34, #302020, #000000)",
                }}
              >
                Pre Order
              </button>
            </div>

            <div className="md:mt-0">
              <div>
                <div className="absolute z-40 mt-10 md:mt-32 ml-52 md:ml-96">
                  <h2 className="text-white font-bold mt-4 text-4xl md:text-6xl">
                    X-ES
                  </h2>
                </div>
                <figure className="relative z-10">
                  <Image
                    src={slide.bikeImage}
                    width={600}
                    height={600}
                    alt="Hero Bike"
                  />
                </figure>
              </div>
              <div className="flex justify-center items-center mt-40 mb-20 ml-0 md:-ml-[200px] lg:-ml-[700px]">
                <div className=" border-[3px] border-[#35A7A0] px-4 py-2 md:py-5 rounded-lg shadow-md">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {slide.specs.map((item, index) => (
                      <div key={index} className="text-center">
                        <h2 className="font-bold text-lg md:text-xl text-gray-800">
                          {item.title}
                        </h2>
                        <p className="font-semibold text-xs md:text-sm uppercase text-gray-600 mt-1">
                          {item.subtitle}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );

  return (
    <main>
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="${className} bg-gray-400"></span>`,
          }}
          navigation={false} // Navigation off
          modules={[Autoplay, Pagination]}
          loop={true}
          className="hero-swiper"
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <SlideContent slide={slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
};

export default Hero;
