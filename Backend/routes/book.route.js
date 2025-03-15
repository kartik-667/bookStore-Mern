const express=require('express')
const bookcontroller=require('../controller/book.controller')
const router=express.Router()
const bookmodel=require('../models/bookmodel')

router.get('/',bookcontroller)


router.get('/:idn',async (req,res)=>{
    let targetid=req.params.idn

    const data=await bookmodel.find({id:Number(targetid)})

    if(!data) return res.status(404).json("data not found")

   return  res.status(200).json(data)


})



module.exports=router