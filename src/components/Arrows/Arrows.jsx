const Arrows = () => {
   const handleScroll = () => {
      const countdownElement = document.getElementById("countdown");
      if (countdownElement) {
         countdownElement.scrollIntoView({ behavior: "smooth" });
      }
   };

   return (
      <div className="animate-bounce absolute bottom-16 z-50" onClick={handleScroll}>
         <img src="/assets/images/arrows-icon.png" alt="Icono flechas" />
      </div>
   );
};

export default Arrows;
