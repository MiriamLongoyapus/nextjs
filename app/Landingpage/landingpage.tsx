import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faClock} from "@fortawesome/free-solid-svg-icons";
import {faSync} from "@fortawesome/free-solid-svg-icons";
import {faGem} from "@fortawesome/free-solid-svg-icons";




const Landingpage = () =>{
    return(
        <div>
            <div className="ml-20 grid grid-cols-1 md:grid-cols-2">
                
                <div>
                    <h1 className="text-red-500 text-6xl font-extrabold">All Fast Food is</h1>
                <br/>
                <h1 className="text-red-500 text-6xl font-extrabold">Available at Foodle</h1>
                <br/>
                <p>We Are Just A Click Away When You</p>
                <p>Crave For Delicious Fast Food</p>
                <br/>
                <button className="rounded-md  w-20 px-1 py-1 bg-red-500 bottom-10">Buy Now</button>
                </div>
                <div className="">
                    <img src={"./images/bager11.png"} alt={"icon"}/>
                </div>
            </div>
            <div className="ml-20 grid grid-cols-1 md:grid-cols-3 mt-12 gap-5">
                <div>
                    <div>
                    <FontAwesomeIcon icon={faClock} size="lg" />
                    </div>
                    <h1>Fast Delivery</h1>
                    <p>The food will be delivered to <br/>Your home within 1-2 hrs of<br/>your ordering </p>
                </div>
                <div>
                <div>
                    <FontAwesomeIcon icon={faSync} size="lg" />
                    </div>
                    <h1>Fresh Food</h1>
                    <p>The food will be delivered to <br/>Your home within 1-2 hrs of<br/>your ordering </p>
                </div>
                <div>
                <div>
                    <FontAwesomeIcon icon={faGem} size="lg" />
                    </div>
                    <h1>Free Delivery</h1>
                    <p>The food will be delivered to <br/>Your home within 1-2 hrs of<br/>your ordering </p>
                </div>
            </div>
            <div className="ml-20 grid grid-cols-1 md:grid-cols-2 gap-80 mt-10">
                <h1>Best Delivered <br/>Categories</h1>
                <div>
                    <p>Here Are Some Of Our Best Distributed</p>
                    <p>Categorie. If You Want You Can Order</p>
                    <p>From Here</p>
                </div>
            </div>
            <div className="flex flex-row ml-20 gap-60">
                <div className="item">
                    <img src={"./images/bager22.png"} alt=""/>
                    <div className="item-name">Chicken Burger</div>
                    <button className="order-button">Order Now</button>
                </div>
                <div className="item">
                    <img src={"./images/pizza22.png"} alt=""/>
                <div className="item-name">Chicken Pizza</div>
                    <button className="order-button">Order Now</button>
                </div>
                <div className="item">
                    <img src={"./images/fryz.png"} alt=""/>
                    <div className="item-name">French Fries</div>
                    <button className="order-button">Order Now</button>
                </div>
            </div>
            <div className="ml-20 grid grid-cols-1 md:grid-cols-2 gap-80 mt-20">
                <div>
                <h1>Our <span className="orange-text">Regular</span> Menu</h1>
                <p>These are our regular Menus.You can<br/>order anything you like.</p>
                </div>
                <div>
                    <button className="signup-button buy-button bg-red-400 p-3                                                                           rounded-3xl">See All</button>
                </div>
            </div>
       
        </div>
    )
}
export default Landingpage;