
// import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Splash from './Components/Splash';
import Home from './Components/Home'; // Your Home page component
import './App.css'; // Ensure this is the correct path to your CSS 
const App = () => {
  // useEffect(() => {
  //   // Cursor manipulation logic
  //   const cursor = document.querySelector("#cursor");
  //   const cursorBlur = document.querySelector("#cursor-blur");

  //   let mouseX = 0, mouseY = 0;
  //   let blurX = 0, blurY = 0;

  //   const onMouseMove = (event) => {
  //     mouseX = event.clientX;
  //     mouseY = event.clientY;
  //     cursor.style.left = `${mouseX}px`;
  //     cursor.style.top = `${mouseY}px`;
  //   };

  //   const animateCursorBlur = () => {
  //     blurX += (mouseX - blurX) * 0.1;
  //     blurY += (mouseY - blurY) * 0.1;
  //     cursorBlur.style.left = `${blurX}px`;
  //     cursorBlur.style.top = `${blurY}px`;
  //     requestAnimationFrame(animateCursorBlur);
  //   };

  //   // Add event listener for mousemove
  //   document.addEventListener("mousemove", onMouseMove);

  //   // Start the animation
  //   requestAnimationFrame(animateCursorBlur);

  //   // Cleanup the event listener on unmount
  //   return () => {
  //     document.removeEventListener("mousemove", onMouseMove);
  //   };
  // }, []);

  return (
    <>
      {/* Custom cursor elements */}
      {/* <div id="cursor"></div>
      <div id="cursor-blur"></div> */}

      {/* Router Setup */}
      <Router>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>

    </>
  );
};

export default App;

