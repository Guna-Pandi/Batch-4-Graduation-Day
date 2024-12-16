import Arrows from "../components/Arrows/Arrows";
// import Button from "../components/Button/Button";
// import ButtonGift from "../components/ButtonGift/ButtonGift"
import Carousel from "../components/Carousel/Carousel";
import Countdown from "../components/Countdown/Countdown";
// import CurvedBottomSection from "../components/CurvedBottomSection/CurvedBottomSection"
import CurvedTopSection from "../components/CurvedTopSection/CurvedSection";
import ImageComponent from "../components/ImageComponent/ImageComponent";
import InfoSection from "../components/InfoSection/InfoSection";
import MainHeadline from "../components/MainHeadline/MainHeadline";
import Portrait from "../components/Portrait/Portrait";
import Spinner from "../components/Spinner/Spinner";
import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";
import ModalContainer from "../components/ModalContainer/ModalContainer";
import ModalAccounts from "../components/ModalAccounts/ModalAccounts";
import ModalConfirm from "../components/ModalConfirm/ModalConfirm";
import ModalWeather from "../components/ModalWeather/ModalWeather";
import SectionContainer from "../components/SectionContainer/SectionContainer";
import SectionContainerElement from "../components/SectionContainerElement/SectionContainerElement";
import Popper from "../components/Popper/Confetti";

const Layout = () => {
  const { modal, confirmationModal, weatherModal, sent } =
    useContext(ModalContext);

  return (
    <div
      className={` relative flex flex-col items-center overflow-hidden
         ${
           confirmationModal || weatherModal || modal
             ? " h-screen"
             : "h-min-screen"
         } `}
    >
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
        <Popper />
        <MainHeadline />
        <Popper />
        <Arrows id="countdown" />
        <Popper />
        <CurvedTopSection bgColor={"bg-[#800000]"} />
      </section>

      {/* 2° Countdown, maps and schelude section --------------------------------------- */}
      <section
        className="relative flex flex-col items-center justify-center w-full bg-[#800000] h-fit px-8 pb-4 z-30
            lg:px-8 lg:pb-20"
      >
        <a href="#countdown">
          {" "}
          <Countdown />
        </a>
        {/* <Button
               buttonText={ 'Schedule' }
               colorCode={"bg-green"}
               url={'calendar'}
            /> */}

        {/* Church and party container ---------- */}
        <SectionContainer>
          {/* Party section ---------- */}
          <SectionContainerElement>
            <ImageComponent
              src={"/assets/images/music-icon.png"}
              alt={"Icono música"}
            />
            <InfoSection
              header={"Time | 1:30 - 3:30 pm"}
              subtitle={"Venue | Board Room"}
              lineColorCode={"border-white"}
            >
              Join us as we celebrate the milestone of our graduation day—a
              moment of pride, reflection, and new beginnings. Together, we'll
              honor achievements, share inspiring moments, and embrace the
              journey ahead with unity and optimism.
            </InfoSection>
            {/* <Button
              buttonText={"Know More...!"}
              colorCode={"bg-green"}
              action={"openWeatherModal"}
            /> */}
          </SectionContainerElement>

          {/* Present section (only Desktop) ---------- */}
          <SectionContainerElement>
            <ImageComponent
              src={"/assets/images/plane-icon.png"}
              alt={"plane icon"}
            />
            <InfoSection
              header={"Time | 4:30 - 6:00 pm"}
              subtitle={"Venue | Beta Room"}
              lineColorCode={"border-white"}
            >
              Fun games are organized to bring everyone together, fostering team
              spirit and creating a lively atmosphere. They offer a perfect
              opportunity to unwind, celebrate, and strengthen bonds after the
              award ceremony
            </InfoSection>
            {/* <Button
              buttonText={"Know More...!"}
              colorCode={"bg-green"}
              // url={false}
              action={"openInfoModal"}
            /> */}
          </SectionContainerElement>
        </SectionContainer>
      </section>

      {/* 3° Music & clothes section --------------------------------------- */}

      {/* 4° Confirmation section --------------------------------------- */}
      <section
        className="relative flex flex-col items-center h-fit w-full text-sm bg-cream px-8 z-20
            sm:pb-24 md:pb-0 md:px-0"
      >
        {/* Confirmation and present container ---------- */}

        <section className="hidden lg:flex lg:w-full lg:justify-center">
          <Carousel />
        </section>
      </section>

      {/* 5° Carousel section --------------------------------------- */}
      <section
        className="relative flex justify-center items-end bg-cream w-full z-20
            sm:hidden"
      >
        <Carousel />
      </section>
    </div>
  );
};

export default Layout;
