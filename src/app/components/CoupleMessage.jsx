"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import MarriageCountdown from "../components/MarriageCountdown";
import ScratchText from "../components/ScratchText";
import "swiper/css";
import "swiper/css/effect-cards";

export default function CoupleMessage() {
  const [revealed, setRevealed] = useState(false);

  const carouselImages = [
    "/assets/aryan1.jpg",
    "/assets/aryan2.jpg",
    "/assets/aryan3.jpg",
    "/assets/aryan4.jpg",
    "/assets/aryan5.jpg",
    "/assets/aryan6.jpg",
    "/assets/aryan7.jpg",
  ];

  return (
    <>
      <h2 className="eb-garamond mt-20 md:mt-10 lg:mt-20 text-3xl md:text-3xl lg:text-[60px] text-[#AF630E] text-center">
        Our Little Star
      </h2>
      <div className="flex flex-col items-center">
        <img
          src="/assets/element4.png"
          alt="Decorative element"
          className="w-25 md:w-50 h-auto py-2 md:py-4 lg:py-8"
        />
      </div>
      <div className="mt-10 w-full max-w-full flex justify-center items-center overflow-hidden">
        <Swiper
          effect="cards"
          grabCursor={true}
          modules={[EffectCards]}
          centeredSlides={true}
          className="!w-[280px] !h-[380px] md:!w-[400px] md:!h-[500px] lg:!w-[450px] lg:!h-[540px]"
        >
          {carouselImages.map((image, index) => (
            <SwiperSlide
              key={index}
              className="!flex justify-center items-center !rounded-2xl overflow-hidden"
            >
              <img
                src={image}
                alt={`Little Star ${index + 1}`}
                className="w-full h-full object-cover object-top rounded-2xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex flex-col justify-center items-center mb-10 md:mb-10 mt-20">
        <h2 className="eb-garamond md:mt-10 lg:mt-20 text-3xl md:text-3xl lg:text-[60px] text-[#AF630E] text-center">
          With <br /> Love & Blessings
        </h2>
        <p className="eb-garamond text-[#8B4A00] text-sm md:text-xl lg:text-3xl mt-2 text-center md:w-400 px-4">
          Thank you for being part of our little one's special day.Your love and
          blessings make this Dhoti Ceremony even more memorable. We are truly
          grateful to celebrate these precious moments with you!
        </p>

        <img
          src="/assets/couple_bottom.webp"
          alt="Decorative element"
          className="w-full md:mt-20 mt-10 mb-20 md:mb-30"
        />

        <ScratchText onReveal={() => setRevealed(true)} />

        {revealed && (
          <div className="countdown-fade-in">
            <MarriageCountdown />
          </div>
        )}
      </div>
    </>
  );
}
