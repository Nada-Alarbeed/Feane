import { useEffect, useState } from "react"
import { IoMoonSharp, IoSunnySharp } from "react-icons/io5";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark"; 
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      root.classList.remove("light");
      localStorage.setItem("theme", "dark")
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
      localStorage.setItem("theme", "light")
    }
  }, [darkMode])

  return (
    <button className="text-white"
      onClick={() => setDarkMode((prev) => !prev)}
    >
      {darkMode ? <IoSunnySharp size={27} /> : <IoMoonSharp size={27} />}
    </button>
  )
}

export default DarkModeToggle