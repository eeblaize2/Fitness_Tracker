const mongoose= require('mongoose');

const connect_db= async()=>{
    try{
        const conn= await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false

        })
        console.log('mongodb connected')
    } catch(error){
        console.error('error: ', error.message)
        process.exit(1)
    }
} 
module.exports= connect_db;