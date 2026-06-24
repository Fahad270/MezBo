import "../App.css";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import app from "../firebase/firebase.js";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
export default function LoginPage() {
    const [email, setEmail] = useState();
    const [password, setpass] = useState();
    const navigate = useNavigate();
    function handleClick() {
        if (email != "" && password != "") {
            const auth = getAuth(app);
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    {
                        email === "Admin12@gmail.com" && (
                                navigate("/adash")
                        )
                        email === "Host@gmail.com" && (
                            navigate("/dlrform")
                        )
                        email !== "Admin12@gmail.com" && email !== "Host@gmail.com" && (
                            navigate("/uhome")
                        ) 
                    }
                }).catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log("Locha hua hai!!");
                    console.log(errorMessage);
                });
        }else{
            alert("Please fill all the input!");
        }
    }
    return (
        <>
            <div className="LoginHolder_1">
            <div className="LoginHolder">
                <div className="Log1">
                        <h2 style={{ fontFamily: "Comic sans" }}>Hello Again!</h2>
                        <h3>So Happy to see you Again</h3>
                        <div className="HolderLog">
                        <input type="text" className="Input" placeholder="Email" required  onChange={(e)=>{setEmail(e.target.value)}}/>
                        <input type="text" className="Input" placeholder="Password" required  onChange={(e) => { setpass(e.target.value) }} />
                            
                            <button className="LoginBtn_1" onClick={handleClick}>Login</button>
                        </div>
                        <p>Don't have an account?<a href="/Signup">SignUp</a></p>
                        <h3>---- Or Continue With ----</h3>
                        <div>
                            <FcGoogle size={"30px"} style={{margin:"10px"}} />
                            <FaGithub size={"30px"} style={{ margin: "10px" }} />
                            <FaFacebook size={"30px"} style={{ margin: "10px" }}/>
                        </div>
                    </div>
                <div className="Log2">    
                </div>
                </div>
            </div>
        </>
    );
}