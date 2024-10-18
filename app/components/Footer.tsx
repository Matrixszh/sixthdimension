import Image from "next/image";
import React from "react";
import logo from "@/app/public/images/logo.png";
import { Instagram } from "lucide-react";
import { FaPinterest, FaBehance } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col gap-20 justify-center items-center">
      <div>
        <div className="lg:flex lg:flex-row lg:gap-[40px] lg:w-full lg:px-[100px] py-20 font-Jakarta sm:flex sm:flex-col sm:text-center sm:gap-0 sm:px-8 md:w-full ">
          <div className="lg:flex lg:items-center  ">
            <p className="text-[34px] font-extrabold tracking-tighter text-center md:text-[40px] lg:text-[84px] lg:leading-[84px] lg:text-left md:text-center">
              Let&apos;s <br className="hidden" />{" "}
              <span className="text-[#264845]">Connect</span>
            </p>
          </div>
          <div className="bg-gray-400 w" />
          <div className="lg:flex w-fit sm:flex sm:flex-col md:flex md:flex-row md:mt-4 ">
            <div className="flex flex-col p-10 items-center w-fit max-sm:p-4">
              <p className=" lg:text-3xl font-Jost">Rana Ram</p>
              <div className="flex flex-col mt-[38px] font-Jost text-center gap-1 text-black text-opacity-75 max-sm:text-[15px]">
                <p>+91 820 961 0775</p>
                <p>studiosixthdimension@gmail.com</p>
              </div>
              <div className="mt-5 flex flex-col gap-1 text-black text-opacity-75 max-sm:text-[15px]">
                <p className="text-center font-Jost ">
                  White Fields,
                  <br className="sm:hidden lg:block" /> Kondapur
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-white w-full text-black py-8 px-4">
        <div className="mx-auto">
          <div className="flex flex-row items-center justify-between">
            {/* Logo on the left */}
            <div className="flex-shrink-0">
              <Image
                src={logo}
                alt="Logo"
                className="h-12 w-12"
              />
            </div>

            {/* Copyright in the center */}
            <div className="flex-grow text-center">
              <span className="uppercase text-[#264845] tracking-[0.3em] font-medium font-Jost text-sm sm:text-base">
                © sixth <span className="text-red-500 font-Jost">dimension </span>studio
              </span>
            </div>

            {/* Social Icons on the right */}
            <div className="flex space-x-4 flex-shrink-0">
              <a href="https://pin.it/oHxgl6946" target="_blank" rel="noopener noreferrer" className="hover:text-black text-red-500 transition-colors duration-300">
                <FaPinterest size={20} />
              </a>
              <a href="https://www.instagram.com/sixthdimensionstudio?igsh=MWd2MGE0cHo5ajIydw==" target="_blank" rel="noopener noreferrer" className="hover:text-black text-[#264845] transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="https://www.behance.net/sixthdimensionstudio" target="_blank" rel="noopener noreferrer" className="hover:text-black text-red-500 transition-colors duration-300">
                <FaBehance size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
