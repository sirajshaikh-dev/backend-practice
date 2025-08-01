import mongoose  from "mongoose";

const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    password: String,
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },
    isVerified:{
        type: Boolean,
        require:true,
    },
    passwordResetToken:{
        type:String,
    },
    passwordRefreshToken:{
        type:String,
    },
    verificationToken:{
        type:String,
    },
    resetPasswordExpires:{
        type:Date
    }
},{timestamps:true})

const User= mongoose.model('User',userSchema)

export default User