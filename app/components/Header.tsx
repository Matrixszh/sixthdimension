"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("HOME");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleItemClick = (title: string) => {
    setActiveItem(title);
    setIsMenuOpen(false);
  };

  const menuItems = [
    { title: "HOME", href: "#HomeSlider" },
    { title: "ABOUT US", href: "#About" },
    { title: "PORTFOLIO", href: "#Showcase" },
    { title: "CONTACT", href: "#Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = menuItems.map(item => document.querySelector(item.href));
      
      sections.forEach((section, index) => {
        if (section instanceof HTMLElement) {
          const sectionTop = section.offsetTop - 100; // Adjust offset as needed
          const sectionBottom = sectionTop + section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveItem(menuItems[index].title);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-md">
      <div className="mx-auto flex items-center justify-between py-4 px-5 lg:px-12">
        <p className="text-[18px] font-bold font-Jost uppercase tracking-[1.00px] text-[#264845] lg:hidden whitespace-nowrap">
          Sixth <span className="text-red-500 font-Jost">Dimension</span> Studio
        </p>
        {/* Hamburger menu for mobile */}
        <button onClick={toggleMenu} className="lg:hidden">
          {isMenuOpen ? (
            <X size={24} className="text-red-500" />
          ) : (
            <Menu size={24} className="text-[#264845]" />
          )}
        </button>

        {/* Desktop menu */}
        <nav className="hidden lg:flex lg:items-center lg:justify-center w-full">
          <div className="flex items-center gap-[46px]">
            {menuItems.slice(0, 2).map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={`px-4 py-2 text-[13px] font-medium whitespace-nowrap uppercase tracking-[1.00px] rounded-[16px] transition-colors duration-200 ${
                  activeItem === item.title
                    ? "bg-[#264845] text-white"
                    : "text-black hover:bg-[#264845]/15"
                }`}
                onClick={() => handleItemClick(item.title)}
              >
                {item.title}
              </Link>
            ))}
          </div>

          <p className="text-[18px] font-semibold uppercase tracking-[1.00px] text-[#41544e] mx-[46px] whitespace-nowrap">
            Sixth <span className="text-red-500">Dimension</span> Studio
          </p>

          <div className="flex items-center gap-[46px]">
            {menuItems.slice(2).map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={`px-4 py-2 text-[13px] font-medium whitespace-nowrap uppercase tracking-[1.00px] rounded-[16px] transition-colors duration-200 ${
                  activeItem === item.title
                    ? "bg-[#264845] text-white"
                    : "text-black hover:bg-[#264845]/15"
                }`}
                onClick={() => handleItemClick(item.title)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <nav
        className={`lg:hidden bg-white shadow-md fixed top-[58px] left-0 w-full transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col">
          {menuItems.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              className={`block py-6 px-5 text-[13px] font-medium uppercase tracking-[1.00px] text-black hover:bg-gray-100 border-b border-gray-200 ${
                index === menuItems.length - 1 ? "border-b-0" : ""
              }`}
              onClick={() => handleItemClick(item.title)}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
