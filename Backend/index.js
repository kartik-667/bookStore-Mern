const express=require('express')
const app=express()
const dotenv=require('dotenv')
dotenv.config()
const mongoose=require('mongoose')
const cors=require('cors')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// app.use(cors({
//     origin: 'http://localhost:5173',
//     methods: 'GET,POST,PUT,DELETE',
//     allowedHeaders: 'Content-Type,Authorization'
//   }));

const port=process.env.PORT || 6667
const URI=process.env.MONGOURI
const bookrouter=require('./routes/book.route')
const userrouter=require('./routes/user.route')

//db connection->
try {
    mongoose.connect(URI).then(()=>{
        console.log('mongo connection successfull...');
        
    })
    
} catch (error) {
    console.log("some error occured-> "+error);
    
}

app.use('/book',bookrouter)

app.use('/user',userrouter)

app.get('/',(req,res)=>{
    res.send("home page")
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
    
})
