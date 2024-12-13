import React, { useState, useEffect } from "react";
import "./Portrait.css";

const Portrait = () => {
   // State to toggle between the two images
   // const [currentImage, setCurrentImage] = useState(0);

   // // Array of background images
   // const images = [
   //    "/assets/photos/main-img2.png",
   //    "/assets/photos/main-pic.png"
   // ];

   // useEffect(() => {
   //    // Switch images every 2 seconds
   //    const interval = setInterval(() => {
   //       setCurrentImage((prevImage) => (prevImage + 1) % images.length);
   //    }, 1000);

   //    // Cleanup the interval on component unmount
   //    return () => clearInterval(interval);
   // }, [images.length]);

   return (
      <div
         className="main-pic"
         style={{
            backgroundImage: `url("/assets/photos/Main-pic.jfif")`,
         }}
      ></div>
   );
};

export default Portrait;
