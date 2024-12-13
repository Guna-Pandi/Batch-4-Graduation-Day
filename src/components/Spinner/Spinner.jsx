import './Spinner.css'

const Spinner = () => {
   return (

      <div className=" h-[180px] w-[180px] absolute top-[15px] -left-[40px] z-50 flex justify-center items-center lg:top-1 lg:left-4 ">
<div></div>
         <img
            src="/assets/images/rounded-text.png"
            alt="Espiral animada"
            className='lg:hidden ' />
         <img
            src="/assets/images/rounded-text.png"
            alt="Espiral animada"
            className='hidden lg:flex' />

      </div>

   )
}

export default Spinner