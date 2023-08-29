import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


const HomePage = () => {
  const Img=[ "/images/bager3.jpeg","/images/pizza2.jpeg","/images/chicken.jpeg","/images/grillS.jpeg","/images/taco.jpeg","/images/noodles.jpeg",]
const Name =["Chicken Burger","Chicken Pizza","Chicken fry","Grill Sandwich","Taco Traifi","Noddle's Ramen",]
const Ratings = [4.5,4.5,4.5,4.5,4.5,]
const Price = [3.5,4.20,5.00,4.80,3.63,6.50,]
return (
  <div className="ml-40 justify-center items-center mt-20">
  <div className="grid grid-cols-1 sm:grid-clos-2 md:grid-cols-3 gap-4 ">
      {Img.map((Img, index) => (
          <div key={index} className="flex flex-col item bg-red-100 rounded-lg mr-20 w-60">
             <div className="w-60 h-60">
                  <img src={Img} alt=""
                  className="border-red rounded-full roundedfull w-60 h-60 outline outline-offset-2 outline-8 outline-red-500 ml-10  "
                   style={{ borderWidth: '5px'}}/>
              </div>
              <div className="                                                                                                            ">
                  <div className="flex-grow">
                  <h3 className="mb-3 text-black-800">{Name[index]}</h3>
                  <div className="ratings ml-5 text-yellow-500">
                      {Array.from({ length: Ratings[index] }).map((_, i) => (
                          <FontAwesomeIcon key={i} icon={faStar} />
                      ))}
                  </div>
                  <div>
                      <p>${Price[index]}</p>
                  </div>
                  <button className="bg-primary bg-red-500 text-white font-bold py-2 px-4 rounded-full mx-10">Buy Now</button>
              </div>
              </div>
          </div>
      ))}
  </div>
  </div>
);
};
export default HomePage;
