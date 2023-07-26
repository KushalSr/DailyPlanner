import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: { 
    type: String,
    required: true,
},
    email: {
        type: String,
        required: true,
        unique:true,
    },
    password: {
        type: String,
        select: false,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
});

export const User = mongoose.model("User", schema);