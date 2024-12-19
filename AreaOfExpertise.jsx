import React from "react";
import "../AreaOfExpertise.css";

const AreaOfExpertise = () => {

  return (
    <div class="marquee-w">
    <div class="marquee">
        <span className="text-6xl md:text-7xl lg:text-8xl"
        style={{
          fontWeight: "900",
          textTransform: "uppercase",
          transform: "scaleY(1.4)",
          color: "transparent",
          WebkitTextStroke: "1px white",
          lineHeight: "1.5",
        }}>Area of expertise&nbsp;&nbsp;&nbsp;</span>
    </div>
    <div class="marquee marquee2">
        <span className="text-6xl md:text-7xl lg:text-8xl"
        style={{
          fontWeight: "900",
          textTransform: "uppercase",
          transform: "scaleY(1.4)",
          color: "transparent",
          WebkitTextStroke: "1.5px white",
          margin: "0",
          lineHeight: "1.5",
        }}>Area of expertise&nbsp;&nbsp;&nbsp;</span>
    </div>
</div>
  );
};

export default AreaOfExpertise;
