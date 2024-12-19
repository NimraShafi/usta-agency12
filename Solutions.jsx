import React from 'react';

const Solutions = () => {
  return (


<div
style={{
  position: "relative",
  zIndex: 2,
  color: "white",
  textAlign: "left",
  float: "right",
  padding: "8% 3%",
  margin: "60% 0"
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
  solutions
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
  We empower brands with <strong>innovative digital solutions</strong>, crafting <strong>user-centric experiences</strong> that enhance <strong>brand presence</strong> and drive <strong>business growth.</strong>
</p>
</div>
  );
};

export default Solutions;
