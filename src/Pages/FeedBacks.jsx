import FeedBacksSlide from "../components/FeedBacksSlide"
import Title from "../components/Title"

 const FeedBacks = () => {
  return (
   <section className="py-20">
    <div className="center-container">
    <Title title="What Says Our Customers"  /> 
        <div >
          <FeedBacksSlide/>
        </div>
    </div>

   </section>
  )
}
export default FeedBacks