"use client";
import React from "react";
import clsx from "clsx"; // Install via `npm install clsx`

interface MagicButtonProps {
  title: string;
  icon: React.ReactNode;
  position?: "left" | "right" | "none"; // Restrict allowed values
  handleClick?: () => void;
  otherClasses?: string;
}

const MagicButton: React.FC<MagicButtonProps> = ({
  title,
  icon,
  position = "right",
  handleClick = () => {},
  otherClasses = "",
}) => {
  return (
    <button
      className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none"
      onClick={handleClick}
    >
      {/* Gradient border animation with Safari fallback */}
      <span className="absolute inset-[-1000%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-400 before:via-indigo-500 before:to-purple-400 before:opacity-50" />

      {/* Button content */}
      <span
        className={clsx(
          "inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2",
          otherClasses
        )}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
