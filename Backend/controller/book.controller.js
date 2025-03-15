const bookmodel=require('../models/bookmodel')


const getbooks=async (req,res)=>{
    try {
        const data=await bookmodel.find()
        res.status(200).json(data)

        
    } catch (error) {
        console.log('some error occured',error);
        res.status(500).json(error)
        
        
    }
}

module.exports=getbooks