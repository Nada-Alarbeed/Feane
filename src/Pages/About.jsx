import aboutImg from "../assets/about-img.png"
import Title from "../components/Title"
import Button from "../components/Button"

const About = () => {
  return (
    <section id='about' className="py-20 min-h-screen bg-gray dark:bg-white4">
      <div className="center-container">
        <div className="grid grid-cols-1 min-[920px]:md:grid-cols-2 gap-8">
          
          <div className="order-2 min-[920px]:md:order-1" data-aos="fade-right">
            <img 
              src={aboutImg} 
              alt="aboutImg"   
              loading="lazy" 
              className="object-cover max-w-10/12 mx-auto md:mx-0"
            />
          </div>
          
          <div className="order-1 min-[920px]:md:order-2 flex flex-col justify-center  gap-5" data-aos="fade-left">
            <div className="flex justify-center min-[920px]:md:justify-start">
              <Title 
                title="We Are Feane" 
                align="left" 
                color="text-white dark:text-gray" 
              />
            </div>
            
            <p className="text-white dark:text-gray leading-relaxed max-w-full md:max-w-[90%] text-center min-[920px]:md:text-left">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All
            </p> 
            
            <div className="flex justify-center min-[920px]:md:justify-start">
              <Button text="Read More" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default About