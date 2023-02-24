import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Spin as Hamburger } from "hamburger-react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="w-full h-[170px] ">
      <div className="w-full max-w-[1290px] m-auto h-full flex flex-col gap-10 justify-center items-center ">
        <div className="w-full flex gap-16 justify-center items-center">
          {/* =======> logo  */}
          <div className="w-[190px] h-[70px] relative">
            <Image
              src="/Assets/logo.svg"
              fill
              className="cover"
              alt="logo-image"
            ></Image>
          </div>
          {/* =======> navi links */}
          <div className="flex flex-col lg:flex-row justify-center items-center gap-16 lg:gap-10">
            {NaviLinks.map((nav, index) => {
              return (
                <Link
                  key={index}
                  href="#"
                  className="text-white-main text-base font-normal font-sans"
                >
                  {nav.name}
                </Link>
              );
            })}
          </div>
        </div>
        <p className="text-white-main text-[14px] font-sans">
          Silk Route. All rights reserved © 2023
        </p>
      </div>
    </div>
  );
}

const NaviLinks = [
  {
    name: "Home",
    path: "",
  },
  {
    name: "About Us",
    path: "",
  },
  {
    name: "Services",
    path: "",
  },
  {
    name: "Blogs",
    path: "",
  },
  {
    name: "FAQ",
    path: "",
  },
  {
    name: "Contact",
    path: "",
  },
  {
    name: "Terms and Conditions",
    path: "",
  },
  {
    name: "Privacy Policy",
    path: "",
  },
];

export default Footer;
