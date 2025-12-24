import { useRef } from 'react';
import client1 from "../assets/client1.jpg"
import client2 from "../assets/client2.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ButtonRound from "../components/ButtonRound"
const FeedBacksSlide = () => {
  const feedbacks = [
    {
      id: 1,
      text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      name: "Moana Michell",
      role: "magna aliqua",
      img: client1,
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      name: "Mike Hamell",
      role: "magna aliqua",
      img: client2
    },
     {
      id: 3,
      text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      name: "Moana Michell",
      role: "magna aliqua",
      img: client1,
    },
    {
      id: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      name: "Mike Hamell",
      role: "magna aliqua",
      img: client2
    },
   
  ];

  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="relative">
      <Swiper
        ref={swiperRef}
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1} 
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true 
        }}
        loop={true}
        speed={300} 
       breakpoints={{
  640: { 
    slidesPerView: 1, 
    spaceBetween: 20 
  },
  768: { 
    slidesPerView: 1, 
    spaceBetween: 25 
  },
  1000: { 
    slidesPerView: 2, 
    spaceBetween: 30 
  },
  1200: { 
    slidesPerView: 2, 
    spaceBetween: 35 
  },
}}
      >
        {feedbacks.map((e) => (
          <SwiperSlide key={e.id}>
            <div className="flex flex-col  gap-7 justify-start items-start mt-8">
              <div className="bg-gray dark:bg-white2 p-6.25 text-white dark:text-gray rounded-md font-opensans flex flex-col flex-wrap gap-3">
                <p className="text-[.9rem] max-w-full">{e.text}</p>
                <div>
                  <p className="text-[1.1rem] font-semibold">{e.name}</p>
                  <span className="text-[.9rem]">{e.role}</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-7 h-4 bg-yellow [clip-path:polygon(50%_0%,0%_100%,100%_100%)]"></div>
                  </div>
                  <div className="w-28.75 h-28.75 rounded-full border-5 border-yellow-500 overflow-hidden">
                    <img 
                      src={e.img} 
                      alt={e.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center gap-3 mt-12">
        <ButtonRound 
      icon={<IoIosArrowBack size={25} className="text-white dark:text-gray" />}
      onClick={goPrev}
    />
    <ButtonRound 
      icon={<IoIosArrowForward size={25} className="text-white dark:text-gray" />}
      onClick={goNext}
    />
      </div>
    </div>
  );
};

export default FeedBacksSlide;