"use client";

import { useEffect, useRef, useState } from "react";
import Container from "../ui/Container";
import DesktopNavMenu from "./DesktopNavMenu";
import MobileNavMenu from "./MobileNavMenu";
import { cn } from "@/lib/util";

const FixedNav = () => {
  const [className, setClassName] = useState("translate-y-[-100vh]");
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const listener = () => {
      setClassName("translate-y-[-100vh]");
      if (window.scrollY < 200) {
        setClassName("translate-y-[-100vh]");
      } else {
        clearTimeout(timerRef.current ?? 0);
        timerRef.current = setTimeout(() => {
          window.scrollY > 200 && setClassName("translate-y-0");
        }, 500);
      }
    };

    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 z-[99999] w-full bg-darkBlue px-8 py-5 transition-all duration-200 md:px-10",
        className,
      )}
    >
      <Container className="flex justify-between items-center gap-3 px-2 sm:px-10">
        <div className="flex items-center gap-8 xl:basis-1/2">
          <h1 className="font-bold text-5xl text-white cursor-pointer select-none" onClick={() => window.scrollTo({top:0})}>V</h1>
          <span className="md:inline-flex hidden bg-red font-medium text-me text-white text-xs hover:text-cyan-300 transition-colors cursor-pointer">
            <a href="mailto:varad2k12@gmail.com"> varad2k12@gmail.com</a>
          </span>
        </div>
        <div className="flex justify-end items-center gap-6 lg:gap-0 xl:basis-1/2">
          <DesktopNavMenu />
          <a
            href="mailto:varad2k12@gmail.com"
            className="bg-[linear-gradient(to_right,#8750f7_0%,#2a1454_51%,#8750f7_100%)] ml-14 px-3 sm:px-7 py-2.5 rounded-full font-bold text-[10px] text-white sm:text-sm transition-all duration-500 select-none [background-size:200%] hover:[background-position:-100%] focus:focus-visible:outline-none"
          >
            Contact Me!
          </a>
          <MobileNavMenu />
        </div>
      </Container>
    </nav>
  );
};

export default FixedNav;
