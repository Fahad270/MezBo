import React, { useState } from "react";
import "../App.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
export default function RAGPage() {
    const navigate = useNavigate();
        
    const [query, setQuery] = useState("");
    function askit() {
        alert("Question Asked to RAG System!!");
    }
    function gohome() {
        navigate("/uhome");
    }
    return (
        <>
            <div style={{backgroundColor:"#213555"}} onClick={()=>{gohome()}}>
                <IoMdArrowRoundBack size={"40px"} color="white"  />
            </div>
            <div className="RAGHolder">
                <div>
                    <h2>Mezbo AI Assistant</h2> 
                    <p>Ask any hotel related query.</p>
                    <input type="text" placeholder="Please enter your query!!" className="RAGInput" onChange={(e)=>{setQuery(e.target.value)}}/>
                    <button onClick={()=>{askit()}}>Ask Your RAG System!</button>
                </div>
            </div>
        </>
    );
}