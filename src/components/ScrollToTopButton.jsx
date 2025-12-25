import { LuArrowUpFromDot } from "react-icons/lu";

const ScrollToTopButton = ({ isActive }) => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button 
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6  overflow-hidden ${isActive ? "translate-x-0" : "translate-x-25"} w-12 h-12 rounded-full bg-yellow text-white dark:text-gray flex items-center justify-center shadow-lg hover:bg-yellowForHover transition duration-300 z-40 cursor-pointer hover:scale-110`}
        >
         <LuArrowUpFromDot size={20}/>
        </button>
    );
};

export default ScrollToTopButton;