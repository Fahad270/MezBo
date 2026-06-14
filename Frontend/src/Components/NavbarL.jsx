import "../App.css";
import React from "react";
import logo from "../assets/Logo.png";
export default function NavbarL() {
    return (
        <>
            <div id="navbarlholder">
                <img  src={logo} alt="Logo" className="Logo"/>
                <h2 style={{color:"blue"}}>MezBo||Find.Book.Stay. </h2>
                <div> 
                <button className="LoginBtn">Login</button>
                <button className="LoginBtn">SignUp</button>
                </div>
            </div>
        </>
    );   
}