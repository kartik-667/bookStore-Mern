const express=require('express')
const app=express()
const dotenv=require('dotenv')
dotenv.config()
const mongoose=require('mongoose')

const port=process.env.PORT || 6667
const URI=process.env.MONGOURI
const bookrouter=require('./routes/book.route')

//db connection->
try {
    mongoose.connect(URI).then(()=>{
        console.log('mongo connection successfull...');
        
    })
    
} catch (error) {
    console.log("some error occured-> "+error);
    
}

app.use('/book',bookrouter)

app.get('/',(req,res)=>{
    res.send("home page")
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
    
})
