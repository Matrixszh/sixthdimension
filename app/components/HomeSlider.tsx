"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "@/app/public/images/3.jpg";
import img2 from "@/app/public/images/landcarousal2.jpg";
import img3 from "@/app/public/images/landcarousal.jpg";

const images = [
  {
    main: img1,
    overlay: img1,
    title: "Transform Your Vision,",
    subtitle: "Into Reality",
    description: "FORM FOLLOWS FUNCTION",
  },
  {
    main: img2,
    overlay: img2,
    title: "Innovative Design",
    subtitle: "Meets Functionality",
    description: "OPTIMIZATION",
  },
  {
    main: img3,
    overlay: img3,
    title: "Sustainable Living",
    subtitle: "For Tomorrow",
    description: "THE FUTURE",
  },
];

const HomeSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div
      id="HomeSlider"
      className="flex justify-center items-center w-full pt-24 sm:pt-24 md:pt-28 lg:pt-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="relative w-full max-w-[90%] h-[600px] sm:aspect-[16/14] overflow-hidden rounded-lg shadow-2xl">
        <AnimatePresence initial={false}>
          {images.map((image, index) => (
            index === currentIndex && (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "-100%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={image.main}
                    alt={`Slide ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1080px"
                    style={{ objectFit: "cover" }}
                    priority
                    quality={100}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60">
                  <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 md:p-12 lg:p-16">
                    <motion.div 
                      className="flex items-center"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <p className="text-xs font-Jost sm:text-sm md:text-base text-white/80 font-light tracking-wider pr-3">
                        {image.description}
                      </p>
                      <div className="w-12 h-px bg-white/70" />
                    </motion.div>
                    <div>
                      <motion.h2 
                        className="text-2xl xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold mb-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        {image.title}
                      </motion.h2>
                      <motion.h3 
                        className="text-2xl xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                      >
                        {image.subtitle}
                      </motion.h3>
                    </div>
                  </div>
                </div>
                {/* Overlay image - hidden on smaller screens */}
                <motion.div 
                  className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 md:bottom-12 md:right-12 lg:bottom-16 lg:right-16 w-1/4 aspect-[3/2] overflow-hidden rounded-lg shadow-lg hidden md:block"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <Image
                    src={image.overlay}
                    alt={`Overlay ${index + 1}`}
                    fill
                    sizes="(max-width: 1200px) 25vw, 300px"
                    style={{ objectFit: "cover" }}
                    quality={100}
                  />
                </motion.div>
              </motion.div>
            )
          ))}
        </AnimatePresence>
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-1 sm:p-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-1 sm:p-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default HomeSlider;