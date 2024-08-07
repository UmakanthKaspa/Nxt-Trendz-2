import React from "react";

export const HeroSection: React.FC = () => {
  return (
    <section className="w-11/12	flex max-w-7xl mx-auto  md:mt-16">
      <div className="flex flex-col justify-center items-center gap-6 mt-8 p-3 md:items-start md:gap-8">
        <h1 className="text-[#1e293b] text-3xl md:text-5xl font-bold  md:text-left">
          Clothes That Get YOU Noticed
        </h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="w-40 md:hidden"
        />
        <p className="text-center text-[#64748b] text-sm  leading-relaxed md:text-left">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.
        </p>
        <button
          type="button"
          className="bg-blue-600 text-white font-bold text-sm md:text-lg px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Shop Now
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className=" w-3/6	max-w-md	ml-20	 hidden md:block"
      />
    </section>
  );
};
