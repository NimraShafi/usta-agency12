import React, { useEffect } from "react";
import { gsap } from "gsap";

const Agency = () => {

  useEffect(() => {
    const timeline = gsap.timeline();
    timeline.fromTo(
      ".agency",
      {
        opacity: 0,
        y: "100%", 
        clipPath: "inset(100% 0 0 0)",
        rotation: 10,
      },
      {
        opacity: 1,
        y: "0%", 
        clipPath: "inset(0% 0 0 0)",
        rotation: 0,
        ease: "power3.out",
        duration: 1.2,
      }
    );

    timeline.fromTo(
      ".paragraph",
      {
        opacity: 0,
        y: "100%", 
        clipPath: "inset(100% 0 0 0)", 
        rotation: 10,
      },
      {
        opacity: 1,
        y: "0%",
        clipPath: "inset(0% 0 0 0)", 
        rotation: 0,
        ease: "power3.out",
        duration: 1.2,
        stagger: 0.05,
      },
      "-=1"
    );
  }, []);

  return (
    <div
      style={{
        position: "relative",
        zIndex: 2,
        color: "white",
        textAlign: "left",
        float: "right",
        padding: "8% 3%",
      }}
    >
      <h1
        className="agency your-text text-5xl md:text-6xl lg:text-7xl mb-4 md:mb-8"
        style={{
          fontWeight: "bolder",
          transform: "scaleY(1.4)",
          margin: "0",
          lineHeight: 1.5,
          textTransform: "uppercase",
        }}
      >
        agency
      </h1>
      
      <p
        className="paragraph text-5xl md:text-6xl lg:text-7xl"
        style={{
          fontSize: "1.55rem",
          fontWeight: "100",
          lineHeight: "1.4",
          maxWidth: "550px",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        We believe that the <strong>power of creativity, design and emotion</strong> is the Key to aligning businesses with their consumer's unique profiles.
      </p>
    </div>
  );
}

export default Agency;
