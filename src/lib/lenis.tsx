"use client";
import React, { PropsWithChildren, useEffect } from "react";
import Lenis from "lenis";

const LenisProvider = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <main>{children}</main>;
};

export default LenisProvider;
