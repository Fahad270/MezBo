import react, { useEffect, useState } from "react";
import AdminCard from "../Components/AdminCard";
import "../App.css";
import axios from "axios";

export default function AdminDashPage() {
    const [prop, setprop] = useState([]);
        async function FetchData() {
            try {
                //https://mezbo.onrender.com
                // const response = await axios("http://localhost:5000/prop");    
                const response = await axios("https://mezbo.onrender.com");
                if (response) {
                    console.log(response.data);
                    setprop(response.data);   
                } else {
                    console.log("Couldn't fetch Data!!");
                }
            } catch (err) {
                console.log(err);
            }
        }
        
        
        useEffect(() => {
            FetchData();
        }, []);
    
    function callDelete(id) {
       //const response = axios.delete(`http://localhost:5000/prop/${id}`);
        const response = axios.delete(`https://mezbo.onrender.com/${id}`);
    }
        return (
            <>
            <div className="AdminBody">
            <div>
                <h1 style={{textAlign:"center"}}>Admin Dashboard</h1>
                <h1>Welcome Back,&nbsp;&nbsp;Admin</h1>
            </div>
            <div className="AdminCardHolder">
                <AdminCard texttodisplay={"Total Active Users"} valuep={77} />    
                <AdminCard texttodisplay={"Total Reservation"} valuep={27} />    
                <AdminCard texttodisplay={"Total Reviews"} valuep={10} />    
                <AdminCard texttodisplay={"Total Hosts"} valuep={7} />    
                <AdminCard texttodisplay={"Total Properties"} valuep={17} />    
                <AdminCard texttodisplay={"Just Values"} valuep={50} />    
                <AdminCard texttodisplay={"Just Values"} valuep={50} />    
                <AdminCard texttodisplay={"Just Values"} valuep={50} />    
                </div>
                <div className="AdminTable">
                        <table>
                            <tbody>
                            <tr>
                            <th>Property Name</th>
                            <th>Categories</th>
                            <th>Location</th>
                            <th>Country</th>
                            <th>Price</th>
                            <th>Action</th>
                                </tr>
                            
                            {
                                prop.map((p,index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{p.Title}</td>
                                            <td>{p.Categories}</td>
                                            <td>{p.Location}</td>
                                            <td>{p.country}</td>
                                            <td>{p.Price}</td>
                                            <td><button  className="admindel"onClick={()=>{callDelete(p._id)}}>Delete</button></td>
                                            
                                        </tr>
                                    );
                                })
                                
                            }
                        </tbody>
                        </table>
                    </div>
                    
            </div>
            </>
    );
}
