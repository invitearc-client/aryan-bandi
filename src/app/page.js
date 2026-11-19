"use client";
import Image from "next/image";
import { useEffect, useState, useRef, useMemo } from "react";
import Reception from "./components/Reception";
import RoseHeroTemp from "./components/RoseHeroTemp";
export default function Home() {

const audioRef = useRef<HTMLAudioElement | null>(null);
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
    } catch { }
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
      } catch { }
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

      {/* <audio ref={audioRef} src="/assets/laavan.mp3" loop preload="auto" playsInline /> */}




      <div className="relative w-full overflow-hidden">
       
        {/* Desktop Background */}
        <img
          src="/assets/hero-image.webp"
          alt="Wedding couple"
          className="hidden md:block absolute top-0 left-0 w-full h-full object-cover object-top"
        />

        {/* Mobile Background */}
        <img
          src="/assets/hero-image_mobile.webp"
          alt="Wedding couple"
          className="block md:hidden absolute top-0 left-0 w-full h-full object-cover object-top"
        />
 <RoseHeroTemp />
        {/* Main Content */}
        <div className="relative z-10 w-full pt-12 md:pt-50 lg:pt-80 flex flex-col items-center text-center">
          <h2 className="jacques-francois-regular flex flex-col items-center md:gap-6 mt-6 md:mt-12 text-xl md:text-5xl lg:text-[60px] uppercase text-[#AF630E]">
            DHOTI
            <br />
            CEREMONY
          </h2>

          <div className="relative z-10 mt-80 md:mt-140 lg:mt-350 flex flex-col items-center w-full md:pb-20 pb-14">
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

            <h2 className="eb-garamond text-[#8B4A00] text-sm md:text-xl lg:text-3xl md:pt-8 px-4">
              With the blessings of the Almighty and the love of our family,
              <br />
              we cordially invite you to join us in celebrating the auspicious
            </h2>

            <h2 className="parisienne-regular text-[#8B4A00] text-4xl md:text-6xl lg:text-[100px] leading-tight font-medium mt-8">
              Dhoti Ceremony
            </h2>

            <p className="eb-garamond text-[#8B4A00] text-sm md:text-xl lg:text-3xl mt-2">
              of our beloved son.
            </p>

            <p className="jacques-francois-regular uppercase text-[#8B4A00] text-[14px] md:text-xl lg:text-2xl xl:text-3xl mt-8 bg-[url('/assets/element2.png')] bg-contain bg-center bg-no-repeat h-10 md:h-14 lg:h-20 w-[150px] md:w-[350px] lg:w-[520px] flex items-center justify-center mx-auto">
              Aryan Bandi
            </p>

            <div className="relative  py-8 md:py-10 px-4 mt-6 md:mt-14">
              <div className="grid grid-cols-2 items-center text-center md:gap-40 gap-22">
                {/* Father */}
                <div className="flex flex-col items-center">
                  <p className="eb-garamond text-[#8B4A00] text-lg md:text-2xl lg:text-3xl">
                    Father
                  </p>

                  <h2 className="eb-garamond text-[#8B4A00] text-xl md:text-3xl lg:text-4xl">
                    Naveen Bandi
                  </h2>
                </div>

                {/* Mother */}
                <div className="flex flex-col items-center">
                  <p className="eb-garamond text-[#8B4A00] text-lg md:text-2xl lg:text-3xl">
                    Mother
                  </p>

                  <h2 className="eb-garamond text-[#8B4A00] text-xl md:text-3xl lg:text-4xl">
                    Swetha Bandi
                  </h2>
                </div>
              </div>

              {/* Center Divider */}
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center">
                <Image
                  src="/assets/element3.png"
                  alt="Decorative element"
                  width={100}
                  height={100}
                  className="md:w-7 w-4 h-auto rotate-180"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div
        className="relative w-full bg-no-repeat bg-center py-20 md:py-28 lg:py-40 lg:min-h-[1800px] md:min-h-[800px]  flex flex-col"
        style={{
          backgroundImage: "url('/assets/second_bg.webp')",
          backgroundSize: "100% 100%",
        }}
      > */}

<div
  className="relative w-full bg-no-repeat bg-top
  bg-[url('/assets/second_bg_mobile.png')]
  md:bg-[url('/assets/second_bg.webp')]
  bg-[length:100%_100%]
  min-h-[600px]
  py-20 md:py-28 lg:py-40
  md:bg-center
  md:min-h-[800px] lg:min-h-[1800px]
  flex flex-col"
>


        <h2 className="eb-garamond mt-2 md:mt-10 lg:mt-80 text-xl md:text-3xl lg:text-[60px] text-[#AF630E] text-center">
          Sacred Ceremony
          <br />
          Details
        </h2>
        <div className="flex flex-col items-center">
          <Image
            src="/assets/element4.png"
            alt="Decorative element"
            width={100}
            height={100}
            className="w-25 md:w-50 h-auto py-4 md:py-4 lg:py-8"
          />
        </div>
        <h2 className="eb-garamond text-[15px] md:text-2xl lg:text-[30px] uppercase text-[#AF630E] text-center">
          DATE & TIME
        </h2>

        <h2 className="eb-garamond mt-2 text-[13px] md:text-xl lg:text-[20px] uppercase text-[#AF630E] text-center">
          29th November 2026,
          <br />
          Sunday, 07:00 PM onwards.
        </h2>
        <div className="flex flex-col items-center">
          <Image
            src="/assets/element4.png"
            alt="Decorative element"
            width={100}
            height={100}
            className="w-25 md:w-50 h-auto py-4 md:py-4 lg:py-8"
          />
        </div>
        <h2 className="eb-garamond text-[#AF630E] text-sm md:text-xl lg:text-3xl text-center px-10">
          Your gracious presence will make this sacred occasion even more
          memorable.
        </h2>
      </div>

      <Reception />
    </>
  );
}
