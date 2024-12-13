import Arrows from "../components/Arrows/Arrows"
import Button from "../components/Button/Button"
import ButtonGift from "../components/ButtonGift/ButtonGift"
import Carousel from "../components/Carousel/Carousel"
import Countdown from "../components/Countdown/Countdown"
import CurvedBottomSection from "../components/CurvedBottomSection/CurvedBottomSection"
import CurvedTopSection from "../components/CurvedTopSection/CurvedSection"
import ImageComponent from "../components/ImageComponent/ImageComponent"
import InfoSection from "../components/InfoSection/InfoSection"
import MainHeadline from "../components/MainHeadline/MainHeadline"
import Portrait from "../components/Portrait/Portrait"
import Spinner from "../components/Spinner/Spinner"
import { useContext } from "react"
import { ModalContext } from "../context/ModalContext"
import ModalContainer from "../components/ModalContainer/ModalContainer"
import ModalAccounts from "../components/ModalAccounts/ModalAccounts"
import ModalConfirm from "../components/ModalConfirm/ModalConfirm"
import ModalWeather from "../components/ModalWeather/ModalWeather"
import SectionContainer from "../components/SectionContainer/SectionContainer"
import SectionContainerElement from "../components/SectionContainerElement/SectionContainerElement"


const Layout = () => {

   const { modal, confirmationModal, weatherModal, sent } = useContext(ModalContext);

   return (
      <div className={` relative flex flex-col items-center overflow-hidden
         ${confirmationModal || weatherModal || modal ? ' h-screen' : 'h-min-screen'} `
      }>

         {/* <ButtonGift /> */}

         {/* Modals --------------------------------------- */}
         <ModalContainer isOpen={modal}>
            <ModalAccounts />
         </ModalContainer>

         <ModalContainer isOpen={weatherModal}>
            <ModalWeather />
         </ModalContainer>

         <ModalContainer isOpen={confirmationModal}>
            <ModalConfirm />
         </ModalContainer>

         {/* 1° Portrait Section --------------------------------------- */}
         <section className="relative flex flex-col items-center w-full h-[100vh] text-sm bg-cream pt-8 px-8 overflow-hidden z-20">
            <Spinner />
            <Portrait />
            <MainHeadline />
            <Arrows id="countdown"/>
            <CurvedTopSection bgColor={"bg-[#800000]"} />
         </section>

         {/* 2° Countdown, maps and schelude section --------------------------------------- */}
         <section className="relative flex flex-col items-center justify-center w-full bg-[#800000] h-fit px-8 pb-4 z-30
            lg:px-8 lg:pb-20">

               <a href="#countdown">  <Countdown /></a>
            {/* <Button
               buttonText={ 'Schedule' }
               colorCode={"bg-green"}
               url={'calendar'}
            /> */}

            {/* Church and party container ---------- */}
            <SectionContainer>

               {/* Church section ---------- */}
               <SectionContainerElement>
                  <ImageComponent
                     src={"/assets/images/church-icon.png"}
                     alt={"church icon"}
                  />
                  <InfoSection
                     header={"Time | 17:00 pm"}
                     subtitle={"Graduation Ceremony"}
                     lineColorCode={"border-green"}
                  >
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur et minima dolorem veritatis officia tempora?
                  </InfoSection>
                  <Button
                     buttonText={"Button 1"}
                     colorCode={"bg-green"}
                  // url={'church'}
                  />
               </SectionContainerElement>

               {/* Party section ---------- */}
               <SectionContainerElement>
                  <ImageComponent
                     src={"/assets/images/music-icon.png"}
                     alt={"Icono música"}
                  />
                  <InfoSection
                     header={"Time | 19:00 pm"}
                     subtitle={"Fun Games"}
                     lineColorCode={"border-green"}
                  >
                     Minus unde, perferendis modi eum quos animi rem laudantium tempore recusandae temporibus deserunt non omnis.
                  </InfoSection>
                  <Button
                     buttonText={"Button 2"}
                     colorCode={"bg-green"}
                  // url={'salon'}
                  />
               </SectionContainerElement>

               {/* Present section (only Desktop) ---------- */}
               <SectionContainerElement >
                  <ImageComponent
                     src={"/assets/images/plane-icon.png"}
                     alt={"plane icon"}
                  />
                  <InfoSection
                     header={"Time | 21:00 pm"}
                     subtitle={"Speech"}
                     lineColorCode={"border-green"}
                  >
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur et minima dolorem veritatis officia tempora?

                  </InfoSection>
                  <Button
                     buttonText={'Button 3'}
                     colorCode={'bg-green'}
                     // url={false}
                     action={'openInfoModal'}
                  />
               </SectionContainerElement>


            </SectionContainer>

         </section>

         {/* 3° Music & clothes section --------------------------------------- */}


         {/* 4° Confirmation section --------------------------------------- */}
         <section className="relative flex flex-col items-center h-fit w-full text-sm bg-cream px-8 z-20
            sm:pb-24 md:pb-0 md:px-0">

            {/* Confirmation and present container ---------- */}


            <section className="hidden lg:flex lg:w-full lg:justify-center">
               <Carousel />
            </section>


         </section>

         {/* 5° Carousel section --------------------------------------- */}
         <section className="relative flex justify-center items-end bg-cream w-full z-20
            sm:hidden">
            <Carousel />
         </section>


      </div>
   );
}

export default Layout