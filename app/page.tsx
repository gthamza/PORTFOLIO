import { FloatingNav } from "@/components/FloatingNav";
import Hero from "@/components/Hero";
import React from "react";
import { FaHome } from "react-icons/fa";
const page = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[{ name: "home", link: "/", icon: <FaHome /> }]}
        />
        <Hero />
      </div>
    </main>
  );
};

export default page;
