import React from "react";
import "../App.css";
export default function HotelCard(Props) {
    
    const Name = Props.Name;
    const pr = Props.Price;
    const stars = Props.Stars;
    const rat = Props.Rating;
    const location = Props.Location;
    const imageurl = Props.image;

    return(
        <>
            <div className="HotelCard" style={{margin:"10px"}}>
                <img src={imageurl} width={"200px"} height={"200px"} style={{margin:"10px",borderRadius:"20px"} } />
                <h3>Hotel Name- {Name}</h3>
                <h3>Price Range- {pr}</h3>
                <h3>No. of Stars-{stars}</h3>
                <h3>Location-{location}</h3>
            </div>
        </>
    );

}