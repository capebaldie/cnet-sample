import React from "react";
import HeadingCard from "../cards/HeadingCard";
import InfoCard02 from "../cards/InfoCard02";

const Content = ({ heading }) => {
  return (
    <>
      <p className="text-black text-2xl font-bold custom-font w-fit my-5">
        {heading}
        <span className="poppins text-xs underline underline-offset-4 decoration-red-500 m-2">
          See all
        </span>
      </p>
      <div className="grid grid-cols-2">
        <div className="flex gap-6">
          <InfoCard02 />
        </div>
        <div className="pl-4">
          <HeadingCard />
        </div>
      </div>
    </>
  );
};

export default Content;
