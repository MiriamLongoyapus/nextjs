import React from "react";
import { FaInstagram, FaPinterest, FaFacebook, FaTwitter } from 'react-icons/fa';
const Footer = () =>{
    return(
        <footer className="container bg-red-100 p-20 ml-20 mt-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 border mt-5 ">
        <div >
        <h3 className="text-red-500 text-4xl font-extrabold">Fooodish</h3>
          <p className="mt-5">continue food 2023 All right served </p>
          <h3 className="text-red-500 text-4xl font-extrabold mt-5">Follow us on</h3>
          <div className="icon flex flex-row gap-6 mt-5">
      <FaInstagram className="social-icon" />
      <FaPinterest className="social-icon" />
      <FaFacebook className="social-icon" />
      <FaTwitter className="social-icon" />
    </div>
        </div>
        <div className="ml-8">
            <h3 className="text-red-500 text-4xl font-extrabold">Menu</h3>
            <p className="mt-5">Home</p>
            <p>Offer</p>
            <p>Service</p>
            <p>About Us</p>
        </div>
        <div >
            <h3 className="text-red-500 text-4xl font-extrabold">Information</h3>
            <p className="mt-5">Menu</p>
            <p>Quality</p>
            <p>Make achoice</p>
            <p>Salada with vegetable </p>
            <p>Fast food delivery</p>
            <p>Subscribe</p>
            {}
        </div>
        <div className="ml-8">
            <h3 className="text-red-500 text-4xl font-extrabold">Contact</h3>
            <p className="mt-5">+2540726794700</p>
            <p>Explore</p>
            <p>Info@Foodish.Com</p>
            <p>1245, New York, USA</p>
        </div>
        </div>
    </footer>
        
    );
}
export default Footer;
    
