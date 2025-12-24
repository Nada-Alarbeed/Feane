import ButtonRound from "../components/ButtonRound"

const MenuData = ({img,title,p,price}) => {
  return (
    <div className="flex flex-col bg-gray dark:bg-white2  rounded-xl overflow-hidden min-h-100" data-aos="zoom-in-left" data-aos-duration="500">
      <div className="h-72 bg-white3 dark:bg-yellow flex justify-center items-center  
        [clip-path:inset(-10px_-10px_20%_-10px_round_0_0_0_70px)]">
        <div className="w-full h-full flex items-center justify-center " >
          <img src={img} alt={title} loading="lazy" 
            className="object-contain w-full -mt-7 max-w-xs max-h-36.25 duration-300 hover:scale-110"  />
        </div>
      </div>

       <div className="py-3.75 px-6 " >
        <div className="flex flex-col gap-3 -mt-10">
          
            <h3 className="font-opensans text-white dark:text-gray text-xl font-bold ">{title}</h3>
            <p className="font-opensans text-white dark:text-gray text-[1rem] ">{p}</p>
          
         
          <div className="flex justify-between items-center ">
            <span className="text-[1.2rem] text-white dark:text-gray font-bold">{price}</span>
            <ButtonRound/>
          </div>
         
        </div>
      </div>
    </div>
  )
}
export default MenuData
