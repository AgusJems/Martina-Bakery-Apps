import React from 'react';
import bolu1 from "../../../public/website/bolu1.png";
import bolu2 from "../../../public/website/bolu2.png";
import bolu3 from "../../../public/website/bolu3.png";
import bolu4 from "../../../public/website/bolu4.png";
import bolu5 from "../../../public/website/bolu5.png";
import bolu6 from "../../../public/website/bolu6.png";
import bolu7 from "../../../public/website/bolu7.png";
import bolu8 from "../../../public/website/bolu8.png";

const BoluCakeData = [ 
    {
        id:1,
        img: bolu1,
        name: "Ketan Hitam",
        price: "Rp. 30.000",
        description: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit"
    },
    {
        id:2,
        img: bolu2,
        name: "Choco Cheese",
        price: "Rp. 20.000",
        description: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit"
    },
    {
        id:3,
        img: bolu3,
        name: "Keju Panggang",
        price: "Rp. 20.000",
        description: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit"
    },
    {
        id:4,
        img: bolu4,
        name: "Putu Gula Merah",
        price: "Rp. 20.000",
        description: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit"
    },
    {
        id:5,
        img: bolu6,
        name: "Matcha Choco",
        price: "Rp. 30.000",
        description: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit"
    },
    {
        id:6,
        img: bolu5,
        name: "Ketan Hitam Choco",
        price: "Rp. 30.000",
        description: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit"
    },
    {
        id:7,
        img: bolu7,
        name: "Bolu Tape",
        price: "Rp. 20.000",
        description: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit"
    },
    {
        id:8,
        img: bolu8,
        name: "Ketan Hitam Cheese",
        price: "Rp. 30.000",
        description: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit"
    },
]

const BoluCake = () => {
  return (
    <>
        <div className="py-10" id='catalog'>
            <div className="container">
                <div className="text-center mb-5 max-w-[400px] mx-auto">
                    <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"> Bolu Cake Pages</p>
                    <h1 className="text-3xl font-bold mb-2">Bolu Cake</h1>
                    <p className="text-xs text-gray-400">
                        {""} 
                        Kue bolu klasik yang lembut dan harum, cocok disajikan di berbagai acara keluarga dan teman.
                    </p>
                </div>
                <div> 
                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-14 md:gap-5 place-items-center">
                        {BoluCakeData.map(({id, img, name, price, description}) => {
                            return <div
                                data-aos="zoom-out"
                                data-aos-duration="300" 
                                key={id} className="max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 dark:hover:bg-primary hover:bg-primary hover:text-white duration-300 shadow-xl">
                                    {/* <div className="h-[100px]">
                                        <img src={img} alt="" className="max-w-[150px] mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"/>
                                    </div> */}
                                    <div className="p-4 text-center">
                                        <img src={img} alt="" className="max-w-[120px] mx-auto group-hover:scale-105 group-hover:rotate-6 duration-300 mb-3"/>
                                        <h1 className="text-md font-[Merienda] font-bold mb-2">{name}</h1>
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

export default BoluCake;