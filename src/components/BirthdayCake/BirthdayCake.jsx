import React from 'react';
import Img1 from "../../../public/website/birthday-cake.png";
import Img2 from "../../../public/website/brownies.png";
import Img3 from "../../../public/website/bolu.png";

const BirthDayCakeData = [ 
    {
        id:1,
        img: Img1,
        name: "Birhtday Cake 18 cm",
        price: "Rp. 85.000",
        description:"Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit"
    },
    {
        id:2,
        img: Img1,
        name: "Birhtday Cake 20 cm",
        price: "Rp. 110.000",
        description:"Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit"
    },
    {
        id:3,
        img: Img1,
        name: "Birhtday Cake 22 cm",
        price: "Rp. 150.000",
        description:"Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit"
    },
    {
        id:4,
        img: Img2,
        name: "Blackforest Cake 18 cm",
        price: "Rp. 90.000",
        description:"Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit"
    },
    {
        id:5,
        img: Img2,
        name: "Blackforest Cake 20 cm",
        price: "Rp. 120.000",
        description:"Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit"
    },
    {
        id:6,
        img: Img2,
        name: "Blackforest Cake 22 cm",
        price: "Rp. 170.000",
        description:"Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit"
    },
]

const BirthdayCake = () => {
  return (
    <>
        <div className="py-10" id='catalog'>
            <div className="container">
                <div className="text-center mb-5 max-w-[400px] mx-auto">
                    <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"> Birthday Cake</p>
                    <h1 className="text-3xl font-bold mb-2">Birthday Cake</h1>
                    <p className="text-xs text-gray-400">
                        {""} 
                        Kue ulang tahun spesial dengan dekorasi cantik dan rasa lezat, cocok untuk momen istimewa Anda dan orang tercinta.
                    </p>
                </div>
                <div> 
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-5 place-items-center">
                        {BirthDayCakeData.map(({id, img, name, price, description}) => {
                            return <div
                                data-aos="zoom-out"
                                data-aos-duration="300" 
                                key={id} className="max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 dark:hover:bg-primary hover:bg-primary hover:text-white duration-300 shadow-xl">
                                    {/* <div className="h-[100px]">
                                        <img src={img} alt="" className="max-w-[150px] mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"/>
                                    </div> */}
                                    <div className="p-4 text-center">
                                        <img src={img} alt="" className="max-w-[120px] mx-auto group-hover:scale-105 group-hover:rotate-6 duration-300 mb-3"/>
                                        <h1 className="text-md font-[Merienda] font-bold mb-3">{name}</h1>
                                        <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2 mb-3">{price}</p>
                                        <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2 mb-3">{description}</p>
                                        <button className="bg-gradient-to-r from-gdtwo to-gdone text-white px-6 py-3 rounded-full hover:scale-105 duration-200" onClick={() => {
                                                // const imageUrl = `https://martina-bakery-apps.vercel.app/website/${img}`;
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

export default BirthdayCake;