import "./Spinner.css";

const Spinner = () => {
  return (
    <div
      className=" h-[120px] w-[90px] 
    absolute top-[0px]
     left-[60px] z-50 flex justify-center rounded-b-full p-3.5 bg-opacity-50 bg-white items-center lg:top-0 lg:left-4 "
    >
      <img
        src="/assets/images/rounded-text.png"
        alt="Espiral animada"
        className="lg:flex  "
      />
    </div>
  );
};

export default Spinner;
