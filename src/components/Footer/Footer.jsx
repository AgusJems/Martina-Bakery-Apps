import React from "react";
import FooterLogo from "../../../public/food-logo.png";
import { FaFacebook, FaInstagram, FaTwitter, FaLocationArrow, FaMobileAlt} from "react-icons/fa"

const Footer = () => {
  return (
        <>
            <div className="bg-footer dark:bg-gray-950">
                <div className="max-w-[1200px] mx-auto">
                    <div className="grid md:grid-cols-3 py-5">
                        <div className="py-8 px-4">
                            <h1 className="flex items-center gap-1 text-xl sm:text-3xl font-bold text-justify sm:text-left text-white mb-3  ">
                                <img src={FooterLogo} alt="" className="max-w-[50px]"/> artina Bakery
                            </h1>
                            <p className="text-white">Martina Bakery adalah perpaduan antara rasa autentik dan tampilan elegan. Kami menghadirkan aneka kue dan roti dengan kualitas terbaik, dibuat dengan cinta dan bahan pilihan, untuk setiap momen spesial Anda.</p>
                            <br/>
                            <a href="https://maps.app.goo.gl/keudzawaYxpSy6hb8" className="flex items-center gap-3 mt-6 text-white">
                                <FaLocationArrow/>
                                <p>JL. Raya Tinggarjaya, RT 01/ RW 11</p>
                            </a>
                            <div className="flex items-center gap-3 mt-3 text-white">
                                <FaMobileAlt/>
                                <p>+62858-7606-4192</p>
                            </div>
                            <div className="flex items-center gap-3 mt-6 text-white">
                                <a href="https://www.instagram.com/ade.martina97/">
                                    <FaInstagram className="text-3xl"/>
                                </a>
                                <a href="https://www.facebook.com/adearemania.eankclluctya?locale=id_ID">
                                    <FaFacebook className="text-3xl"/>
                                </a>
                                <a href="#">
                                    <FaTwitter className="text-3xl"/>
                                </a>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                            <div>
                                <div className="py-8 px-4 text-white">
                                    <h1 className="text-xl font-bold text-justify sm:text-left mb-3">Quick links</h1>
                                    <ul className="flex flex-col gap-3">
                                        <li>Browse Caketime</li>
                                        <li>Browse Cokkiestime</li>
                                        <li>Location</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div className="py-8 px-4 text-white">
                                    <h1 className="text-xl font-bold text-justify sm:text-left mb-3">About</h1>
                                    <ul className="flex flex-col gap-3">
                                        <li>About Us</li>
                                        <li>Minssion</li>
                                        <li>Contact</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div className="py-8 px-4 text-white">
                                    <h1 className="text-xl font-bold text-justify sm:text-left mb-3">Social Media</h1>
                                    <ul className="flex flex-col gap-3">
                                        <a href="https://www.instagram.com/ade.martina97/">Instagram</a>
                                        <a href="https://www.facebook.com/adearemania.eankclluctya?locale=id_ID">Facebook</a>
                                        <a>Twitter</a>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="text-center py-10 border-t-2 border-gray-300/50 text-white">
                        © 2025 AgusSafru</div>
                    </div>
                </div>
            </div>
        </>
  );
};

export default Footer