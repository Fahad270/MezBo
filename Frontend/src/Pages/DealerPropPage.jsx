import React, { useState } from "react";
import MyOwnership from "../Components/MyOwnership";
import DealerNavbar from "../Components/DealerNavbar";
import { useEffect } from "react";
import axios from "axios";
import "../App.css";

export default function DealerPropPage() {
    
    const [prop, setprop] = useState([]);
    async function FetchData() {
    try {
        //const response = await axios("http://localhost:5000/prop");    
        const response = await axios("https://mezbo.onrender.com");    
        if (response) {
            setprop(response.data);   
        } else {
            console.log("Couldn't fetch Data!!");
        }
    } catch (err) {
        console.log(err);
    }
    }


    useEffect(() => {
        FetchData();
    },[]);
            
    return (
        <>
            <DealerNavbar/>
            <div className="FHotels">
            {
                prop.map((property) => {
                    return (
                        <div className="HotelCard" style={{ margin: "10px" }} key={property._id}>
                            <img src={property.imageurlextr} alt="Hotel Pic" width={"200px"} height={"200px"} style={{ margin: "10px", borderRadius: "10px" }} />
                
                            <h3>Hotel Name- {property.Title}</h3>
                            <h3>Hotel Description- {property.Description}</h3>
                            <h3>Category- {property.Categories}</h3>
                            <h3>Price Range- {property.Price}</h3>
                            <h3>Location-{property.location}</h3>
                            <h3>Country-{property.country}</h3>
                            </div>  
                      )
                }) 
            }  
            </div>
            <MyOwnership/>
        </>
    );

}