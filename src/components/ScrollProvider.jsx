import React, { createContext, useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export const ScrollContext = createContext(0);

const ScrollProvider = ({ children }) => {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      smartphone: { smooth: true },
      tablet: { smooth: true },
      multiplier: 1,
    });

    scroll.on("scroll", (obj) => {
      setScrollProgress(obj.scroll.y / (obj.limit.y || 1));
    });

    return () => scroll.destroy();
  }, []);

  return (
    <ScrollContext.Provider value={scrollProgress}>
      <div ref={containerRef} data-scroll-container style={{ overflow: "hidden" }}>
        {children}
      </div>
    </ScrollContext.Provider>
  );
};

export default ScrollProvider;
