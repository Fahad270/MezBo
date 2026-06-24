import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
export default function MyOwnership() {
    return (
        <div className="MyOwnership">
            <div style={{display:"flex",gap:"10px",margin:"10px"}}>
                <FaInstagramSquare color="purple" size={"30px"}/>
                <FaFacebook color="blue" size={"30px"}/>
                <FaYoutube color="red" size={"30px"} />
                <FaWhatsapp color="green" size={"30px"}/>
            </div>
            <p>&copy;King Fahad Private Limited</p>
            <div className="FooterLinks">
                   <a href="https://github.com/Fahad270/MezBo"><span>Privacy</span></a>
                    <a href="https://github.com/Fahad270/MezBo"><span>Terms</span></a>
                    <a href="https://github.com/Fahad270/MezBo"><span>Sitemap</span></a>
                    <a href="https://github.com/Fahad270/MezBo"><span>Company Details</span></a>
            </div>   
        </div>
    );
}