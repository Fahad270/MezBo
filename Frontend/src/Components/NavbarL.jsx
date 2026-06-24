import "../App.css";
import React from "react";
import logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";
export default function NavbarL() {
    const navigate = useNavigate();

    function handleLoginClick() {
        navigate("/login");
        console.log("DUDEE LOGIN BTN CLICKED");
    }
    function handleSignClick() {
        navigate("/signup");
        console.log("DUDEE LOGIN BTN CLICKED");
    }
    return (
        <>
            <div id="navbarlholder">
                <img  src={logo} alt="Logo" className="Logo"/>
                <h2 style={{color:"#273338"}}>MezBo||Find.Book.Stay. </h2>
                <div> 
                <button className="LoginBtn" onClick={handleLoginClick}>Login</button>
                <button className="LoginBtn" onClick={handleSignClick}>SignUp</button>
                </div>
            </div>
        </>
    );   
}