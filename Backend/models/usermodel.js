const mongoose=require('mongoose')


const userSchema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String, 
        required:true
    }
},{timestamps:true})

const model=mongoose.model("user",userSchema)
module.exports=model