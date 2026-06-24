import React from "react";
import "../App.css";
import Hilton from "../assets/hilton.jpg";
import TajPalace from '../assets/Taj.png';
import LeelaGoa from "../assets/leela.png";
import ITCGrandChola from "../assets/ITC.png";
import RadissonBlu from "../assets/rad.png";
import NovotelPune from "../assets/novo.png";
import HyattRegency from "../assets/hyaat.png";
import MarriottJaipur from "../assets/Marri.png";
import HotelCard from "./HotelCard.jsx";
export    default function FeaturedHotels() {
    const Hotels = [{
        Name: "Hilton Mumbai",
        Price: "₹10,000 - ₹25,000",
        Stars: "5 Star",
        Rating: 4.8,
        Location: "Mumbai - Andheri",
        ImageUrl: Hilton
    },
    {
        Name: "Taj Palace",
        Price: "₹15,000 - ₹35,000",
        Stars: "5 Star",
        Rating: 4.9,
        Location: "New Delhi",
        ImageUrl: TajPalace
    },
    {
        Name: "The Leela Goa",
        Price: "₹12,000 - ₹28,000",
        Stars: "5 Star",
        Rating: 4.7,
        Location: "Goa",
        ImageUrl: LeelaGoa
    },
   
    {
        Name: "Radisson Blu",
        Price: "₹8,000 - ₹18,000",
        Stars: "4 Star",
        Rating: 4.5,
        Location: "Bangalore",
        ImageUrl: RadissonBlu
    },
   
    {
        Name: "Hyatt Regency",
        Price: "₹9,000 - ₹22,000",
        Stars: "5 Star",
        Rating: 4.7,
        Location: "Kolkata",
        ImageUrl: HyattRegency
    },
    {
        Name: "Marriott Jaipur",
        Price: "₹8,500 - ₹20,000",
        Stars: "5 Star",
        Rating: 4.6,
        Location: "Jaipur",
        ImageUrl: MarriottJaipur
    }
    ];

    return (
        <>
            <h1 style={{textAlign:"center",backgroundColor:"#D8C4B6",color:"#273338"}}>Featured Hotels!!</h1>
            <div className="FHotels">
            {
                Hotels.map((Hotel,index) => {
                     return (
                        <HotelCard key={index} Name={Hotel.Name} Price={Hotel.Price} Stars={Hotel.Stars} Rating={Hotel.Rating} Location={Hotel.Location} image={Hotel.ImageUrl} />
                    );        
                })
            }
            </div>
        </>
    );
}