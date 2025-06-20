import React from "react";
import Slider from "react-slick";

const testimonialData = [
    {
        id: 1,
        name: "Lisa",
        text: "Rotinya lembut, enak. rekomendasi banget",
        img: "https://picsum.photos/101/101"
    },
    {
        id: 2,
        name: "Ayu",
        text: "Kuenya cantik banget! Desainnya sesuai request, rasanya juga lembut dan gak terlalu manis. Semua tamu suka! Terima kasih, pasti order lagi.",
        img: "https://picsum.photos/102/102"
    },
    {
        id: 3,
        name: "Nina",
        text: "Bolunya moist banget! Rasa cokelatnya rich dan nggak bikin enek. Anak-anak juga doyan banget",
        img: "https://picsum.photos/103/103"
    },
]

const Testimonial = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinity: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplayspeed: 2000,
        cssEase:"linear",
        pauseOnHover: true,
        pauseOnFocus: true,
    };
    return (
        <>
        <div id='testimonial' data-aos="fade-up" data-aos-duration="300" className="py-10">
            <div className="container">
            <div className="text-center mb-20 max-w-[400px] mx-auto">
                    <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"> Testimonial</p>
                    <h1 className="text-3xl font-bold mb-2">Testimonial</h1>
                    <p className="text-xs text-gray-400">
                        {""} 
                        Pendapat pelanggan adalah inspirasi kami. Lihat apa kata mereka yang telah mencicipi kelezatan produk kami dan merasakan layanan terbaik dari kami.
                    </p>
                </div>
                <div data-aos="zoom-out" data-aos-duration="300" className="grid grid-cols-1 max-w-[600px] mx-auto gap-6">
                    <Slider {...settings}>
                        {
                            testimonialData.map(({id, name, text, img}) => {
                                return (
                                    <div key={id} className="my-6">
                                        <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/25 relative">
                                            <img src={img} alt="" className="rounded-full block mx-auto"/>
                                            <p className="text-gray-500 text-sm">{text}</p>
                                            <h1 className="text-xl font-bold">{name}</h1>
                                            <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">,,</p>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </Slider>
                </div>
            </div>
        </div>
        </>
    )
};

export default Testimonial;