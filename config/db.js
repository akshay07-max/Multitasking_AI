const mongoose = require("mongoose");
const colors = require("colors") 

const connectDb = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`Connected to Mongodb database ${mongoose.connection.host}`.bgCyan.white);

    }catch(error){
        console.log(`MongoDb Database Error ${error}`.bgRed.white)
    }
}

module.exports = connectDb