import React from "react";
import Logo from "../../assets/food-logo.png";
// import {FaCartShopping} from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { Link } from "react-scroll";
import {Link as Link1} from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
                <div className="container py-3 sm:py-0">
                    <div className="flex justify-between item-center">
                        <Link1 to="/" className=" flex item-center gap-1 text-2xl sm:text-3xl font-bold mt-2">
                            <img src={Logo} alt="" className="w-12 h-10"/> artina Bakery
                        </Link1>
                        <div className="flex items-center gap-4">
                            <div>
                                <DarkMode />
                            </div>
                            <div className="hidden sm:flex gap-4">
                                <Link1 to="/" activeClass="active" smooth={true} spy={true} offset={-200} className="inline-block py-4 px-4 hover:text-primary cursor-pointer">Home</Link1>
                                <Link to="catalog" activeClass="active" smooth={true} spy={true} offset={-200} className="inline-block py-4 px-4 hover:text-primary cursor-pointer">Catalog</Link>
                                <Link to="best" activeClass="active" smooth={true} spy={true} offset={-200} className="inline-block py-4 px-4 hover:text-primary cursor-pointer">Best Seller</Link>
                                <Link to="testimonial" activeClass="active" smooth={true} spy={true} offset={-200} className="inline-block py-4 px-4 hover:text-primary cursor-pointer">Testimonial</Link>
                            </div>
                            {/* <ul className="hidden sm:flex gap-4">
                                <li>
                                    <a href="#" className="inline-block py-4 px-4 hover:text-primary">Home</a>
                                </li>
                                <li>
                                    <a href="#" className="inline-block py-4 px-4 hover:text-primary">Catalog</a>
                                </li>
                                <li>
                                    <a href="#" className="inline-block py-4 px-4 hover:text-primary">Contact</a>
                                </li>
                            </ul> */}
                            {/* <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 duration-300 flex items-center gap-2">
                                Order
                                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer"/>
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;