const mongoose=require('mongoose')
const user=require('../models/usermodel')
const bcrypt=require('bcrypt')

const signup= async (req,res)=>{
    try {
        
        let {name,email,password}= req.body
    
        const hashedpass=await bcrypt.hash(password,10)
        console.log('hashedpass is ',hashedpass);
        
    
    
    
        let finduser=await user.findOne({email:email})
        if(finduser) return res.status(404).json("user already exist")
    
        const newuser=new user({
            name,email,password:hashedpass
        })
    
        await newuser.save()
        if(newuser) return res.status(201).json({message:"user created succesfully", user:{
            id:newuser._id,
            name:newuser.name,
            email:newuser.email
        }}) //sending data to front end
        
    } catch (error) {
        console.log(error.message);
        alert("some error occured try again")
        
        
    }
}

const login= async (req,res)=>{
    try {
        const {email,password}=req.body
    
        let field=await user.findOne({email:email}) //this contains our user
        if(!field) return res.status(404).send("user not found with email")
    
        let checkpass=await bcrypt.compare(password,field.password)
        if(checkpass) return res.status(200).json({message:"login successful",user:{
            id:field._id,
            name:field.name,
            email:field.email
    
        }})
        else return res.status(404).send("password is incorrect")
        
    } catch (error) {
        console.log(error.message);
        return res.status(500).send("internal server error")
        

        
    }


}

module.exports={signup ,login}