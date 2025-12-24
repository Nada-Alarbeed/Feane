import { useState } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from "../components/Button"
import 'swiper/css';
import 'swiper/css/autoplay';

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: "Fast Food Restaurant",
      description: "Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.",
      button: "Order Now"
    },
    {
      id: 2,
      title: "Fast Food Restaurant",
      description: "Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.",
      button: "Order Now"
    },
    {
      id: 3,
      title: "Fast Food Restaurant",
      description: "Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.",
      button: "Order Now"
    }
  ];

  return (
    <div className="w-full mt-18 flex flex-col">
    
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
        onSwiper={(swiper) => setCurrentSlide(swiper.realIndex)}
        effect="slide"
        direction="horizontal"
        speed={800}
        loop={true}
        navigation={false}
        className="w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="w-full">
              <h1 className="text-[3.5rem] font-bold font-dancing text-white mb-3 " >
                {slide.title}
              </h1>
              
              <p className="text-[.9rem] text-white font-opensans mb-10 max-w-xl leading-relaxed">
                {slide.description}
              </p>
              <Button text="Order Now" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
         <div className="flex  lg:mt-35 max-sm:mt-25 max-sm:mb-25" style={{ paddingLeft: '10px' }}>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const swiper = document.querySelector('.swiper').swiper;
                swiper.slideToLoop(index);
              }}
              className={`w-5 h-5 cursor-pointer rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-yellow scale-100' 
                  : 'bg-white opacity-100 scale-60'
              }`}
            />
          ))}
         
      </div>
    </div>
  );
}