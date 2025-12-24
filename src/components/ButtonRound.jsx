import { FaShoppingCart } from "react-icons/fa"

 const ButtonRound = ({icon=<FaShoppingCart size={17} className="text-white dark:text-black" /> ,onClick}) => {
  return (
     <button className="w-10 h-10  bg-yellow text-white rounded-full flex justify-center items-center duration-300 hover:bg-yellowForHover cursor-pointer"  onClick={onClick}>
            {icon }
            </button>
  )
}
export default ButtonRound