const mongoose=require('mongoose')


const bookSchema=new mongoose.Schema({

    id:Number,
    name:String,
    price:Number,
    category:String,
    image:{
        type:String,
        default:"https://www.clipartmax.com/png/full/21-211188_a-higher-loyalty-book-clip-art-a-higher-loyalty-book-clip-art.png"
    }

})

const book=mongoose.model("book",bookSchema)
module.exports=book