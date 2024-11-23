import mongoose  from "mongoose";

const imageSchema = new mongoose.Schema({

    image:{type:String,required:true},
    category:{type:String,required:true}
    
})

export const images = mongoose.model("images",imageSchema)