import React from 'react';

const Section2Content = () => {
  return (
    <div
      className="section2-content"
      style={{
        position: "relative",
        zIndex: 2,
        color: "#ffffff",
        padding: "8% 0%",
        // marginTop: "40rem",
        margin: "30rem 10px"
      }}
    >
      <h1
        className="text text-1xl md:text-2xl lg:text-3xl text-left lg:text-center"
        style={{
          fontWeight: "bold",
          textTransform: "uppercase",
          fontFamily: "Oswald, sans-serif",
          lineHeight: "1.3",
          transform: "scaleY(1.3)",
        }}
      >
        Applying a cross-disciplinary expertise in crafting and executing tech-based solutions to optimize industrial operations.
      </h1>
    </div>
  );
};

export default Section2Content;
