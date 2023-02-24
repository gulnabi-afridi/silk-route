import React from "react";
import Image from "next/image";
import Link from "next/link";

function ThinkingOfStarting() {
  return (
    <div className="w-full min-h-screen bg-pink-main">
      <div className="w-full h-full max-w-[1290px] m-auto flex flex-col justify-center items-center py-16">
        <h1 className="text-[60px] font-anton font-semibold text-main-brand">
          Thinking of starting anew in the EU?
        </h1>
        {/* =======> grid */}
        <div className="w-[80%] grid gap-8 grid-cols-2 grid-rows-2 py-8">
          {/* ======> one box */}
          <div className="col-span-1 row-span-1 flex justify-center items-center">
            <div className="text-[20px] text-white-main font-sans font-normal">
              <span className="text-main-brand">
                Silk Route is here to help.
              </span>{" "}
              We’re confident in saying we’re one of the best residency programs
              in Europe, and here’s why. We create companies tailored to each
              individual in our care–businesses that establish residency in the
              European Union and ensure long term success. But the genius of our
              business model is that we make this process a luxury experience
              for you{" "}
              <span className="text-main-brand">
                (full details available on our services page).
              </span>
            </div>
          </div>
          {/* ========> 2nd box */}
          <div className="col-span-1 row-span-1 flex justify-center items-center">
            <div className="w-[55%] h-full flex justify-center items-center relative ">
              <Image
                src="/Assets/Home/oneCross.png"
                fill
                className="cover"
                alt="seo text here"
              ></Image>
            </div>
          </div>
          {/* =======> 3rd box */}
          <div className="col-span-1 row-span-2 flex justify-center items-center">
            <div className="w-[75%] h-full flex justify-center items-center relative ">
              <Image
                src="/Assets/Home/secCross.png"
                fill
                className="cover"
                alt="seo text here"
              ></Image>
            </div>
          </div>
          {/* =======> 4th box */}
          <div className="col-span-1 row-span-2 flex justify-center items-center">
            <p className="text-[20px] text-white-main font-sans font-normal">
              Silk Route is here to help. We’re confident in saying we’re one of
              the best residency programs in Europe, and here’s why. We create
              companies tailored to each individual in our care–businesses that
              establish residency in the European Union and ensure long term
              success. But the genius of our business model is that we make this
              process a luxury experience for you (full details available on our
              services page).
            </p>
          </div>
        </div>
        <h1 className="text-[32px] font-anton font-semibold text-main-brand">
          Are you ready to unlock the possibilities of a new life in the EU?
        </h1>
        <Link
          href="#"
          className="text-[24px] font-anton font-semibold text-main-brand underline mt-6"
        >
          Click here to begin your journey
        </Link>
      </div>
    </div>
  );
}

export default ThinkingOfStarting;
