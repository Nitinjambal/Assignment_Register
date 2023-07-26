import mongoose from "mongoose";

//Model
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    education:{
        type: String,  
        required: true
    },
    city:{
        type:String,
        required:true
    },
    country:{
      type:String,
      required:true
    },
    mobileNo:{
        type:Number,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
});

export const User = mongoose.model("User", userSchema);