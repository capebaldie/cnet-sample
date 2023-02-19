import React from "react";

const MainFooter = () => {
  return (
    <>
      <hr className="mb-5 h-[0.06rem] bg-black mt-0 sm:mt-32" />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-7 sm:gap-0">
        <div>
          <p className="custom-font text-base font-semibold">More from CNET</p>
          <ul className="">
            <li className="py-2 hover:underline underline-offset-4 decoration-[#e71d1d] cursor-pointer">
              Deals
            </li>
            <li className="py-2 hover:underline underline-offset-4 decoration-[#e71d1d] cursor-pointer">
              Reviews
            </li>
            <li className="py-2 hover:underline underline-offset-4 decoration-[#e71d1d] cursor-pointer">
              Best Products
            </li>
            <li className="py-2 hover:underline underline-offset-4 decoration-[#e71d1d] cursor-pointer">
              Gift Guide
            </li>
            <li className="py-2 hover:underline underline-offset-4 decoration-[#e71d1d] cursor-pointer">
              Shopping Extensions
            </li>
            <li className="py-2 hover:underline underline-offset-4 decoration-[#e71d1d] cursor-pointer">
              Videos
            </li>
          </ul>
        </div>
        <div>
          <p className="custom-font text-base font-semibold">About</p>
          <ul>
            <li className="py-2 hover:underline underline-offset-4 decoration-[#e71d1d] cursor-pointer">
              About CNET
            </li>
            <li className="py-2 hover:underline underline-offset-4 decoration-[#e71d1d] cursor-pointer">
              NewsLetter
            </li>
            <li className="py-2 hover:underline underline-offset-4 decoration-[#e71d1d] cursor-pointer">
              Sitemap
            </li>
            <li className="py-2 hover:underline underline-offset-4 decoration-[#e71d1d] cursor-pointer">
              Careers
            </li>
          </ul>
        </div>
        <div>
          <p className="custom-font text-base font-semibold">Policies</p>
          <ul>
            <li className="py-2 hover:underline underline-offset-4 decoration-[#e71d1d] cursor-pointer">
              Help
            </li>
            <li className="py-2 hover:underline underline-offset-4 decoration-[#e71d1d] cursor-pointer">
              Privacy policy
            </li>
            <li className="py-2 hover:underline underline-offset-4 decoration-[#e71d1d] cursor-pointer">
              Cookie Settings
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="py-2 hover:underline underline-offset-4 decoration-[#e71d1d] cursor-pointer">
              Terms of use
            </li>
            <li className="py-2 hover:underline underline-offset-4 decoration-[#e71d1d] cursor-pointer">
              Licensing
            </li>
            <li className="py-2 hover:underline underline-offset-4 decoration-[#e71d1d] cursor-pointer">
              Do Not Sell or Share My Personal Information
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-5 h-[0.10rem] bg-black" />
    </>
  );
};

export default MainFooter;
