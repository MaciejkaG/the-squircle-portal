"use client";

import React, { useEffect, useRef } from "react";

export function BackgroundGrid() {
  const overlayRef = useRef<HTMLDivElement>(null);

  const updateHeight = () => {
    if (!overlayRef.current) return;

    // Temporarily reset height to get accurate content height
    overlayRef.current.style.height = "0px";

    const fullHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );

    overlayRef.current.style.height = `${fullHeight}px`;
  };

  useEffect(() => {
    // Initial height set
    updateHeight();

    // ResizeObserver for body and documentElement
    const resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });

    resizeObserver.observe(document.body);
    resizeObserver.observe(document.documentElement);

    // MutationObserver for DOM changes that might affect height
    const mutationObserver = new MutationObserver(() => {
      // Use requestAnimationFrame to ensure DOM has been updated
      requestAnimationFrame(updateHeight);
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true,
    });

    // Window resize handler
    const handleResize = () => updateHeight();
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      resizeObserver.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      className="absolute top-0 left-0 w-full -z-10 overflow-hidden"
      style={{
        backgroundImage: "url(/background-grid.svg)",
        backgroundSize: "4rem",
        maskImage: "linear-gradient(to bottom, transparent 3rem, black 9rem)",
        maskMode: "alpha",
        maskRepeat: "no-repeat",
        maskSize: "100% 100%",
      }}
    />
  );
}
