import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()
// → Connect to MongoDB using Mongoose with URL from environment variable

// const db = async()=>{
//    await mongoose.connect(process.env.MONGO_URL)
//   .then(() => {
//     console.log('Mongodb connected')     // → Log success message on successful DB connection
// })
//   .catch((err) => {
//     console.log('Failed to connect Mongodb', err)  // → Log error if connection fails
//   })
// }


const db = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("connected to mongodb");
    })
    .catch((err) => {
      console.log("Error connecting to mongodb");
    });
};

export default db;