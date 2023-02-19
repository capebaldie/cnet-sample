import React from "react";

const TextCard = ({ title, content, src, author }) => {
  return (
    <div className="w-full flex relative gap-6 group">
      <div className="w-full sm:w-[40.74074%]">
        <p className="custom-font text-base lg:text-xl font-bold group-hover:text-red-600">
          {title}
        </p>
        <p className="poppins hidden md:text-xs lg:text-base sm:block my-4">
          {content}
        </p>
        <p className="poppins text-sm font-thin sm:mt-0 mt-4">{author}</p>
      </div>

      <div className="">
        <img
          className="w-32 md:w-52 lg:w-[100%] h-28 md:h-40  object-cover lg:h-auto"
          src={src}
          alt=""
        />
      </div>
    </div>
  );
};

export default TextCard;
