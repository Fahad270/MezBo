import React from "react";
import "../App.css";
export default function CardP_2(props) {
    const Name = props.Name;
    const ImageUrl = props.ImageUrl;
    const Description = props.Description;
    return (
        <div id="CardL">   
            <h3>{Name}</h3>
            <ImageUrl size={100} /> 
            <p style={{textAlign:"center"}}>{Description}</p>
        </div>
    );
}