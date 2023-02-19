import React from "react";
import dat02 from "../../data/dat02";

const HeadingCard = () => {
  return (
    <>
      {dat02.map((data, index) => (
        <div key={index}>
          <p className="text-black text-lg font-bold custom-font w-fit mt-5 hover:text-red-600">
            {data.title}
          </p>
          <p className="poppins text-sm mt-2 mb-4">{data.content}</p>
        </div>
      ))}
    </>
    /*  <div>
      <p className="text-black text-xl font-bold custom-font w-fit mt-5">
        {title}
      </p>
      <p className="poppins text-lg mt-2 mb-4">{content}</p>
    </div> */
  );
};

export default HeadingCard;
