import Button from "../components/Button"

const Offer = ({img,title,price,offText}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-start sm:items-start justify-center items-center gap-5 py-5 px-4 min-w-px bg-gray dark:bg-white2 dark:shadow-babyGray2 dark:shadow-lg rounded-[.3rem]" >
      <div className="w-43.75 h-43.75 border-5 rounded-full border-yellow overflow-hidden "data-aos="fade-up"  data-aos-duration="800" data-aos-delay="200">
        <img 
          src={img} 
          alt="Order" 
          loading="lazy" 
          className="object-cover w-full h-full duration-300 hover:scale-110"
        />
      </div>
      
      <div className="flex flex-col items-center sm:items-start mt-0 sm:mt-4 gap-1 text-center sm:text-left" data-aos="fade-up"  data-aos-duration="800" data-aos-delay="400" >
        <h3 className="font-dancing text-2xl text-white dark:text-gray font-semibold">{title}</h3>
        <span className="font-dancing text-[2.5rem] font-bold text-white dark:text-gray">
          {price}   
          <sub className="text-[1rem] align-baseline    animate-pulse">{offText}</sub>
        </span>
        
        <div className="mt-2 float-animation " data-aos="fade-up"
         data-aos-delay="600"
          data-aos-duration="500">
          <Button text="Order Now" icon={true} />
        </div>
      </div>
    </div>
  )
}

export default Offer