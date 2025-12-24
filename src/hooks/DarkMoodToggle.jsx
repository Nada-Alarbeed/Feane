 import { useEffect,useState } from "react"
import { IoMoonSharp, IoSunnySharp } from "react-icons/io5";
 const DarkMoodToggle = () => {
  const[darkMode,setDarkMode]=useState(
   ()=>localStorage.getItem("theme")==="dark"
  );
  useEffect(()=>{
    const root=document.documentElement;
    if(darkMode){
        root.classList.add("dark");
        localStorage.setItem("theme","dark")
    }else{
        root.classList.remove("dark")
        root.classList.add("theme","light")
    }
  },[darkMode])


  return (
    <button className=" text-white  "
    onClick={()=>setDarkMode((prev)=>!prev)}
    >
   {darkMode?<IoSunnySharp size={27}/>:< IoMoonSharp size={27}/>}
    </button>
  )
}
export default DarkMoodToggle