import React from "react";

function HeroSection1() {
  return (
    <div className="w-full h-[calc(100vh-90px)] bg-cover bg-bottom bg-no-repeat bg-[url('/Assets/Home/1.svg')]">
      <div className="w-full h-full max-w-[1290px] px-8 m-auto flex justify-start items-center">
        {/* =======> Hero section 1 text */}
        <div className="">
          <h1 className="text-[36px] md:text-[60px] lg:text-[100px] font-black font-anton leading-[120px] text-white-main">
            Immigration <br /> Tailored <br /> to You
          </h1>
        </div>
      </div>
    </div>
  );
}

export default HeroSection1;
