require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose"); 
const app = express();
const PropertyModel = require("./Model/Property.js");

app.use(cors());
app.use(express.json());

//Connection With the MongoDB Database established!!!!
mongoose.connect(process.env.mongo_uri).then(()=>{console.log("Connection with mongodb established!!!!")}).catch((err)=>{console.log(err)});

//Adding new doc in the collection using Create() method of MongoDb Model(Express)
app.post("/prop", (req, res) => {
    try {
        if (req.body) {
            res.status(200).json({ Message: "Oh Shabbas Ji data hogya ji send!!!" });
            console.log(req.body);
            const newprop = PropertyModel.create(req.body); 
            
        }
    } catch (err) {
        res.status(400).json({Error:err.Message});
    }
});

//Fetching all the data stored in the DB using find() method!! 
app.get("/prop", async (req, res) => {
    try {
        const data = await  PropertyModel.find();
        res.json(data);
    } catch (err) {
        console.log(err);
        console.log("LOCHUA ");
   }
});

app.get("/prop/:id", async (req, res) => {
    try {
        if (req.params.id) {
            const data = await PropertyModel.findById(req.params.id);
            res.status(200).json(data);
        }
    } catch (Error) {
        console.log(Error.message);
        res.status(400);
    }
});


app.delete("/prop/:id",  async(req, res) => {
    try { 
        if (req.params.id) {
            const idd = req.params.id;
            await PropertyModel.findByIdAndDelete(idd);
            res.status(200).json({ "Message": "Deleted!Successfully!" });
        }
    } catch (err) {
        console.log(err);
        res.status(400).json({ "Message": err });
   } 
});

app.listen(5000,() => {
    console.log("Server is listening on port 5000! ");
})