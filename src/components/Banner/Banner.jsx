import React from "react";
import Food1 from "../../assets/website/wedding-cake.png";
 
const Banner = () => {
    return (
        <>
        <div className="min-h-[550px]" id='best'>
            <div>
                <div data-aos="slide-up" data-aos-duration="300" className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <img src={Food1} alt="" className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.1)]"/>
                        </div>
                        <div className="flex flex-col justify-center gap-6 sm:pt-0">
                            <h1 className="text-3xl sm:text-4xl font-bold">
                                Wedding Cake
                            </h1>
                            <p className="text-sm text-gray-500 tracking-wide leading-5">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio
                                <br/>
                                <br/>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ab sed, exercitationem minima aliquid eligendi distinctio? Fugit repudiandae numquam hic quo recusandae. Excepturi totam ad nam velit quasi quidem aspernatur.
                            </p>
                            <div>
                                <button className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full hover:scale-105 duration-200">Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default Banner;