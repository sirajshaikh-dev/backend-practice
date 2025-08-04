import { User } from "../models/user.model.js";
import crypto from 'crypto'

const register = async (req, res) => {
  res.send("user registered");

//   1. get data
//   2. validate data -> All fields are required
//   3. check if user already exists
//   4. create a user in database
//   5. create a verification token
//   6. save token in database
//   7. send token as email to user
//   8. send success status to user

  const { name, email, password } = req.body;

  if(!name || !email ||!password ){
    return res.status(400).json({
        message: "All fields required"
    })
  }

  //check if user exists
  const existingUser = await User.findOne({email})
  if(existingUser) return res.status(400).json({message: "User already registered"})
  
    // create new user in db
  const newUser = await User.create({name,email,password})
  if(!newUser) return res.status(400).json({message: "User not registered"})

    // Create a verificatinToken 
    const token = crypto.randomBytes(32).toString('hex')
    newUser.verificationToken= token

    //save token in  database
    await newUser.save()
};




const login = async (req, res) => {
  res.send("user login success");
};
const logout = async (req, res) => {
  res.send("user logged out");
};

export { register, login, logout };
