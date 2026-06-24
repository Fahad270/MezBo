import axios from "axios";
import "../App.css";
import { useEffect,useState } from "react";
import MyOwnership from "../Components/MyOwnership";
import { useParams } from "react-router-dom";

export default function ReservedHotelPage() {
    const { id } = useParams();
    const [propty, setPropty] = useState({}); 
    
    //useParams() is a method that is used to retrieve the parameter provided in the path/url. like we do in backend req.params.parametername same thing in react we do using useParams() method.!!
    async function findtheog() {
        //const response = await axios.get(`http://localhost:5000/prop/${id}`);
        const response = await axios.get(`https://mezbo.onrender.com/${id}`);
        if (response) {
            setPropty(response.data);
        } else {
            console.log("Kuch to hhua haii findingtheog me!!");
        }
    }
    
    useEffect(() => { 
        //Last time we studied that useEffect is ususally used to collect/fetch the data it is avoided to use
        findtheog();
        //This react hook will be triggered everytime whenever the component mounts!!!
    }, []);


    function showAll() {
        alert("All Amenities will be displayed!!");
    }
    return (
        <>
            <div className="reserveHolder">
                <div className="reserveCard">
                    <img src={propty.imageurlextr} width={"200px"} />
                     <div className="PropertyInfo">
                    <h3>Hotel Name - {propty.Title}</h3>
                    <h3>Hotel Description - {propty.Description}</h3>
                    <h3>Category - {propty.Categories}</h3>
                    <h3>Price Range - {propty.Price}</h3>
                    <h3>Location - {propty.Location}</h3>
                    <h3>Country - {propty.country}</h3>
                    </div>
                    <h2>Leave A Review</h2>
                    <br />
                    
                    <h2>Rating</h2>
                    <p>Will add stars here!</p>
                    <div>
                        <h2>Comments</h2>
                        <textarea rows={10} cols={60}/>
                    </div> 
                    <button>Submit</button>
                    
                    <h2>What this place offers</h2>
                    <div className="SHolder">
                    <div className="ServiceHolder">
                        <p>Kitchen</p>
                        <p>Air Conditioning</p>
                        <p>Security Camera</p>
                    </div>
                    <div className="ServiceHolder">
                        <p>Parking</p>
                        <p>T.V</p>
                        <p>Wifi</p>
                    </div>
                    </div>
                    <button onClick={showAll} style={{marginTop:"10px"}}>Show All Amenities</button>

                    <h2>Add-on services</h2>
                    <p>After booking this home, a trip designer can arrange any of these add-on services.</p>
                    
                    <div className="SHolder">
                    <div className="ServiceHolder">
                        <p>Airport Transfer</p>
                        <p>Pre Stocking</p>
                    </div>
                    <div className="ServiceHolder">
                        <p>Butler</p>
                        <p>Cleaning</p>
                    </div>
                    </div>
                </div>
            </div>
        <MyOwnership/>
        </>
    );
}