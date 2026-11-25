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
    "/assets/image1.webp",
    "/assets/image2.webp",
    "/assets/image3.webp",
    "/assets/image4.webp",
  ];

  return (
    <>
      <h2 className="eb-garamond mt-20 md:mt-10 lg:mt-20 text-xl md:text-3xl lg:text-[60px] text-[#AF630E] text-center">
        Our Little Star
      </h2>
      <div className="flex flex-col items-center">
        <img
          src="/assets/element4.png"
          alt="Decorative element"
          
          className="w-25 md:w-50 h-auto py-2 md:py-4 lg:py-8"
        />
      </div>
      <div className="mt-20 flex justify-center items-center ">
        {/* <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {carouselImages.map((image, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <img
              src={image}
              alt={`Couple ${index + 1}`}
              className="w-full h-95 md:h-126 lg:h-135 object-contain lg:rounded-[60px]"
            />
          </SwiperSlide>
        ))}
      </Swiper> */}
      </div>

    <div className="flex flex-col justify-center items-center mb-10 md:mb-10">
          <h2 className="eb-garamond md:mt-10 lg:mt-20 text-xl md:text-3xl lg:text-[60px] text-[#AF630E] text-center">
        With <br/> Love & Blessings
      </h2>
       <p className="eb-garamond text-[#8B4A00] text-sm md:text-xl lg:text-3xl mt-2 text-center md:w-400 px-4">
              Thank you for being part of our little one's special day.Your love and blessings make this Dhoti Ceremony even more memorable. We are truly grateful to celebrate these precious moments with you!
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
