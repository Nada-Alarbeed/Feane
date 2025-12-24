import { useState } from 'react'
import Title from "../components/Title"
import Button from "../components/Button"
import MenuData from "../components/MenuData" 
import f1 from "../assets/f1.png"
import f2 from "../assets/f2.png"
import f3 from "../assets/f3.png"
import f4 from "../assets/f4.png"
import f5 from "../assets/f5.png"
import f6 from "../assets/f6.png"
import f7 from "../assets/f7.png"
import f8 from "../assets/f8.png"
import f9 from "../assets/f9.png"


const MENUDATA = [
    {
        id: 1,
        category: 3, 
        img: f1,
        title: "Delicious Pizza",
        p: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: "$20",
    },
    {
        id: 2,
        category: 2, 
        img: f2,
        title: "Delicious Burger",
        p: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: "$15",
    },
    {
        id: 3,
        category: 3, 
        img: f3,
        title: "Delicious Pizza",
        p: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: "$17",
    },
    {
        id: 4,
        category: 4, 
        img: f4,
        title: "Delicious Pasta",
        p: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: "$18",
    },
    {
        id: 5,
        category: 5, 
        img: f5,
        title: "French Fries",
        p: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: "$10",
    },
    {
        id: 6,
        category: 3,
        img: f6,
        title: "Delicious Pizza",
        p: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: "$15",
    },
    {
        id: 7,
        category: 2, 
        img: f7,
        title: "Tasty Burger",
        p: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: "$12",
    },
    {
        id: 8,
        category: 2, 
        img: f8,
        title: "Tasty Burger",
        p: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: "$14",
    },
    {
        id: 9,
        category: 4, 
        img: f9,
        title: "Delicious Pasta",
        p: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: "$10",
    },
]

const ParMenu = [
    { id: 1, title: "All" },
    { id: 2, title: "Burger" },
    { id: 3, title: "Pizza" },
    { id: 4, title: "Pasta" },
    { id: 5, title: "Fries" }
]

const Menu = () => {
    const [activeItem, setActiveItem] = useState(1) 
    const filteredData = activeItem === 1 
        ? MENUDATA
        : MENUDATA.filter(item => item.category === activeItem) 

    return (
        <section id='menu' className="py-20 ">
            <div className="center-container">
                <Title title="Our Menu" align="center"  />    
                <div className="flex justify-center flex-wrap gap-4 mt-8 mb-12">
                    {ParMenu.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveItem(item.id)}
                            className={`px-6 py-2 text-[1rem] cursor-pointer rounded-full transition-all duration-300 ${
                                activeItem === item.id
                                    ? 'bg-gray text-white '
                                    : 'text-black '
                            }`}
                        >
                            {item.title}
                        </button>
                    ))}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredData.map(item => (
                        <MenuData
                            key={item.id} 
                            img={item.img}
                            title={item.title}
                            p={item.p}
                            price={item.price}
                        />
                    ))}
                </div>
                <div className="flex justify-center  mt-8 float-animation">
                    <Button text="View More"/>
                </div>
            </div>
        </section>
    )
}

export default Menu