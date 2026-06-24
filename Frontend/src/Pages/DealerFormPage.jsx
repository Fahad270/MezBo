import React, { useState } from "react";
import "../App.css";
import axios from 'axios';

import DealerNavbar from "../Components/DealerNavbar";
import MyOwnership from "../Components/MyOwnership";
import { FaTag } from "react-icons/fa";
import { TbReceiptDollarFilled } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import { IoMdCloudUpload } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";

export default function DealerFormPage() {

    const [Title, setTitle] = useState("");
    const [Description, setDescription] = useState("");
    const [ImageUrl, setImageUrl] = useState("");
    const [Categories, setCategories] = useState("");
    const [Price, setPrice] = useState("");
    const [Location, setLoc] = useState("");
    const [country, setcountry] = useState("");
    const [imageurlextr, setImageUrlE] = useState("");

    const Categoriesgories = ["Villa", "Apartment", "Resort", "Hotel"];
    function clearForm() {
        setTitle("");
        setDescription("");
        setImageUrl("");
        setCategories("");
        setPrice("");
        setLoc("");
        setcountry("");
    }

    async function AddProp(e) {
        let  url = "";
        alert("Form Data Submitted!!!");
     
        try {
            const formdata = new FormData();
            formdata.append("file", ImageUrl);
            formdata.append("upload_preset", "Hotel_Booking");
            if (ImageUrl !== "") {
                const response = await axios.post("https://api.cloudinary.com/v1_1/di8wvyvi5/image/upload", formdata);
                console.log(response.data.secure_url);
                url = response.data.secure_url;//react useState() is async in nature!!! which updates after some time!!so we used traditional approach!!
                setImageUrlE(url);
            }
            const PropertyData = { Title, Description, imageurlextr:url, Categories, Price, Location, country };
            if (Title !== "" && Description !== "" && Categories !== "" && Price !== "" && Location !== "" && country !== "" && url!=="") {    
                clearForm();
                // const response = await axios.post("http://localhost:5000/prop", PropertyData);
                const response = await axios.post("https://mezbo.onrender.com", PropertyData);
                if (response) {
                    console.log(response.data);
                }
            } else {
                console.log("kuch toh hua hai!!");
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <DealerNavbar />

            <div className="FormHolder">
                <h1>Create a New Listing</h1>
                <div>
                    <div style={{display:"flex",alignItems:"center"}}><FaTag color="#88BD4A" />&nbsp;&nbsp;<h2>Title</h2></div>
                    <input type="text" placeholder="Enter a Catchy Title" value={Title} style={{ width: "800px", height: "60px", borderRadius: "5px", border: "1px solid black", padding: "15px" }} onChange={(e) => { setTitle(e.target.value) }} />
                </div>

                <div>
                                      <div style={{display:"flex",alignItems:"center"}}> <IoDocumentText color="#88BD4A" /> &nbsp;&nbsp;<h2>Description</h2></div>
                    <textarea onChange={(e) => { setDescription(e.target.value) }} value={Description} placeholder="Enter Description" style={{ width: "800px", height: "60px", borderRadius: "5px", border: "1px solid black", padding: "15px" }} />
                </div>
                <div style={{width:"800px"}} >
                       <div style={{display:"flex",alignItems:"center",width:"800px"}}><IoMdCloudUpload color="#88BD4A"/>&nbsp;&nbsp;<h2>Upload  ImageUrl</h2></div>
                    <input type="file" onChange={(e) => { setImageUrl(e.target.files[0]) }} style={{ width: "800px", marginTop: "15px", backgroundColor: "lightgrey", fontFamily: "-apple-system" }} />
                </div>
                <div>
                    <div style={{ display: "flex", alignItems: "center" }} >
                        <BiCategory color="#88BD4A" />&nbsp;&nbsp;
                    <h2 style={{ textAlign: "center" }}>Select Category</h2></div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start",width:"800px" }}>
                        {
                            Categoriesgories.map((Categories, index) => {
                                return (
                                    <label key={index} className="RadioForm" >
                                        <input type="radio" name="Categoriesgory" value={Categories} onChange={(e) => { setCategories(e.target.value) }} />
                                        {Categories}
                                    </label>
                                )
                            })
                        }
                    </div>
                </div>

                <div>
             
              <div style={{display:"flex",alignItems:"center"}}> <TbReceiptDollarFilled color="#88BD4A" />&nbsp;&nbsp;<h2>Price</h2></div>
                    <input type="text" value={Price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter Price" style={{ width: "800px", height: "60px", borderRadius: "5px", border: "1px solid black", padding: "15px" }} />
                </div>
                <div>
                    <div style={{display:"flex",alignItems:"center"}}>
                        <FaLocationDot color="#88BD4A" />&nbsp;&nbsp;
                        <h2>Location</h2>
                    </div>
                    <input type="text" placeholder="Enter Location" value={Location} onChange={(e) => setLoc(e.target.value)} style={{ width: "800px", height: "60px", borderRadius: "5px", border: "1px solid black", padding: "15px" }} />
                </div>
                <div>
                    <div style={{display:"flex",alignItems:"center"}}>
                    <FaHome color="#88BD4A" />&nbsp;&nbsp;
                        <h2>Country</h2></div>
                    <input type="text" value={country} onChange={(e) => setcountry(e.target.value)} placeholder="Enter Country" style={{ width: "800px", height: "60px", borderRadius: "5px", border: "1px solid black", padding: "15px" }} />
                </div>
                <button onClick={AddProp} className="AddProp"> + Add Properties!!!!!</button>
            </div>
            <MyOwnership />
        </>
    );

}