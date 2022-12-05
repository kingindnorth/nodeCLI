const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    firstName:{
        type:String,
        default:"john"
    },
    lastName:{
        type:String,
        default:"doe"
    },
    email:{
        type:String,
        default:`${firstName}.${lastName}@gmail.com`
    },
    contact:{
        type:String,
    }
})

module.exports = mongoose.model("User",UserSchema)