"use client";

import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { LuAlignRight } from "react-icons/lu";

const NAVLINKS = ["Projects", "Experience", "Skills", "Contact"];

const MobileNavMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {!open ? (
        <LuAlignRight
          className="flex lg:hidden w-[2.5rem] h-[2.5rem] text-white hover:text-gray-300 cursor-pointer"
          onClick={() => setOpen(true)}
        />
      ) : (
        <IoMdClose
          className="flex lg:hidden w-[2.5rem] h-[2.5rem] text-white hover:text-gray-300 cursor-pointer"
          onClick={() => setOpen(false)}
        />
      )}

      {open && (
        <aside className="top-[128px] left-0 z-20 fixed flex flex-col lg:hidden bg-[#130b23] w-screen h-[calc(100dvh-128px)]">
          <ul className="flex flex-col gap-4 px-10 py-6">
            {NAVLINKS.map((link) => (
              <li
                key={link}
                className="after:block inline-block after:bg-white after:bg-opacity-50 after:-mt-1 w-max after:w-full after:h-2 font-semibold text-[25px] text-white sm:text-3xl hover:text-cyan-300 after:[transform-origin:left] transition-colors after:transition-transform after:duration-200 cursor-pointer select-none after:scale-x-0 hover:after:scale-x-100"
              >
                {link}
              </li>
            ))}
          </ul>
        </aside>
      )}
    </>
  );
};

export default MobileNavMenu;
