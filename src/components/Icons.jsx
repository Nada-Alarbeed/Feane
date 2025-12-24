import { FaUserAlt } from "react-icons/fa"
import { FaCartShopping } from "react-icons/fa6"
import { FaSearch } from "react-icons/fa";
import Button from "../components/Button"
import DarkMoodToggle from "../hooks/DarkMoodToggle";
const ICONS = [
    {
        icon:<FaUserAlt size={17} className="text-white duration-300 hover:text-yellow transition-colors"/>,
        link: "#",
       
    },
    {
        icon:<FaCartShopping size={17} className="text-white duration-300 hover:text-yellow transition-colors"/>,
        link: "#",
       
    },
    {
        icon:<FaSearch  size={17} className="text-white duration-300 hover:text-yellow transition-colors" />,
        link: "#",
     
    },
  
]

 const Icons = () => {
    return(
        <ul className="flex justify-center items-center  gap-4 text-white" >
    {ICONS.map((e,i)=>(
      <li key={i}>
       <a href={e.link}>{e.icon}</a> 
      </li>
    ))}
    <div className="float-animation">

    <Button text="Order Online" />
    </div>
    <DarkMoodToggle />

        </ul>
    )
   
  
}
export default Icons