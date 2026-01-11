import o1 from "../assets/o1.jpg"
import o2 from "../assets/o2.jpg"
import Offer from "../components/Offer"

const OFFER =[{
img:o1,
title:"Tasty Thursdays",
price:'20% ',
 offText: 'Off'
},
{
    
img:o2,
title:"Pizza Days",
price:'15% ',
offText: 'Off'
}
]

 const OfferPage = () => {
  return (
    <section className="py-20" >
        <div className="center-container">
    <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-8">
    {OFFER.map((e, i) => <Offer key={i} img={e.img} title={e.title}   price={e.price}
              offText={e.offText}  />)}
    </div>

        </div>

    </section>
  )
}
export default OfferPage