import React from 'react';
import Img1 from "../../assets/website/birthday-cake.png";
import Img2 from "../../assets/website/brownies.png";
import Img3 from "../../assets/website/bolu.png";

const BirthDayCakeData = [ 
    {
        id:1,
        img: Img1,
        name: "Birhtday Cake",
        description: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit"
    },
    {
        id:2,
        img: Img2,
        name: "Brownies Cake",
        description: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit"
    },
    {
        id:3,
        img: Img3,
        name: "Bolu Cake",
        description: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit"
    },
    {
        id:4,
        img: Img3,
        name: "Bolu Cake",
        description: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit"
    },
    {
        id:5,
        img: Img3,
        name: "Bolu Cake",
        description: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit"
    },
    {
        id:6,
        img: Img3,
        name: "Bolu Cake",
        description: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit"
    },
]

const BirthdayCake = () => {
  return (
    <>
        <div className="py-10" id='catalog'>
            <div className="container">
                <div className="text-center mb-20 max-w-[400px] mx-auto">
                    <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"> Birthday Cake Pages</p>
                    <h1 className="text-3xl font-bold mb-2">Birthday Cake</h1>
                    <p className="text-xs text-gray-400">
                        {""} 
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Vero nesciunt explicabo a! Laborum delectus aliquam labore, earum rerum quam! Nulla?
                    </p>
                </div>
                <div> 
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-14 md:gap-5 place-items-center">
                        {BirthDayCakeData.map(({id, img, name, description}) => {
                            return <div
                                data-aos="zoom-out"
                                data-aos-duration="300" 
                                key={id} className="max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 dark:hover:bg-primary hover:bg-primary hover:text-white duration-300 shadow-xl">
                                    <div className="h-[100px]">
                                        <img src={img} alt="" className="max-w-[150px] mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"/>
                                    </div>
                                    <div className="p-4 text-center">
                                        <h1 className="text-xl font-bold">{name}</h1>
                                        <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2 mb-3">{description}</p>
                                        <button className="bg-gradient-to-r from-gdtwo to-gdone text-white px-6 py-3 rounded-full hover:scale-105 duration-200" onClick={() => {
                                                const message = `Hello, saya ingin memesan: ${name} ${description}`;
                                                const waUrl = `https://wa.me/6281337575950?text=${encodeURIComponent(message)}`;
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