import './Button.css'
import AnimatedElement from "../AnimatedElement/AnimatedElement"
import { ModalContext } from "../../context/ModalContext"
import { useContext } from "react"

const Button = ( { buttonText, colorCode, url, action, disabled } ) => {
   
   const { setModal, setConfirmationModal, setWeatherModal, sent } = useContext(ModalContext);

   const handleForm = () => {
      switch(action) {
         case 'openWeatherModal':
            setWeatherModal(true);
            break;
         case 'openConfirmationModal':
            setConfirmationModal(true);
            break;
         case 'openInfoModal':
            setModal(true);
            break;
      }
   };

   const handleUrl = (url) => {
      const urlMapping = {
         calendar: '',
         salon: '',
         church: '',
         spotify: '',
      };
      if (url in urlMapping) {
         setTimeout(() => {
            window.location.href = urlMapping[url];
         }, 500);
      }
   };

   return (
      <AnimatedElement>
         <button 
            onClick={ url ? () => handleUrl(url) : handleForm }
            disabled={ sent }
            type="button" 
            className={` unselectable bg-[#006666] w-64 text-lg active:bg-[#006666]
            ${colorCode}
            ${ colorCode === 'bg-mustard' ? 'btn-special' : 'btn-normal' }  `}
         >
            { buttonText }
         </button>
      </AnimatedElement>
   )
}

export default Button