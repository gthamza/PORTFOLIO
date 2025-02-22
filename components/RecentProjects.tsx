"use client";

import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <section className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.title} href={item.link}>
              {/* Background Image */}
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162D]">
                  <Image
                    src="/bg.png"
                    alt="Background"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>

                {/* Project Cover Image */}
                <Image
                  src={item.img}
                  alt={item.title}
                  width={400}
                  height={200}
                  className="z-10 absolute bottom-0"
                  priority
                />
              </div>

              {/* Project Title */}
              <h2 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h2>

              {/* Project Description */}
              <p className="lg:text-xl lg:font-normal font-light text-sm text-muted my-2">
                {item.des}
              </p>

              {/* Tech Icons & Live Site */}
              <div className="flex items-center justify-between mt-7 mb-3">
                {/* Tech Stack Icons */}
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-12 lg:h-10 w-10 h-10 flex justify-center items-center overflow-hidden"
                      style={{ transform: `translateX(-${6 * index}px)` }}
                    >
                      <Image
                        src={icon}
                        alt="Tech Icon"
                        width={35}
                        height={35}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}
                </div>

                {/* Live Site Link */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-site"
                >
                  <p className="lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-2" color="#CBACF9" />
                </a>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
