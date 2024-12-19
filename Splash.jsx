import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Splash.css'; // Ensure this is the correct path to your CSS file

const Splash = () => {
  const [count, setCount] = useState(0);
  const [showLetters, setShowLetters] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false); // Track if animation is complete
  const navigate = useNavigate();

  // Start falling letters once the count reaches 100
  useEffect(() => {
    if (count === 100) {
      setShowLetters(true); // Trigger the falling letters animation
      // Wait for animation to finish and then navigate to home
      setTimeout(() => {
        setAnimationComplete(true);
      }, 2000); // Wait for animation to finish (adjust as necessary)
    }
  }, [count]);

  // Once animation is complete, navigate to the home page
  useEffect(() => {
    if (animationComplete) {
      navigate('/home'); // Navigate to home after animation is complete
    }
  }, [animationComplete, navigate]);

  // Increment the count until it reaches 100
  useEffect(() => {
    if (count < 100) {
      const interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 20); // Increment every 50ms
      return () => clearInterval(interval);
    }
  }, [count]);

  return (
    <div className="container">
      <div className="count-display">
        <p>
          {showLetters ? (
            "USTA 100%".split("").map((letter, index) => (
              <span
                key={index}
                className="letter"
                style={{
                  animationDelay: `${index * 0.1}s`, // Stagger the fall
                }}
              >
                {letter}
              </span>
            ))
          ) : (
            `USTA ${count}%`
          )}
        </p>
      </div>
    </div>
  );
};

export default Splash;
