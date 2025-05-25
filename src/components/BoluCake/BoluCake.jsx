import React from 'react';
import Img1 from "../../../public/website/birthday-cake.png";
import Img2 from "../../../public/website/brownies.png";
import Img3 from "../../../public/website/bolu.png";

const BoluCakeData = [ 
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
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-14 md:gap-5 place-items-center">
                        {BoluCakeData.map(({id, img, name, description}) => {
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
                                        <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2 mb-3">{description}</p>
                                        <button className="bg-gradient-to-r from-gdtwo to-gdone text-white px-6 py-3 rounded-full hover:scale-105 duration-200" onClick={() => {
                                                const message = `Hello, saya ingin memesan: ${img} ${name} ${description}`;
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

export default BoluCake;