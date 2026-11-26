"use client";
import Image from "next/image";
import { useEffect, useState, useRef, useMemo } from "react";
import Reception from "./components/Reception";
import RoseHeroTemp from "./components/RoseHeroTemp";
import CoupleMessage from "./components/CoupleMessage";
import IntroVideo from "./components/IntroVideo";
export default function Home() {
  const audioRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);

  const startMusic = async () => {
    const audio = audioRef.current;
    if (!audio || started) return;

    try {
      audio.volume = 0.3;
      await audio.play();
      setStarted(true);
      setPlaying(true);
    } catch {}
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
      } catch {}
    }
  };

  // First user interaction (mobile + desktop)
  useEffect(() => {
    const handler = () => startMusic();

    window.addEventListener("click", handler);
    window.addEventListener("touchstart", handler);

    return () => {
      window.removeEventListener("click", handler);
      window.removeEventListener("touchstart", handler);
    };
  }, [started]);

  return (
    <>
      <button
        onClick={() => {
          started ? toggleMusic() : startMusic();
        }}
        className="fixed bottom-4 right-4 z-50 bg-[#AF6327] text-white px-3 py-2 rounded-xl text-xl"
      >
        {playing ? "⏸" : "▶"}
      </button>
      <IntroVideo />
      <audio
        ref={audioRef}
        src="/assets/song.mp3"
        loop
        preload="auto"
        playsInline
      />

      <div className="relative w-full overflow-hidden">
        {/* Desktop Background */}
        <img
          src="/assets/hero-image.webp"
          alt="Wedding couple"
          className="hidden md:block absolute top-0 left-0 w-full h-full object-cover object-top"
        />

        {/* Mobile Background */}
        <img
          src="/assets/hero-image-mobile.webp"
          alt="Wedding couple"
          className="block md:hidden absolute top-0 left-0 w-full h-full object-cover object-top"
        />
        <RoseHeroTemp />
        {/* Main Content */}
        <div className="relative z-10 w-full pt-12 md:pt-50 lg:pt-80 flex flex-col items-center text-center">
          <div className="relative z-10 mt-95 md:mt-240 lg:mt-380 flex flex-col items-center w-full md:pb-20 pb-14">
            <Image
              src="/assets/element1.png"
              alt="Decorative element"
              width={100}
              height={100}
              className="w-10 md:w-20 h-auto"
            />

            <h2 className="font-playfair-display text-[#8B4A00] text-xs md:text-xl lg:text-2xl py-2 md:py-4">
              श्री गणेशाय नमः
            </h2>

            <Image
              src="/assets/element1.png"
              alt="Decorative element"
              width={100}
              height={100}
              className="md:w-20 w-10 h-auto rotate-180"
            />

            <h2 className="eb-garamond text-[#8B4A00] text-sm md:text-xl lg:text-3xl md:pt-8 px-4 mt-4">
              With the blessings of Mata Rani and the love of our family, we
              cordially invite you to join us in celebrating the.
            </h2>

            <h2 className="great-vibes-regular text-[#8B4A00] text-4xl md:text-6xl lg:text-[100px] leading-tight font-semibold mt-8">
              Dhoti Ceremony
            </h2>

            <p className="eb-garamond text-[#8B4A00] text-2xl md:text-xl lg:text-3xl mt-2">
              of
            </p>

            <img
              src="/assets/aryan_text.png"
              alt="Decorative element"
              className="w-70"
            />

            {/* <p className="jacques-francois-regular uppercase text-[#8B4A00] text-[18px] md:text-xl lg:text-2xl xl:text-3xl mt-4 md:mt-8 bg-[url('/assets/element2.png')] font-bold bg-contain bg-center bg-no-repeat h-15 md:h-14 lg:h-20 w-[200px] md:w-[350px] lg:w-[520px] flex items-center justify-center">
              Aryan Bandi
            </p> */}

            <p className="eb-garamond text-[#8B4A00] text-sm md:text-xl lg:text-3xl mt-8 md:mt-16">
              (Grandson of Mrs. Manjula Bandi & Mr. Narender Bandi) <br />
              (Son of Mrs. Swetha Bandi & Mr. Naveen Bandi)
            </p>
          </div>
        </div>
      </div>

      <div
        className="relative w-full bg-no-repeat bg-top
  bg-[#FFEBDB]
  min-h-[600px]
  py-20 md:py-28 lg:py-40
  md:bg-center
  md:min-h-[800px] lg:min-h-[1800px]
  flex flex-col"
      >
        <h2 className="eb-garamond md:mt-10 lg:mt-20 text-3xl md:text-3xl lg:text-[60px] text-[#AF630E] text-center">
          Ceremony Details
        </h2>
        <div className="flex flex-col items-center">
          <img
            src="/assets/element6.png"
            alt="Decorative element"
            className="w-25 md:w-50 h-auto object-contain py-2 md:py-4 lg:py-8"
          />
        </div>
        <h2 className="eb-garamond text-[15px] md:text-2xl lg:text-[30px] uppercase text-[#AF630E] text-center">
          DATE & TIME
        </h2>

        <h2 className="eb-garamond mt-2 text-[13px] md:text-xl lg:text-[20px] text-[#AF630E] text-center">
          29th November 2026,
          <br />
          Sunday, 07:00 PM onwards.
        </h2>
        <div className="flex flex-col items-center">
          <img
            src="/assets/element6.png"
            alt="Decorative element"
            className="w-25 md:w-50 h-auto object-contain py-2 md:py-4 lg:py-8"
          />
        </div>
        <h2 className="eb-garamond text-[#AF630E] text-sm md:text-xl lg:text-3xl text-center px-10">
          Your gracious presence will make this sacred occasion even more
          memorable.
        </h2>
        <img
          src="/assets/dhoti_bottom.webp"
          alt="Decorative element"
          className="w-full md:mt-20 mt-10"
        />
        <CoupleMessage />
      </div>

      <div className="w-full relative">
        <picture className="block w-full">
          <source
            media="(min-width: 768px)"
            srcSet="/assets/dhoti_desktop.webp"
          />

          <img
            src="/assets/dhoti_mobile.webp"
            alt=""
            className="block w-full h-auto"
          />
        </picture>
        <div className="flex justify-center items-center">
          <img
            src="/assets/logon.png"
            alt=""
            className="absolute left-1/2 -translate-x-1/2 md:top-50 lg:top-110 top-30 md:w-60 w-30 z-10 -ml-4 md:-ml-10"
          />
        </div>
      </div>
      <Reception />
    </>
  );
}
