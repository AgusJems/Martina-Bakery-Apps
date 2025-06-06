import React from 'react';
import brownies1 from "../../../public/website/Brownies1.png";
import brownies2 from "../../../public/website/Brownies2.png";
import brownies3 from "../../../public/website/Brownies3.png";
import brownies4 from "../../../public/website/Brownies4.png";
import brownies5 from "../../../public/website/Brownies5.png";
import brownies6 from "../../../public/website/Brownies6.png";
import brownies7 from "../../../public/website/Brownies7.png";

const BrowniesCakeData = [ 
    {
        id:1,
        img: brownies6,
        name: "Choco Cheese",
        price: "Rp. 25.000 / pcs",
        description: "Brownies lembut dengan cokelat premium dan topping keju melimpah yang menggoda, sempurna untuk camilan atau hadiah."
    },
    {
        id:2,
        img: brownies2,
        name: "Brownies Potong",
        price: "Rp. 45.000",
        description: "Brownies lembut dengan cokelat premium dan topping kacang yang menggoda, sempurna untuk camilan atau hadiah."
    },
    {
        id:3,
        img: brownies5,
        name: "Choco Tiramisu",
        price: "Rp. 10.000 / pcs",
        description: "Brownies lembut dengan cokelat premium dan tiramisu yang menggoda, sempurna untuk camilan atau hadiah."
    },
    {
        id:4,
        img: brownies3,
        name: "Tiramisu",
        price: "Rp. 25.000",
        description: "Brownies lembut dengan tiramisu dan topping stroberi segar yang menggoda, sempurna untuk camilan atau hadiah."
    },
    {
        id:5,
        img: brownies7,
        name: "Matcha Tiramisu",
        price: "Rp. 10.000",
        description: "Brownies lembut dengan rasa matcha dan tiramisu yang menggoda, sempurna untuk camilan atau hadiah."
    },
    {
        id:6,
        img: brownies1,
        name: "Choco",
        price: "Rp. 15.000",
        description: "Brownies lembut dengan cokelat premium dan topping stroberi segar yang menggoda, sempurna untuk camilan atau hadiah."
    },
    {
        id:6,
        img: brownies4,
        name: "Choco Vanilla",
        price: "Rp. 25.000",
        description: "Brownies lembut dengan cokelat premium, vanilla dan topping stroberi segar yang menggoda, sempurna untuk camilan atau hadiah."
    },
]

const BrowniesCake = () => {
  return (
    <>
        <div className="py-10" id='catalog'>
            <div className="container">
                <div className="text-center mb-5 max-w-[400px] mx-auto">
                    <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"> Brownies Cake Pages</p>
                    <h1 className="text-3xl font-bold mb-2">Brownies Cake</h1>
                    <p className="text-xs text-gray-400">
                        {""} 
                        Brownies lembut dengan cokelat premium dan topping stroberi segar yang menggoda, sempurna untuk camilan atau hadiah.
                    </p>
                </div>
                <div> 
                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-14 md:gap-5 place-items-center">
                        {BrowniesCakeData.map(({id, img, name, price, description}) => {
                            return <div
                                data-aos="zoom-out"
                                data-aos-duration="300" 
                                key={id} className="max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 dark:hover:bg-primary hover:bg-primary hover:text-white duration-300 shadow-xl">
                                    {/* <div className="h-[100px]">
                                        <img src={img} alt="" className="max-w-[150px] mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"/>
                                    </div> */}
                                    <div className="p-4 text-center">
                                        <img src={img} alt="" className="max-w-[120px] mx-auto group-hover:scale-105 group-hover:rotate-6 duration-300 mb-3"/>
                                        <h1 className="text-md font-[Merienda] font-bold">{name}</h1>
                                        <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2 mb-2">{price}</p>
                                        <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2 mb-3">{description}</p>
                                        <button className="bg-gradient-to-r from-gdtwo to-gdone text-white px-6 py-3 rounded-full hover:scale-105 duration-200" onClick={() => {
                                                const message = `Hello, saya ingin memesan:\n\nNama: ${name}\nHarga: ${price}`;
                                                const waUrl = `https://wa.me/6285876064192?text=${encodeURIComponent(message)}`;
                                                window.open(waUrl, '_blank');
                                            }}>Order</button>
                                    </div>
                                </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default BrowniesCake;