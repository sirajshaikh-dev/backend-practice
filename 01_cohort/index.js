// index.js

import express from 'express'            // → Import Express framework to build the backend server
import mongoose from 'mongoose'          // → Import Mongoose to connect and interact with MongoDB
import cors from 'cors'                  // → Import CORS middleware to handle cross-origin requests
import dotenv from 'dotenv'              // → Import dotenv to load environment variables from .env file

dotenv.config()                          // → Load environment variables from .env into process.env

const app = express()                    // → Create an Express app instance
const port = process.env.port || 3000    // → Use port from .env or default to 3000

app.use(cors())                          // → Enable CORS for all routes (allow frontend to connect)
app.use(express.json())                  // → Parse incoming JSON requests (body parser)

// → Connect to MongoDB using Mongoose with URL from environment variable
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Mongodb connected')     // → Log success message on successful DB connection
  })
  .catch((err) => {
    console.log('Failed to connect Mongodb', err)  // → Log error if connection fails
  })

// → You can add routes below this line (e.g., app.use('/register', noteRoutes))
app.get('/register',async (req,res)=>{
    res.send('User registerd successfully')
})

 app.listen(port, () => console.log(`Server running on port ${port}`)) // ← Don’t forget this line to start server
