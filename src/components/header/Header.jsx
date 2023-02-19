import React from "react";

const Header = () => {
  return (
    <>
      <p className="text-black text-2xl md:text-3xl lg:text-5xl custom-font mt-4 sm:mt-6 font-extrabold">
        Get the tech that takes you places
      </p>
      <p className="poppins text-sm md:text-base lg:text-xl mt-2">
        Our experts share the newest products and technologies that get you the
        most out of your world.
      </p>

      <div className="flex items-center gap-6 mt-4 sm:mt-10 mb-2 overflow-x-scroll  relative keep-scrolling w-full whitespace-nowrap">
        <p className="text-black text-xs sm:text-sm poppins hover:text-[#e71d1d] cursor-pointer">
          Tech
        </p>
        <p className="text-black text-xs sm:text-sm poppins hover:text-[#e71d1d] cursor-pointer">
          Home entertainment
        </p>
        <p className="text-black text-xs sm:text-sm poppins hover:text-[#e71d1d] cursor-pointer">
          Mobile
        </p>
        <p className="text-black text-xs sm:text-sm poppins hover:text-[#e71d1d] cursor-pointer">
          Computing
        </p>
        <p className="text-black text-xs sm:text-sm poppins hover:text-[#e71d1d] cursor-pointer">
          Services & software
        </p>
        <p className="text-black text-xs sm:text-sm poppins hover:text-[#e71d1d] cursor-pointer">
          Gaming
        </p>
      </div>
      <hr className="mb-4" />
    </>
  );
};

export default Header;
