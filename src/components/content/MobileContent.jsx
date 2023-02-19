import React from "react";
import InfoCard from "../cards/InfoCard";
import TextCard02 from "../cards/TextCard02";
import data03 from "../../data/data03";

const MobileContent = ({ heading }) => {
  return (
    <div className="flex flex-col sm:hidden w-full gap-6">
      <p className="text-black text-2xl font-bold custom-font w-fit my-5">
        {heading}
      </p>
      <div className="w-full sm:w-[40.42553%]">
        <InfoCard />
      </div>
      <div className="w-full sm:w-[57.44681%]">
        {data03.slice(0, 4).map((data, index) => (
          <div key={index} className="w-full flex relative py-6 group">
            <div className="w-full sm:w-[50%]">
              <p className="custom-font text-base sm:text-xl font-bold group-hover:text-red-600">
                {data.title}
              </p>
              <p className="poppins hidden sm:block my-4">{data.content}</p>
              <p className="poppins text-sm font-thin sm:mt-0 mt-4">
                {data.author}
              </p>
            </div>

            <div className="a">
              <img
                className="w-32 sm:w-[237.875px] h-28 sm:h-auto object-cover"
                src={data.image}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileContent;
