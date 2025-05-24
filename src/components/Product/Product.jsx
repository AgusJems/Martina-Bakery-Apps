import React from "react";
import Img1 from "../../../public/website/birthday-cake.png";
import Img2 from "../../../public/website/brownies.png";
import Img3 from "../../../public/website/bolu.png";
import { Link } from "react-router-dom";

const ProductData = [ 
    {
        id:1,
        img: Img1,
        name: "Birhtday Cake",
        description: "Kue ulang tahun spesial dengan dekorasi cantik dan rasa lezat, cocok untuk momen istimewa Anda dan orang tercinta.",
        url:"/birthday_cake"
    },
    {
        id:2,
        img: Img2,
        name: "Brownies Cake",
        description: "Brownies lembut dengan cokelat premium dan topping stroberi segar yang menggoda, sempurna untuk camilan atau hadiah.",
        url:"/brownies_cake"
    },
    {
        id:3,
        img: Img3,
        name: "Bolu Cake",
        description: "Kue bolu klasik yang lembut dan harum, cocok disajikan di berbagai acara keluarga dan teman.",
        url:"/bolu_cake"
    },
]

const Product = () => {
    return (
        <>
        <div className="py-10" id='catalog'>
            <div className="container">
                <div className="text-center mb-20 max-w-[400px] mx-auto">
                    <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"> Our Catalog</p>
                    <h1 className="text-3xl font-bold mb-2">Catalog Product</h1>
                    <p className="text-xs text-gray-400">
                        {""} 
                        Temukan kue favorit Anda untuk setiap momen spesial dari ulang tahun, camilan manis, hingga sajian keluarga.
                    </p>
                </div>
                <div> 
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
                        {ProductData.map(({id, img, name, description, url}) => {
                            return <Link to={url} key={id}>
                            <div
                            data-aos="zoom-out"
                            data-aos-duration="300" 
                             className="max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 dark:hover:bg-primary hover:bg-primary hover:text-white duration-300 shadow-xl">
                                <div className="h-[100px]">
                                    <img src={img} alt="" className="max-w-[150px] mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"/>
                                </div>
                                <div className="p-4 text-center">
                                    <h1 className="text-xl font-bold">{name}</h1>
                                    <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">{description}</p>
                                </div>
                            </div></Link> 
                        })}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default Product;