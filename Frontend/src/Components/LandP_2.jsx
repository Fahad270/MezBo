import React from "react";
import CardP_2 from "./CardP_2";
import "../App.css";

import { TbMessageChatbot as chtbt } from "react-icons/tb";
import { GiConfirmed as confi } from "react-icons/gi";
import { RiCustomerServiceFill as custsupp } from "react-icons/ri";
import { FaRegCreditCard as ccard } from "react-icons/fa";
import { MdOutlineVerifiedUser as ver } from "react-icons/md";

export default function LandP_2() {
    const features = [{Name:"24*7 Customer Support",ImageUrl:custsupp,Description:"Need help? Our support team is available 24/7."},{Name:"Secure Payments",ImageUrl:ccard,"Description":"Protected transactions with modern payment gateways."},{Name:"Verified Hotels",ImageUrl:ver,Description:"Every listed property is verified for quality and safety."},{Name:"Instant Booking Confirmation",ImageUrl:confi,Description:"Receive booking confirmation instantly after payment."},{Name:"AI Travel Assistant",ImageUrl:chtbt,Description:"Receive personalized hotel recommendations and quick answers to booking-related questions."},{Name:"Easy Booking ",ImageUrl:custsupp,Description:"Need help? Our support team is available 24/7."}];
    return (
        <>
            <div style={{backgroundColor:"ghostwhite"}}>
        <h1 style={{textAlign:"center",backgroundColor:"lightgrey",color:"blue"}}>What Makes us standout!!!</h1>
            <div className="LandP_2">
            
            {
                features.map((feature, index) => {
                    return (
                        <CardP_2 key={index} Name={feature.Name} ImageUrl={feature.ImageUrl} Description={feature.Description} />                    
                    );
                })
            }

                </div>
                </div>
        </>
    );
}