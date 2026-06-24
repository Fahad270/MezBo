import axios from "axios";
import React, { useEffect, useState } from "react"; 
import DealerNavbar from "../Components/DealerNavbar";
import MyOwnership from "../Components/MyOwnership";
import "../App.css";
import UserNavBar from "../Components/UserNavBar";
import { useNavigate } from "react-router-dom";
export default function UserHomePage() {
    const navigate = useNavigate();
    const [prop, setprop] = useState([]);
        async function FetchData() {
         try {
        //     const response = await axios("http://localhost:5000/prop");    
               const response = await axios("https://mezbo.onrender.com");    
             if (response) {
                console.log(response.data);
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
                
    function OpenReserve(id)
    {
        navigate(`/reserve/${id}`);
    }

        return (
            <>
                <UserNavBar/>
                <div className="FHotels">
                {
                    prop.map((property) => {
                        return (
                            <div className="HotelCard" style={{ margin: "10px" }} key={property._id} >
                                <img src={property.imageurlextr} alt="Hotel Pic" width={"200px"} height={"200px"} style={{ margin: "10px", borderRadius: "10px" }} />
                                <h3>Hotel Name- {property.Title}</h3>
                                <p className="description">Hotel Description- {property.Description}</p>
                                <p>Category- {property.Categories}</p>
                                <p>Price Range- {property.Price}</p>
                                <p>Location-{property.Location}</p>
                                <p>Country-{property.country}</p>
                                <button onClick={() => { OpenReserve(property._id) }}>Reserve</button>
                                </div>  
                          )
                    }) 
                }  
                </div>
                <MyOwnership/>
            </>
        );
};