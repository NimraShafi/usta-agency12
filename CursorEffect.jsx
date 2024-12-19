import { useEffect } from 'react';
import gsap from 'gsap';

const CursorEffect = () => {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    const cursorBlur = document.getElementById('cursor-blur');

    // Variables to store mouse position
    let mouseX = 0, mouseY = 0;
    let blurX = 0, blurY = 0;

    // Function to update cursor position on mousemove
    const mouseMoveHandler = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    };

    // Function to animate the cursor blur position
    const animateCursorBlur = () => {
      blurX += (mouseX - blurX) * 0.1;
      blurY += (mouseY - blurY) * 0.1;
      cursorBlur.style.left = `${blurX}px`;
      cursorBlur.style.top = `${blurY}px`;
      requestAnimationFrame(animateCursorBlur);
    };

    // Function to scale the cursor on hover over li elements
    const scaleCursorOnLiHover = () => {
      gsap.to(cursor, { scale: 5.7, duration: 0.3 });
      gsap.to(cursorBlur, { scale: 1.5, duration: 0.3 });
    };

    // Function to reset cursor size after hover
    const resetCursorScale = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3 });
      gsap.to(cursorBlur, { scale: 1.5, duration: 0.3 });
    };

    // Function to scale the cursor on hover over the logo
    const scaleCursorOnLogoHover = () => {
      gsap.to(cursor, { scale: 25, duration: 0.3 });
      gsap.to(cursorBlur, { scale: 0, duration: 0.3 });
    };

    // Function to reset cursor size after hover over the logo
    const resetLogoCursorScale = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3 });
      gsap.to(cursorBlur, { scale: 1.5, duration: 0.3 });
    };

    // Attach mousemove event listener for tracking mouse position
    document.addEventListener('mousemove', mouseMoveHandler);

    // Start the blur animation
    requestAnimationFrame(animateCursorBlur);

    // Attach hover effect for li elements
    const liElements = document.querySelectorAll('li');
    liElements.forEach((li) => {
      li.addEventListener('mouseenter', scaleCursorOnLiHover);
      li.addEventListener('mouseleave', resetCursorScale);
    });

    // Attach hover effect for logo
    const logoElements = document.querySelectorAll('.logo');
    logoElements.forEach((logo) => {
      logo.addEventListener('mouseenter', scaleCursorOnLogoHover);
      logo.addEventListener('mouseleave', resetLogoCursorScale);
    });

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
      liElements.forEach((li) => {
        li.removeEventListener('mouseenter', scaleCursorOnLiHover);
        li.removeEventListener('mouseleave', resetCursorScale);
      });
      logoElements.forEach((logo) => {
        logo.removeEventListener('mouseenter', scaleCursorOnLogoHover);
        logo.removeEventListener('mouseleave', resetLogoCursorScale);
      });
    };
  }, []);

  return null;
};

export default CursorEffect;
