import React from "react";
import bgImg from "../../../public/website/bg-vector.png"
import Food1 from "../../../public/website/birthday-cake.png";
import Food2 from "../../../public/website/brownies.png";
import Food3 from "../../../public/website/bolu.png";
import { Link } from "react-router-dom";

const ImageList = [ 
    {
        id:1,
        img: Food1,
    },
    {
        id:2,
        img: Food2,
    },
    {
        id:3,
        img: Food3,
    },
]

const bgImage = {
    backgroundImage: `url(${bgImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
}

const Home = () => {
    const [imageId, setImage] = React.useState(Food1);
    return (
        <>
            <div id='home' style={bgImage} 
            className="min-h-[550px] sm:min-h-[600px] 
            bg-gray-100 dark:bg-gray-950 dark:text-white 
            duration-200 flex justify-center items-center"
            >
                <div className="container pb-8 sm:pb-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                        <div 
                        data-aos="zoom-out"
                        data-aos-duration="400"
                        data-aos-once="true"
                        className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
                            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold">Welcome to </h1>
                            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold"> <span className="font-[Merienda] text-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Martina Bakery</span></h1>
                            <p className="text-sm">Martina Bakery adalah perpaduan antara rasa autentik dan tampilan elegan. Kami menghadirkan aneka kue dan roti dengan kualitas terbaik, dibuat dengan cinta dan bahan pilihan, untuk setiap momen spesial Anda.</p>
                            <div>
                                <Link to="/birthday_cake">
                                <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full hover:scale-105 duration-200"> Order Now</button></Link>
                            </div>
                        </div>
                        <div className="order-1 sm:order-2 min-h-[550px] sm:min-h-[550px] flex justify-center items-center relative">
                            <div className="flex justify-center items-center h-[300px] sm:h-[450px] overflow-hidden">
                                <img
                                data-aos="zoom-out"
                                data-aos-duration="400"
                                data-aos-once="true"
                                src={imageId} alt="" className="w-[300px] sm:w-[450px] mx-auto spin"/>
                            </div>
                            <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:-right-10 bg-white/30 rounded-full">
                                {
                                    ImageList.map((item) => (
                                        <img
                                        data-aos="zoom-out"
                                        data-aos-duration="400"
                                        data-aos-once="true" 
                                        key={item.id} src={item.img} className="max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200" 
                                        onClick={() =>{
                                            setImage(
                                                item.id == 1 ? Food1 : item.id == 2 ? Food2 : Food3
                                            );
                                        }}/>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;