import React from "react";
import data01 from "../../data/data01";

const Carousel = () => {
  return (
    <>
      <p className="text-black text-xl sm:text-2xl font-bold custom-font w-fit my-5">
        Our Favourite Picks
        <span className="poppins text-xs underline underline-offset-4 decoration-red-500 m-2">
          All best
        </span>
      </p>

      <div className="flex w-full h-full overflow-x-scroll scroll-smooth scrollbar-hide relative keep-scrolling mb-0 sm:mb-10">
        {data01.map((data, index) => (
          <div key={index} className="w-[330px] group">
            <div className="max-w-[300px] h-auto w-[80vw] o-card border-b-2 border-red-500 m-4">
              <img className="" src={data.image} alt="" />
              <div className="sm:p-[35px] p-4 flex flex-col items-center justify-center">
                <h1 className="w-auto whitespace-normal custom-font text-xl font-bold text-center group-hover:text-red-600">
                  {data.title}
                </h1>
                <p className="w-auto whitespace-normal poppins text-sm mt-6">
                  {data.author}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Carousel;
