require("dotenv").config();

const mongoose = require("mongoose"); 

const Property = mongoose.Schema(
    {
        Title: String,
        Description: String,
        imageurlextr: String,   //This I guess so will add cloudinary ka uploaded url!!
        Categories: String,
        Price: String,
        Location: String,
        country:String,
    }   
);


const PropertyModel = mongoose.model("Property", Property);
module.exports = PropertyModel;