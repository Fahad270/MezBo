import "../App.css";
import React from "react";
export default function NavbarL() {
    return (
        <>
            <div id="navbarlholder">
                <img  alt="Logo" />
                <p>Company Name -- Add Company Slogan! </p>
                <div> 
                <button className="LoginBtn" style={{margin:"5px"}}>Login</button>
                <button className="LoginBtn" style={{margin:"5px"}}>SignUp</button>
                </div>
            </div>
        </>
    );   
}