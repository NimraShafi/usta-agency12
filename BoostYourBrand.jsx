import React, { useEffect } from "react";
import { gsap } from "gsap";

const BoostYourBrand = () => {
  useEffect(() => {
    const timeline = gsap.timeline();
    timeline.fromTo(
      ".boost-text",
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
      ".your-text",
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

    timeline.fromTo(
      ".brand-text",
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
      className="animated-content"
      style={{
        position: "relative",
        zIndex: 2,
        color: "white",
        textAlign: "left",
        padding: "8% 3%",
      }}
    >
      <h1
        className="boost-text text-5xl md:text-6xl lg:text-7xl"
        style={{
          fontWeight: "900",
          textTransform: "uppercase",
          transform: "scaleY(1.4)",
          color: "transparent",
          WebkitTextStroke: "2px white",
          margin: "0",
          lineHeight: "1.5",
        }}
      >
        BOOST
      </h1>

      
      <h1
      className=" your-text text-5xl md:text-6xl lg:text-7xl"
        style={{
          fontWeight: "bolder",
          transform: "scaleY(1.4)",
          margin: "0",
          lineHeight:0.9,
        }}
      >
     YOUR
      </h1>
      
      <h1
      className=" your-text text-5xl md:text-6xl lg:text-7xl"
        style={{
          fontWeight: "bolder",
          transform: "scaleY(1.4)",
          margin: "0",
          lineHeight:1.5,
        }}
      >
     BRAND
      </h1>
      <p
        className="paragraph text-5xl md:text-6xl lg:text-7xl"
        style={{
          fontSize: "1.65rem",
          fontWeight: "100",
          lineHeight: "1.6",
          maxWidth: "600px",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        We create <strong>digital experiences</strong> at the intersection between{" "}
        <strong>design</strong> and <strong>technology</strong>, helping our clients to{" "}
        <strong>imagine the future</strong>, today.
      </p>
    </div>




  );
};

export default BoostYourBrand;
