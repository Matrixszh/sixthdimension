import Image from "next/image";
import React from "react";
import profile from "@/app/public/images/profile.jpg";
import manprofile from "@/app/public/images/manprofile.jpg";

const Team = () => {
  return (
    <section id="#" className="py-16 px-5 sm:px-10 lg:px-20 text-center">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
          Meet Our
          <br />
          Designers
        </h1>

        <div className="flex justify-center items-center gap-3 my-4">
          <div className="w-1/4 h-px border-t border-black/10" />
          <p className="text-gray-500 text-sm sm:text-base uppercase tracking-wider">
            Team
          </p>
          <div className="w-1/4 h-px border-t border-black/10" />
        </div>

        <p className="text-gray-600 text-sm sm:text-lg md:text-xl mt-2 mb-10 mx-auto max-w-3xl">
          Our team of passionate experts transforms your vision into stunning
          and impactful designs.
        </p>
      </div>

      {/* Team Section */}
      <div className="mt-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 w-fit mx-auto lg:grid-cols-3 gap-8 mt-12">
          <div className="relative">
            <Image
              src={profile}
              alt="Sophia Mitchell"
              className="rounded-lg w-full h-[300px] object-fill"
            />
            <div className="absolute bottom-4 left-4 text-left text-white bg-black bg-opacity-50 px-4 py-2 rounded-md">
              <p className="text-sm">Junior Designer</p>
              <h3 className="font-semibold text-lg">Sophia Mitchell</h3>
            </div>
          </div>

          <div className="relative">
            <Image
              src={manprofile}
              alt="Alexander Reynolds"
              className="rounded-lg w-full h-[300px] object-fill"
            />
            <div className="absolute bottom-4 left-4 text-left text-white bg-black bg-opacity-50 px-4 py-2 rounded-md">
              <p className="text-sm">Lead Designer</p>
              <h3 className="font-semibold text-lg">Alexander Reynolds</h3>
            </div>
          </div>

          <div className="relative">
            <Image
              src={manprofile}
              alt="Ethan Parker"
              className="rounded-lg w-full h-[300px] object-fill"
            />
            <div className="absolute bottom-4 left-4 text-left text-white bg-black bg-opacity-50 px-4 py-2 rounded-md">
              <p className="text-sm">Senior Project Manager</p>
              <h3 className="font-semibold text-lg">Ethan Parker</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
