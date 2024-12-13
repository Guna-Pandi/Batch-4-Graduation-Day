const MainHeadline = () => {
   return (
      <section className="z-50 flex flex-col items-center gap-5 absolute inset-0 mx-auto  top-[40%] lg:top-[35%]">
         <div className=" bg-cream bg-opacity-50 w-[100%]  rounded-md ">
            {/* <img src="/assets/images/header-tittle-mobile.png" alt="" className="w-52  lg:w-64" /> */}
            <h3 className="text-center text-[#800000] text-[22px] mb-5 m-5 drop-shadow-lg lg:text-5xl font-bold" 
             style={{
               textShadow: "2px 2px 0 #fff, -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff", // White border
             }}>
               Batch 4
            </h3>
            {/* <img src="/assets/images/names.png" alt="" className=" h-44 lg:w-96"/> */}
            <h3
               className="text-center text-[#fff8f8] text-[22px] mb-6 drop-shadow-lg lg:text-6xl font-bold"
               style={{
                  textShadow: "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000", // Black border
               }}
            >
               Graduation Day
            </h3>

            {/* <hr className="w-44 border-2 text-white " /> */}
            <h3 className="text-center text-white font-semibold text-[22px] mb-8 drop-shadow-lg lg:text-[28px]"  style={{
                  textShadow: "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000", // Black border
               }}>
               18 Dec 2024
            </h3>
            {/* <hr className="w-44 border-2 text-white" />/ */}
         </div>


      </section>
   )
}

export default MainHeadline