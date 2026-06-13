import React from "react";
import "../App.css";
import Hilton from "../assets/hilton.jpg";
export default function FeaturedHotels() {
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
        Name: "ITC Grand Chola",
        Price: "₹11,000 - ₹30,000",
        Stars: "5 Star",
        Rating: 4.8,
        Location: "Chennai",
        ImageUrl: ITCGrandChola
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
        Name: "Novotel Pune",
        Price: "₹6,000 - ₹15,000",
        Stars: "4 Star",
        Rating: 4.4,
        Location: "Pune",
        ImageUrl: NovotelPune
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
             <h1 style={{textAlign:"center",backgroundColor:"lightgrey",color:"blue"}}>Featured Hotels!!</h1>
            <div id="FHotels"></div>
        </>
    );
}