import React from "react";
import data04 from "../../data/data04";

const InfoCard02 = () => {
  return (
    <>
      {data04.map((data, index) => (
        <div key={index} className="w-[100%] relative group">
          <img className="" src={data.image} alt="" />
          <p className="text-black text-base md:text-lg sm:text-xl font-bold custom-font mt-5 group-hover:text-red-600">
            {data.title}
          </p>
          <p className="poppins text-sm lg:text-sm mt-2 mb-4">{data.heading}</p>
          <p className="poppins text-xs font-thin">{data.author}</p>
        </div>
      ))}
    </>
  );
};

export default InfoCard02;
