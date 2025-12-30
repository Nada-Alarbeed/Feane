import { FaShoppingCart } from "react-icons/fa"

const Button = ({ text, icon = false,type = "button",onClick  }) => {
  return (
    <button  type={type}  onClick={onClick} className="flex justify-center items-center cursor-pointer bg-yellow text-white dark:text-black text-[1rem] rounded-full duration-300 hover:bg-yellowForHover flex-nowrap">
      <span className="px-10 py-2 flex items-center">
        {text}
        {icon && 
          <FaShoppingCart size={16} className="text-white dark:text-black ml-2" />
        }
      </span>
    </button>
  )
}

export default Button