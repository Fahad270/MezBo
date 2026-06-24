import { React,useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import app from "../firebase/firebase.js";
import { FaFacebook } from "react-icons/fa";
import { getAuth, createUserWithEmailAndPassword } from "firebase";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function SignUp() {

    const navigate = useNavigate();
    const [email, setemail] = useState("");
    const [password1, setpass1] = useState("");
    const [password2, setpass2] = useState("");
    const [role, setrole] = useState("");
    function handleClick() {
        if (email !== "" && password1 != "" &&  password2 != "" && password1==password2) {

            const auth = getAuth(app);
            createUserWithEmailAndPassword(auth, email, password2)
                .then((userCredential) => {
                    const user = userCredential.user;
                    navigate("/login");

                }).catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage);
                    console.log("DUDEEE KUCH ISSUE HUA HAI!!");
                });
        } else {
            alert("Empty!!!!Fields Not Allowed!!Password 1 and Password 2 must match");
        }
    }

    return (
        <>
                    <div className="LoginHolder_1">
                    <div className="LoginHolder">
                    <div className="Log2"></div>
                    <div className="Log1">
                        <h2 style={{ fontFamily: "Comic sans" }}>Hello Again!</h2>
                            <h3>Welcome User, Create your new account!</h3>
                            <div className="HolderLog">
                            <input name="in1" type="text" className="Input" placeholder="Email" required onChange={(e)=>{setemail(e.target.value)}}/>
                            <input name="in2" type="text" className="Input" placeholder="Password" required onChange={ (e)=>{setpass1(e.target.value)} } />
                            <input type="text" name="in3" className="Input" placeholder="Re-Enter Password" required  onChange={ (e)=>{setpass2(e.target.value)} } />
                            
                            <div>
                                <p style={{ marginRight: "10px",display:"inline" }}>I want to:</p>
                            <select onChange={(e) => { setrole(e.target.value) }} style={{border:"1px solid transparent"}}>
                                <option value={"Guest"}>Book Stays</option>
                                <option value={"Host"}>List Properties</option>
                                </select></div>
                            <br />
                            <button className="LoginBtn_1" onClick={handleClick}>SignUp</button>
                                    </div>
                                    <h3>---- Or Continue With ----</h3>
                                    <div>
                                        <FcGoogle size={"30px"} style={{margin:"10px"}} />
                                        <FaGithub size={"30px"} style={{ margin: "10px" }} />
                                        <FaFacebook size={"30px"} style={{ margin: "10px" }}/>
                                    </div>

                                </div>
                            </div>
                        </div>
        </>
    );
}