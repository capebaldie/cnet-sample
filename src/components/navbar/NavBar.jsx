import React from "react";

const NavBar = () => {
  return (
    <>
      <div className="w-full sticky top-0 z-[40] flex sm:flex-row flex-col justify-between pr-0 lg:pr-14 py-0 bg-white box-shadow">
        <div className="flex items-center gap-4 flex-shrink">
          {/* <h1 className="text-[#e71d1d] text-6xl custom-font font-extrabold">
            CNET
          </h1> */}
          <img src="cnet.png" className="lg:w-48 md:w-32 w-28 h-auto" alt="" />
          <p className="text-[#e71d1d] text-xs md:text-sm lg:text-xl custom-font font-bold">
            Your guide to a better future
          </p>
        </div>
        <div className="flex items-center gap-4 sm:gap-6 p-2">
          <p className="text-black text-xs lg:text-xl poppins  hover:text-[#e71d1d] cursor-pointer">
            Tech
          </p>
          <p className="text-black text-xs lg:text-xl poppins  hover:text-[#e71d1d] cursor-pointer">
            Money
          </p>
          <p className="text-black text-xs lg:text-xl poppins  hover:text-[#e71d1d] cursor-pointer">
            Home
          </p>
          <p className="text-black text-xs lg:text-xl poppins  hover:text-[#e71d1d] cursor-pointer">
            Wellness
          </p>
          <p className="text-black text-xs lg:text-xl poppins  hover:text-[#e71d1d] cursor-pointer">
            News & Culture
          </p>
          <p className="text-black text-xs lg:text-xl poppins  hover:text-[#e71d1d] cursor-pointer">
            More
          </p>
        </div>
      </div>
      <hr className="" />
    </>
  );
};

export default NavBar;
