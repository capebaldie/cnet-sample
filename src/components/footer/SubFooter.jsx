import React from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";

import { SiYoutube, SiTiktok } from "react-icons/si";

import { RiFacebookFill } from "react-icons/ri";

const SubFooter = () => {
  return (
    <div className="flex sm:flex-row flex-col justify-between my-6">
      <div className="a">
        <p className="poppins text-xs">
          © 2023 CNET, a Red Ventures company. All rights reserved.
        </p>
        <p className="poppins text-xs text-gray-500 hover:text-gray-700 my-2">
          US | France | Germany | Japan | Korea
        </p>
      </div>
      <div className="flex gap-6 mt-5 sm:mt-0">
        <AiOutlineInstagram className="w-6 h-auto cursor-pointer hover:text-[#e71d1d]" />
        <AiOutlineTwitter className="w-6 h-auto cursor-pointer hover:text-[#e71d1d]" />
        <SiYoutube className="w-6 h-auto cursor-pointer hover:text-[#e71d1d]" />
        <SiTiktok className="w-6 h-auto cursor-pointer hover:text-[#e71d1d]" />
        <RiFacebookFill className="w-6 h-auto cursor-pointer hover:text-[#e71d1d]" />
      </div>
    </div>
  );
};

export default SubFooter;
