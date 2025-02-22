"use client";

import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="relative w-full pt-20 pb-10" id="contact">
      <div className="absolute inset-0 w-full h-full opacity-50">
        <Image
          src="/footer-grid.svg"
          alt="footer grid background"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative flex flex-col items-center z-10">
        <h1 className="heading text-center">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-gray-300 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:Hamzawarisgt@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="relative flex mt-16 md:flex-row flex-col justify-between items-center z-10">
        <p className="md:text-base text-sm">Copyright © 2024 Hamza Waris</p>
        <div className="flex items-center gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-10 h-10 flex justify-center items-center backdrop-blur-lg bg-black/50 rounded-lg border border-gray-700">
                {typeof info.img === "string" ? (
                  <Image
                    src={info.img}
                    alt={info.name}
                    width={20}
                    height={20}
                  />
                ) : (
                  <span>{info.name}</span>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
