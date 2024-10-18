'use client';
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion'; // Import useInView from framer-motion
import Image from 'next/image';
import { BentoGrid, BentoGridItem } from "@/app/components/ui/bento-grid";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

import img2 from '@/app/public/images/1.jpg'; 
import img1 from '@/app/public/images/aboutus2.jpg';
import img3 from '@/app/public/images/3.jpg'; 
import img4 from '@/app/public/images/aboutus1.jpg';
import img5 from '@/app/public/images/6.jpg';
import img6 from '@/app/public/images/landcarousal.jpg'; 

const images = [
  {
    src: img1,
    alt: 'Outdoor living space with pool',
    className: "md:col-span-2",
  },
  {
    src: img2,
    alt: 'Kitchen with arched window',
    className: "md:col-span-1",
  },
  {
    src: img3,
    alt: 'Arched alcove with sea view',
    className: "md:col-span-1",
  },
  {
    src: img4,
    alt: 'Open plan living and kitchen area',
    className: "md:col-span-2",
  },
  {
    src: img5,
    alt: 'Tropical indoor-outdoor living space',
    className: "md:col-span-2",
  },
  {
    src: img6,
    alt: 'Arched doorway to tropical patio',
    className: "md:col-span-1",
  },
];

type StaticImageData = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
};

interface ImageHeaderProps {
  src: StaticImageData;
  alt: string;
  onClick: () => void;
}

const ImageHeader: React.FC<ImageHeaderProps> = ({ src, alt, onClick }) => (
  <div className="relative w-full h-full min-h-[6rem] rounded-xl overflow-hidden cursor-pointer" onClick={onClick}>
    <Image
      src={src}
      alt={alt}
      layout="fill"
      objectFit="cover"
      className="transition-transform duration-300 hover:scale-105"
    />
  </div>
);

const ImageSlideshow: React.FC<{ images: typeof images; currentIndex: number; onClose: () => void; onPrev: () => void; onNext: () => void }> = ({ images, currentIndex, onClose, onPrev, onNext }) => (
  <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
    <div className="relative w-full h-full max-w-4xl max-h-[80vh]">
      <Image
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        layout="fill"
        objectFit="contain"
      />
      <button onClick={onPrev} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white">
        <ChevronLeft size={36} />
      </button>
      <button onClick={onNext} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white">
        <ChevronRight size={36} />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-3 py-1 rounded-full">
        {currentIndex + 1}/{images.length}
      </div>
    </div>
    <button onClick={onClose} className="absolute top-4 right-4 text-white bg-black bg-opacity-50 p-2 rounded-full">
      <X size={24} />
    </button>
  </div>
);

const Showcase: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);
  const headingRef = useRef(null); // Ref to track the heading
  const isInView = useInView(headingRef, { once: true }); // Trigger animation once when in view

  const openSlideshow = (index: number) => setCurrentImageIndex(index);
  const closeSlideshow = () => setCurrentImageIndex(null);
  const showPrevImage = () => setCurrentImageIndex(prev => (prev === null || prev === 0) ? images.length - 1 : prev - 1);
  const showNextImage = () => setCurrentImageIndex(prev => (prev === null || prev === images.length - 1) ? 0 : prev + 1);

  return (
    <section id='Showcase' className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Showcase Heading with Framer Motion Animation */}
        <motion.h1
          ref={headingRef} // Attach the ref to track when it comes into view
          className="text-3xl text-[#264845] text-center sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
          initial={{ y: -100, opacity: 0 }} // Start off-screen (below) and invisible
          animate={isInView ? { y: 0, opacity: 1 } : {}} // Animate when heading comes into view
          transition={{ duration: 0.8, ease: "easeOut" }} // Duration of 0.8 seconds
        >
          Showcase
        </motion.h1>
        <div className="flex justify-center items-center gap-3 mt-6 mb-8">
          <div className="w-1/4 h-px border-t border-gray-600" />
          <p className="text-gray-600 font-Jost text-sm sm:text-base uppercase tracking-wider">
            Our Work
          </p>
          <div className="w-1/4 h-px border-t border-gray-600" />
        </div>
        <BentoGrid className="max-w-6xl mx-auto sm:auto-rows-[25rem] auto-rows-[20rem]">
          {images.map((item, i) => (
            <BentoGridItem
              key={i}
              header={<ImageHeader src={item.src} alt={item.alt} onClick={() => openSlideshow(i)} />}
              className={cn(item.className)}
            />
          ))}
        </BentoGrid>
      </div>
      {currentImageIndex !== null && (
        <ImageSlideshow
          images={images}
          currentIndex={currentImageIndex}
          onClose={closeSlideshow}
          onPrev={showPrevImage}
          onNext={showNextImage}
        />
      )}
    </section>
  );
};

export default Showcase;
