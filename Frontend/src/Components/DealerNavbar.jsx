import { useNavigate } from "react-router-dom";
import "../App.css";
import React from "react";

export default function DealerHomePage() {
    const navigate = useNavigate();
    function handleAdd() {
        navigate("/dlrform");
    }
    function handleView(){
        navigate("/dlrprop");
    }
    return (
        <>
            <div className="DealNavBar">
                <button className="dlrbtn" onClick={handleAdd}>Add New Properties</button>
                <button className="dlrbtn" onClick={handleView }>My Properties</button>
            </div>
        </>
    );
}