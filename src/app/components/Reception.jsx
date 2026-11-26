"use client";
import Image from "next/image";
export default function Reception() {
  return (
    <div className="bg-[#FFEBDB] md:pt-30 pt-15">
       <div className="flex flex-col items-center">
          <img
            src="/assets/element6.png"
            alt="Decorative element"
            className="w-25 md:w-50 h-auto object-contain py-2 md:py-4 lg:py-8"
          />
        </div>
      <h2 className="eb-garamond text-2xl md:text-2xl lg:text-[30px] uppercase text-[#AF630E] text-center">
        VENUE
      </h2>

      <h2 className="eb-garamond mt-2 text-[13px] md:text-xl lg:text-[20px] text-[#AF630E] text-center">
        Khaja Mansion Convention/Function Hall, <br /> Banjara Hills, Hyderabad.
      </h2>

      <div className="flex flex-col items-center justify-center">
        <a
          href="https://maps.app.goo.gl/r1qkFFHaxjTTPRWg8"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 text-[#AF630E] eb-garamond text-sm md:text-lg"
        >
          View Location
        </a>
      </div>
      <div className="flex flex-col items-center">
          <img
            src="/assets/element6.png"
            alt="Decorative element"
            className="w-25 md:w-50 h-auto object-contain py-2 md:py-4 lg:py-8"
          />
        </div>
      <h2 className="eb-garamond text-[#AF630E] text-sm md:text-xl lg:text-3xl text-center px-3">
        We would be delighted to have you join us as we celebrate this special milestone. Your gracious presence would make the occasion even more memorable and meaningful.
      </h2>

      <div className="flex flex-col items-center justify-center md:mt-10 lg:mt-15 mt-20">
        <a
          href="https://invitearc.com/"
          target="_blank"
          rel="noopener noreferrer"
          className=" flex items-center"
        >
          {" "}
          <img
            src="/assets/logo.png"
            alt="Wedding Logo"
            className="md:w-17 w-13"
          />
        </a>
      </div>

      <div className="mb-1 flex flex-col items-center justify-center gap-2 ">
        <a
          href="https://www.instagram.com/theinvitearc/"
          target="_blank"
          rel="noopener noreferrer"
          className=" flex items-center gap-3 font-serif text-[16px] text-[#D49900]"
        >
          <img
            src="/assets/instagram.png"
            alt="Instagram"
            className="object-contain h-4 w-5"
          />

          <span>Follow us on Instagram</span>
        </a>
      </div>

      <div className="flex justify-center items-center">
        <img
          src="/assets/venue.webp"
          alt="icon"
          className="md:mt-20 mt-10 object-contain"
        />
      </div>
    </div>
  );
}
