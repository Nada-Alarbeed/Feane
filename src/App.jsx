import About from "./Pages/About"
import BookTable from "./Pages/BookTable"
import FeedBacks from "./Pages/FeedBacks"
import Footer from "./Pages/Footer"
import Hero from "./Pages/Hero"
import Menu from "./Pages/Menu"
import OfferPage from "./Pages/OfferPage"
import { useEffect, useState } from "react"
import ScrollToTopButton from "./components/ScrollToTopButton.jsx"
import { Navigate, Route, Routes, } from "react-router-dom"
import Error from "./Pages/Error.jsx"
import AOS from 'aos';
import 'aos/dist/aos.css';
 const App = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 200);
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  
  useEffect(() => {
    
    AOS.init({
  
    });
  }, []);
  return (
    <>
    <Routes>
       <Route  path="/" 
          element={
            <>
            <Hero/>
            <OfferPage/>
            <Menu/>
            <About/>
            <BookTable/>
            <FeedBacks/>
             <ScrollToTopButton isActive={isActive} />
            <Footer/>
            </>
          }/>
          
  <Route path="/404" element={<Error/>}/>
  <Route path="*" element={<Navigate to={"/404"}/>}/>
    </Routes>
    </>
  )
}


export default App
