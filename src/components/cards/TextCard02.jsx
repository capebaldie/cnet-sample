import React from "react";
import data03 from "../../data/data03";

const TextCard02 = () => {
  return (
    <>
      {data03.map((data, index) => (
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
    </>
  );
};

export default TextCard02;
