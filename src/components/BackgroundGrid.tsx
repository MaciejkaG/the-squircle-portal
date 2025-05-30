"use client";

import React, { useEffect, useRef } from "react";

export function BackgroundGrid () {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setOverlayHeight = () => {
      const fullHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );

      if (overlayRef.current) {
        overlayRef.current.style.height = `${fullHeight}px`;
      }
    };

    setOverlayHeight();
    window.addEventListener("resize", setOverlayHeight);

    return () => {
      window.removeEventListener("resize", setOverlayHeight);
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      className="absolute top-0 left-0 w-full -z-10"
      style={{
        background: "url(/background-grid.svg)",
        backgroundSize: "4rem",
        maskImage:
          "linear-gradient(to bottom,  transparent 3rem, black 6rem, black calc(100% - 7.5rem), transparent calc(100% - 4.5rem))",
        maskMode: "alpha",
        maskRepeat: "no-repeat",
        maskSize: "100% 100%",
      }}
    />
  );
};