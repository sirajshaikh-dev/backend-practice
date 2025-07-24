import express from 'express'            // → Import Express framework to build the backend server
import cors from 'cors'                  // → Import CORS middleware to handle cross-origin requests
import dotenv from 'dotenv'              // → Import dotenv to load environment variables from .env file
import db from './db.js'

import userRoutes from './routes/user.routes.js'

dotenv.config()                          // → Load environment variables from .env into process.env

const app = express()                    // → Create an Express app instance
const port = process.env.port || 3001    // → Use port from .env or default to 3000

app.use(cors({               // → Enable CORS for all routes (allow frontend to connect)
  origin: 'http://localhost:3000',
  credentials: true,
  methods: ['GET, POST, PUT, DELETE'],
  allowedHeaders: ['Content-Type','Authorization']
}))                        
app.use(express.json())                  // → Parse incoming JSON requests (body parser)

db()

// → You can add routes below this line (e.g., app.use('/register', noteRoutes))
// app.get('/register',async (req,res)=>{
//     res.send('User registerd successfully')
// })

app.use('api/v1/users',userRoutes)

app.listen(port, () => {      // ← Don’t forget this line to start server
console.log(`Server running on port ${port}`)
})
