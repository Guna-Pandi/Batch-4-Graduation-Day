import './Carousel.css'
const Carousel = () => {

   return (
      <section className='flex justify-center items-baseline relative z-40 w-[400px] h-72 pt-12 overflow-hidden
         lg:w-full lg:h-96 lg:pt-6 '>
         < img src="/assets/photos/img-01.jfif" className="pic01"/>
         < img src="/assets/photos/img-02.jfif" className="pic02"/>
         < img src="/assets/photos/img-03.jfif" className="pic03"/>
         < img src="/assets/photos/img-04.jfif" className="pic04"/>
         < img src="/assets/photos/img-05.jfif" className='pic05'/>
      </section>
   )
}

export default Carousel