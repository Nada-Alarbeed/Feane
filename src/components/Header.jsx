import { useState } from "react";
import Icons from "../components/Icons";
import { IoClose, IoMenu } from "react-icons/io5";

const LINKS = [
  { link: "#home", text: "HOME" },
  { link: "#menu", text: "MENU" },
  { link: "#about", text: "ABOUT" },
  { link: "#book", text: "BOOK TABLE" } 
];

const Header = () => {
  const [Active, setActive] = useState("#home");
  const [isActive, setIsActive] = useState(false);

  const handleLinkClick = (link) => {
    setActive(link);
    setIsActive(false);
  };

  return (
    <> 
      <header className="flex justify-between items-center gap-3 py-6"  data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
        <span className="font-dancing text-[2rem] text-white  font-bold cursor-pointer">Feane</span>
        
        <button 
          onClick={() => setIsActive(!isActive)}
          className="lg:hidden text-white p-2 relative"
          aria-label="Toggle menu"
        >
          <div className={`transition-transform duration-200 ${isActive ? 'rotate-360 opacity-0' : 'rotate-0 opacity-100'}`}>
            <IoMenu size={32} />
          </div>
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-200 ${isActive ? 'rotate-0 opacity-100' : '-rotate-360 opacity-0'}`}>
            <IoClose size={32} />
          </div>
        </button>
        
        <nav className="hidden lg:block">
          <ul className="flex justify-center items-center  text-[1.1rem]">
            {LINKS.map((e, i) => (
              <li key={i}>
                <a 
                  onClick={() => setActive(e.link)}
                  className={`px-6 py-2 text-[1rem] cursor-pointer rounded-full transition-all duration-300 ${
                    Active === e.link
                      ? 'text-yellow'
                      : 'text-white duration-300 hover:text-yellow'
                  }`}
                  href={e.link}
                >
                  {e.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="hidden lg:block">
          <Icons />
          
        </div>
      </header>

      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
        isActive ? "max-h-96" : "max-h-0 "
      }`}>
        <div className={`transition-all duration-300 ${isActive ? "opacity-100" : "opacity-0"}`}>
          <nav>
            <ul className="flex flex-col justify-center gap-3 items-center text-[1rem]">
              {LINKS.map((e, i) => (
                <li key={i}>
                  <a 
                    onClick={() => handleLinkClick(e.link)}
                    className={`px-6 py-2 text-[1rem] cursor-pointer rounded-full transition-all duration-300 ${
                      Active === e.link
                        ? 'text-yellow'
                        : 'text-white duration-300 hover:text-yellow'
                    }`}
                    href={e.link}
                  >
                    {e.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex justify-center mt-4">
            <Icons />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;