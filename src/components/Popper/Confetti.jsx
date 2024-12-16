import React from "react"; // Required for React <17
import "./Confetti.css"; // Add the CSS below

const Confetti = () => {
  return (
    <div className="confetti">
      {Array.from({ length: 13 }).map((_, i) => (
        <div key={i} className="confetti-piece"></div>
      ))}
    </div>
  );
};

export default Confetti;
