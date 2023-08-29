import React from "react";


const Navbar = () => {
    return(
        <div className="mt-10 grid text-center lg:max-w-5l lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
            <div className="ml-20">
                <h1>Foodle</h1>
            </div>
            <div>
                <ul className="mb-32 grid text-center lg:w-full lg:mb-0 lg:grid-cols-5 lg:text-left">
                    <li>Home</li>
                    <li>Offer</li>
                    <li>Service</li>
                    <li>Menu</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div className="mb-32 grid lg:grid-cols-2 lg:text-left">
                <button className="ml-50">Login</button>
                <button className="rounded-md px-2 py-1 w-20 px-2 py-1 bg-blue-200 ml-30">Sign Up</button>
            </div>
        </div>
    )
}
export default Navbar;