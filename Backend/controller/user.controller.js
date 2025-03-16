const mongoose=require('mongoose')
const user=require('../models/usermodel')
const bcrypt=require('bcrypt')

const usercontroller= async (req,res)=>{

    let {name,email,password}= req.body

    const hashedpass=await bcrypt.hash(password,10)
    console.log('hashedpass is ',hashedpass);
    



    let finduser=await user.findOne({email:email})
    if(finduser) return res.status(404).send("user already exist")

    const newuser=new user({
        name,email,password:hashedpass
    })

    newuser.save()
    if(newuser) return res.status(201).send("user created succesfully")
}

module.exports=usercontroller