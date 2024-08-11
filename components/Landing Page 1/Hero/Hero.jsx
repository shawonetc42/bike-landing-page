"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

// next images
import bike from "@/public/Riding-Assets/black-motorcycle.png";
import Electricbike from "@/public/Riding-Assets/Electric Bike.png";
import bikewhite from "@/public/Riding-Assets/bike white 1.png";
import Hours from "./Hours";

const Hero = () => {
  return (
    <main
      style={{
        background:
          "linear-gradient(to right, #d7eff9, #daf0fa, #ddf1fa, #dff2fb, #e2f3fb)",
        minHeight: "100vh",
      }}
    >
      <img
        src="/1.png"
        alt="photo"
        className="absolute -top-20 right-0 w-[1000px] hidden md:block"
      />
      <div className="container mx-auto px-3 md:px-0 ">
        <div className="w-full h-screen mt-14">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            loop={true}
            className="w-full h-full"
          >
            <SwiperSlide>
              <div className="flex flex-col-reverse md:flex-row justify-between items-center md:mx-52">
                <div className="text-center md:text-left ">
                  <p className="font-bold text-base">Decoding the Essence of</p>
                  <h2 className="caveat-regular text-5xl my-3 uppercase italic tracking-widest	">
                    Riding
                  </h2>
                  <p className="text-[#42454a] text-sm">
                    Simple and sleek design <br /> with users in mind.
                  </p>
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
                <div>
                  <Image
                    src={bike}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                  />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="flex flex-col-reverse md:flex-row justify-between items-center md:mx-52">
                <div className="text-center md:text-left ">
                  <p className="font-bold text-base">let’s ride the</p>
                  <h2 className="caveat-regular text-5xl my-3 uppercase italic tracking-widest	">
                    future
                  </h2>
                  <p className="text-[#42454a] text-sm">
                    simple and slick design <br /> with users in mind.
                  </p>
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
                <div>
                  <Image
                    src={Electricbike}
                    width={650}
                    height={650}
                    alt="Picture of the author"
                  />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="flex flex-col-reverse md:flex-row justify-between items-center md:mx-52">
                <div className="text-center md:text-left ">
                  <p className="font-bold text-base">OVERVIEW</p>
                  {/* <h2 className="caveat-regular text-5xl my-3 uppercase italic tracking-widest	">
                    Riding
                  </h2> */}
                  <p className="text-[#42454a] text-sm">
                    The Singer - Williams DLS Goodwood is the <br /> ultimate
                    carbon fiber vision of a 1990 <br /> Porsche 964 made by
                    restorers at Singer <br /> Vehicle Design, partnering with
                    the racing <br /> firm Williams Advanced Engineering.
                  </p>
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
                <div>
                  <Image
                    src={bikewhite}
                    width={600}
                    height={600}
                    alt="Picture of the author"
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className=" -mt-52 md:-mt-80">
          <Hours />
        </div>
      </div>
    </main>
  );
};

export default Hero;
