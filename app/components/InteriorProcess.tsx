'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import int1 from '@/app/public/images/int1.jpg';
import int2 from '@/app/public/images/int2.jpg';
import int3 from '@/app/public/images/int3.jpg';
import img1 from '@/app/public/images/1.jpg';
import { motion, useInView } from 'framer-motion';

const processSteps = [
  {
    title: "Discovering Your Vision",
    description: "We meet with you to discuss your vision, budget, and timeline. This helps us understand your unique style and requirements.",
    image: int1,
  },
  {
    title: "Sketching Your Dreams",
    description: "Based on our consultation, we create initial design concepts and mood boards to visualize the space and overall aesthetic.",
    image: int2,
  },
  {
    title: "Bringing Ideas to Life",
    description: "Once you approve the concept, we develop detailed plans, 3D renderings, and material selections to bring your vision to life.",
    image: int3,
  },
  {
    title: "Transforming Your Space",
    description: "We oversee the transformation of your space, coordinating with contractors and managing the installation of furnishings and decor.",
    image: img1,
  },
];

const InteriorProcess = () => {
  const containerRef = useRef(null);
  const containerInView = useInView(containerRef, { once: true, amount: 0.1 });
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, amount: 0.1 });

  const headingWords = ["Interior", "Process"];

  return (
    <section ref={containerRef} className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h1 ref={headingRef} className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-center">
          <motion.div className="inline-block">
            {headingWords.map((word, index) => (
              <motion.span
                key={index}
                initial={{ y: -100, opacity: 0 }}
                animate={headingInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="inline-block mx-1"
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </h1>

        <motion.div 
          className="flex justify-center items-center gap-3 my-4"
          initial={{ opacity: 0 }}
          animate={headingInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="w-1/4 h-px border-t border-black/10" />
          <p className="text-gray-500 text-sm sm:text-base uppercase tracking-wider">
            process
          </p>
          <div className="w-1/4 h-px border-t border-black/10" />
        </motion.div>

        <motion.p 
          className="text-gray-600 text-sm sm:text-base lg:text-lg xl:text-xl mt-2 mb-8 sm:mb-10 mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Transforming a space involves understanding and applying key design principles to create a harmonious and functional environment.
        </motion.p>

        <motion.div 
          className="flex justify-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <a
            href="#"
            className="relative inline-block bg-white text-black border border-black font-medium uppercase tracking-wide px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base hover:text-white overflow-hidden group"
          >
            <span className="relative z-10">
              Get in Touch <span aria-hidden="true">→</span>
            </span>
            <span className="absolute inset-0 bg-black transition-transform duration-500 ease-out transform -translate-x-full group-hover:translate-x-0" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={containerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 2 + index * 0.2, duration: 0.5 }}
            >
              <div className="w-full aspect-[5/4] relative mb-4 rounded-lg overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center">{step.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base text-center">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteriorProcess;