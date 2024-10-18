import Image from "next/image";
import React from "react";
import logo from "@/app/public/images/logo.png";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className="flex flex-col gap-20 justify-center items-center">
      <div>
        <div className="lg:flex lg:flex-row lg:gap-[40px] lg:w-full lg:px-[100px] py-20 font-Jakarta sm:flex sm:flex-col sm:text-center sm:gap-0 sm:px-8 md:w-full ">
          <div className="lg:flex lg:items-center  ">
            <p className="text-[34px] font-extrabold tracking-tighter text-center md:text-[40px] lg:text-[84px] lg:leading-[84px] lg:text-left md:text-center">
              Let&apos;s <br className="hidden" />{" "}
              <span className="text-[#027223]">Connect</span>
            </p>
          </div>
          <div className="bg-gray-400 w" />
          <div className="lg:flex w-fit sm:flex sm:flex-col md:flex md:flex-row md:mt-4 ">
            <div className="flex flex-col p-10 items-center w-fit max-sm:p-4">
              <p className=" lg:text-3xl font-Jost">Eindhoven</p>
              <div className="flex flex-col mt-[38px] font-Jost text-center gap-1 text-black text-opacity-75 max-sm:text-[15px]">
                <p>+91 820 961 0775</p>
                <p>info2@interiozwars.org</p>
              </div>
              <div className="mt-5 flex flex-col gap-1 text-black text-opacity-75 max-sm:text-[15px]">
                <p className="text-center font-Jost ">
                  Hi-Tech City,
                  <br className="sm:hidden lg:block" />  Hyderabad
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
              <span className="uppercase text-[#027223] tracking-[0.3em] font-medium font-Jost text-sm sm:text-base">
                © sixth <span className="text-red-500 font-Jost">dimension </span>studio
              </span>
            </div>

            {/* Social Icons on the right */}
            <div className="flex space-x-4 flex-shrink-0">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-black text-red-500 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-black text-[#027223] transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-black text-red-500 transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
