const mongoose = require("mongoose")
const User = require("./models/User")
require("dotenv").config()

await mongoose.connect(process.env.DB)

console.log("db connected")

const addUser = async(user) =>{
    await User.create(user)
    console.info("User added")
}

const searchUser = async(name) =>{
    //make case insensitive
    const search = new RegExp(name,"i")
    const user = await User.find({$or:[{firstName:search},{lastName:search}]})
    console.info(user)
    console.info(`${user.length} matches`)
}

module.exports = {
    addUser,
    searchUser
}