"use client";

import React, { useEffect, useState, useRef } from "react";

export function BackgroundGrid () {
  const overlayRef = useRef<HTMLDivElement>(null);

  const setContainerHeight = () => {
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

  // Observe document scrollHeight and update the background height when it changes.
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const update = () => setScrollHeight(document.documentElement.scrollHeight);

    const observer = new MutationObserver(update);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true,
    });

    window.addEventListener("resize", update);

    // cleanup
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    setContainerHeight();
  }, [scrollHeight]);

  return (
    <div
      ref={overlayRef}
      className="absolute top-0 left-0 w-full -z-10 overflow-hidden"
      style={{
        backgroundImage: "url(/background-grid.svg)",
        backgroundSize: "4rem",
        maskImage:
          "linear-gradient(to bottom, transparent 3rem, black 9rem)",
        maskMode: "alpha",
        maskRepeat: "no-repeat",
        maskSize: "100% 100%",
      }}
    />
  );
};