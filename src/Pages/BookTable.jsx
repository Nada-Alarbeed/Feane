import Title from "../components/Title"
import Button from "../components/Button"
import FormBook from "../components/FormBook"

const OPTIONS = [
  { value: "2", label: "2 " },
  { value: "3", label: "3 " },
  { value: "4", label: "4 " },
  { value: "5", label: "5 " }
]

const BookTable = () => {
  return (
    <section id='book' className="py-20 dark:bg-gray">
      <div className="center-container">
      <Title title="Book A Table" align="left" color="dark:text-white"/> 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5">
           <form action="/submit" method="post"  className="flex flex-col gap-3" data-aos="fade-up">
           
            <FormBook 
              placeholder={"Your Name"} 
              type="text"
               name="name"
             autoComplete="name" 
            required
                
            />
            <FormBook 
              placeholder={"Phone Number"} 
              type="tel"
               name="phone"
           autoComplete="tel"
              required
            />
            
            <FormBook 
              placeholder={"Your Email"} 
              type="email"
              name="email"
    autoComplete="email"
              required
            />
            <FormBook 
              placeholder={"How Many Persons?"} 
              type="select"
              options={OPTIONS}
                name="persons"
              required
            />
            
            <FormBook 
             placeholder={"mm/dd/yyyy"}
              type="date"
               name="date"
              required
            />
            
            <div className="float-animation ">
              <Button  text="BOOK NOW" />
            </div>
           </form>
            
          
          <div className="h-[85%] w-full rounded-3xl overflow-hidden shadow-lg flex flex-col justify-center "  data-aos="fade-up">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178767765221!2d55.27218711500905!3d25.19751498389659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2sae!4v1641234567890!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Restaurant Location"
              className="min-h-100 "
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookTable