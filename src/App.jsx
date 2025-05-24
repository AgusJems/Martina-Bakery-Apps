import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Product from "./components/Product/Product";
import Banner from "./components/Banner/Banner";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BirthdayCake from "./components/BirthdayCake/BirthdayCake";
import BrowniesCake from "./components/BrowniesCake/BrowniesCake";
import BoluCake from "./components/BoluCake/BoluCake";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  React.useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    Aos.refresh();
  },[]);
  
  return (
    <Router>
      <div className="bg-white dark:dark:bg-gray-900 dark:text-white duration-200">
        <Navbar />

      <ScrollToTop />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Product />
              <Banner />
              <Testimonial />
              <Footer />
            </>
          } />
          <Route path="/birthday_cake" element={
              <>
              <BirthdayCake />
              <Footer />
            </>
          } />
          <Route path="/brownies_cake" element={
              <>
              <BrowniesCake />
              <Footer />
            </>
          } />
          <Route path="/bolu_cake" element={
              <>
              <BoluCake />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  )
};

export default App;