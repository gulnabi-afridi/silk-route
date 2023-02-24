import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Spin as Hamburger } from "hamburger-react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="w-full h-[90px]">
      <div className="w-full max-w-[1290px] m-auto h-full flex justify-between items-center px-6 md:px-4">
        {/* =======> logo  */}
        <div className="w-[170px] h-[65px] relative">
          <Image
            src="/Assets/logo.svg"
            fill
            className="cover"
            alt="logo-image"
          ></Image>
        </div>
        {/* =======> navi links */}
        <div className=" xl:flex hidden justify-center items-center gap-16">
          {NaviLinks.map((nav, index) => {
            return (
              <Link
                key={index}
                href="#"
                className="text-white-main text-[20px] font-normal font-sans"
              >
                {nav.name}
              </Link>
            );
          })}
        </div>

        <div className="xl:hidden w-full flex justify-end items-center ">
          <Hamburger
            className=" text-white"
            color="white"
            rounded
            size={34}
            toggled={isOpen}
            toggle={setIsOpen}
          />
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="right"
            className="drawer"
          >
            <div className="flex flex-col justify-center items-center">
              {NaviLinks.map((nav, index) => {
                return (
                  <Link
                    key={index}
                    href="#"
                    className="text-white-main text-[22px] font-normal font-sans"
                  >
                    {nav.name}
                  </Link>
                );
              })}
            </div>
          </Drawer>
        </div>
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
];

export default Header;
