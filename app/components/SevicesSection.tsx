'use client';
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import commercial from '@/app/public/images/commercial.jpg';
import projectManagement from '@/app/public/images/projectManagement.jpg';
import consultation from '@/app/public/images/consultation.jpg';
import residential from '@/app/public/images/residential.jpg';
import { motion, useInView } from 'framer-motion';

const services = [
  { name: 'Residential', description: 'Home design & décor services. ', image: residential },
  { name: 'Commercial', description: 'Office, retail, hospitality design.', image: commercial },
  { name: 'Consultation', description: 'Expert design advice & guidance.', image: consultation },
  { name: 'Project Management', description: 'Design coordination & execution.', image: projectManagement },
];

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(services[0].name);

  const firstLineWords = ["Expertly", "crafting"];
  const secondLineWords = ["your", "dream"];

  // Ref for the heading animation
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true });

  return (
    <section id="#" className="py-16 px-5 sm:px-10 lg:px-20 text-center">
      <div className="max-w-7xl mx-auto">
        {/* Animated heading with two lines */}
        <h1 ref={headingRef} className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
          <motion.div className="inline-block">
            {firstLineWords.map((word, index) => (
              <motion.span
                key={index}
                initial={{ y: -100, opacity: 0 }}
                animate={headingInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="inline-block mx-1 text-[#264845]"
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
          <br />
          <motion.div className="inline-block">
            {secondLineWords.map((word, index) => (
              <motion.span
                key={index}
                initial={{ y: -100, opacity: 0 }}
                animate={headingInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: (index + firstLineWords.length) * 0.2 + 0.2, duration: 0.5 }}
                className="inline-block mx-1"
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </h1>

        {/* Divider */}
        <div className="flex justify-center items-center gap-3 my-4">
          <div className="w-1/4 h-px border-t border-gray-600" />
          <p className="text-gray-600 font-Jost text-sm sm:text-base uppercase tracking-wider">
            Services
          </p>
          <div className="w-1/4 h-px border-t border-gray-600" />
        </div>

        {/* Paragraph */}
        <p className="text-gray-600 font-Jost text-sm sm:text-lg md:text-xl mt-2 mb-10 mx-auto max-w-3xl">
        Our services offer tailored residential and commercial design, expert consultation, and full project management to bring your vision to life with ease.
        </p>

        {/* Button */}
        <a
          href="#Contact"
          className="relative inline-block bg-black text-white font-medium uppercase tracking-wide px-6 py-3 hover:text-white overflow-hidden group"
        >
          <span className="relative font-Jost z-10">
            Contact Us <span aria-hidden="true" className='ml-2'>→</span>
          </span>
          <span className="absolute inset-0 bg-[#264845] transition-transform duration-500 ease-out transform -translate-x-full group-hover:translate-x-0" />
        </a>

        {/* Service images and descriptions */}
        <div className="flex flex-row items-stretch rounded-2xl overflow-hidden mt-20">
          <div className="w-full md:w-1/2 relative aspect-square md:aspect-auto">
            {services.map((service) => (
              <div
                key={service.name}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  activeService === service.name ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.name}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
              </div>
            ))}
          </div>

          <div className="bg-white w-full md:w-1/2 flex items-center">
            <div className="w-full bg-[#264845]/15 p-6 sm:p-8 flex flex-col justify-center">
              <ul>
                {services.map((service) => (
                  <li key={service.name} className="mb-6 last:mb-0">
                    <button
                      className="text-left w-full"
                      onMouseEnter={() => setActiveService(service.name)}
                    >
                      <span
                        className={`text-lg font-Jost sm:text-xl lg:text-2xl font-semibold relative ${
                          activeService === service.name ? 'text-[#264845]' : 'text-[#264845] '
                        }`}
                      >
                        {service.name}
                        <span
                          className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#264845] transform origin-left transition-transform duration-300 ${
                            activeService === service.name ? 'scale-x-100' : 'scale-x-0'
                          }`}
                        ></span>
                      </span>
                      <p className="text-gray-600 font-Jost text-sm sm:text-base mt-2">{service.description}</p>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
