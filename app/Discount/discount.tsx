import React from "react";
const Discount = () =>{
    return(
        <div className="ml-20 grid grid-cols-1 md:grid-cols-2 gap-5 mt-20">
        <img src={"./images/discount.png"} alt={"icon"} className=""/>
        <div className="">
        <img src={"./images/off.png"} alt={"icon"} className="h-45 w-100"/>
        <img src={"./images/save.png"} alt={"icon"} className="mt-4"/>
        </div>

        </div>
    )
}
export default Discount;