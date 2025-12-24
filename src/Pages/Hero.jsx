import Header from "../components/Header"
import HeroImg from "../assets/hero-bg.jpg"
import Slider from "../components/Slider"

const Hero = () => {
  return (
    <section className="relative min-h-screen">
      <div className="absolute left-0 top-0 -z-10 w-full h-full">
        <img 
          src={HeroImg} 
          alt="HeroImg" 
          loading="lazy" 
          className="object-cover w-full h-full"
        />
       
      </div>  
      <div className="relative z-20 ">
        <div className="center-container">
          <Header/>
            <Slider />
        </div>
      </div>

    </section>
  )
}

export default Hero