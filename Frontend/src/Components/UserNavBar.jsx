import react from "react";
import "../App.css";
import logo from "../assets/Logo.png";
import { TbMessageChatbot } from "react-icons/tb";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
export default function UserNavBar() {
    const navigate = useNavigate();
    
    function handleSettings() {
        navigate("/login");
    }
    function WayToRAG() {
        navigate("/RAG");
    }
    return (
        <>
            <div className="UserNav">
                <div style={{ display: "flex", alignItems: "center"}}>    
                    <img src={logo} alt="Logo" className="Logo" /><span>Mezbo</span>
                </div>
                <input type="text" placeholder="Search Bar Functionality Will be added Soon!!" style={{ borderRadius: "10px", border: "1px solid black", width: "300px", textAlign: "center", height: "30px" }} />
                <div style={{display:"flex",flexWrap:"wrap",gap:"10px"}}>
                <div onClick={() => { WayToRAG() }}><TbMessageChatbot size={"40px"} /></div>
                <div onClick={() => { handleSettings()}} ><IoIosLogOut  size={"40px"} /></div>
                </div>
        </div>
        </>
    );
}