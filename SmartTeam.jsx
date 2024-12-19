import React from 'react'

const SmartTeam = () => {
  return (
    <div
    style={{
      position: "relative",
      zIndex: 2,
      color: "white",
      textAlign: "left",
      float: "right",
      padding: "8% 3%",
      margin: "40% 0",
      width:"100%",
      right:"0%"
    }}
  >
    <h1
      className="text-5xl md:text-6xl lg:text-7xl mb-4 md:mb-8"
      style={{
        fontWeight: "bolder",
        transform: "scaleY(1.4)",
        margin: "0",
        lineHeight: 1,
        textTransform: "uppercase",
      }}
    >
      our
    </h1>
    <h1
        className="text-5xl md:text-6xl lg:text-7xl"
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
        smart
      </h1>
    <h1
      className="text-5xl md:text-6xl lg:text-7xl mb-4 md:mb-8"
      style={{
        fontWeight: "bolder",
        transform: "scaleY(1.4)",
        margin: "0",
        lineHeight: 1.2,
        textTransform: "uppercase",
      }}
    >
      team
    </h1>
    <p
      className="paragraph text-5xl md:text-6xl lg:text-7xl"
      style={{
        fontSize: "1.55rem",
        fontWeight: "100",
        lineHeight: "1.4",
        maxWidth: "550px",
        fontFamily: "Montserrat, sans-serif",
        marginTop:"10px"
      }}
    >
     <strong>Living well to work better.</strong>  Committed to solid and ethical collaborations in a <strong>remote working</strong> environment, we ensure our structure is <strong>dynamically scalable</strong> , tailored to each project's unique requirements.
    </p>
  </div>
  )
}

export default SmartTeam