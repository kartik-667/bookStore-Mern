const express=require('express')
const bookcontroller=require('../controller/book.controller')
const router=express.Router()

router.get('/',bookcontroller)




module.exports=router