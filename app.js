const mongoose = require("mongoose")
const User = require("./models/User")
require("dotenv").config()

const db = mongoose.connect(process.env.DB).then(()=>{
    console.log("connected to DB");
})

const addUser = async(user) =>{
    try{
        await User.create(user)
        console.info("User added")
    }catch(err){
        console.log(err);
        throw err
    }
}

const searchUser = async(name) =>{
    try{
        //make case insensitive
        const search = new RegExp(name,"i")
        const user = await User.find({$or:[{firstName:search},{lastName:search}]})
        console.info(user)
        console.info(`${user.length} matches`)
    }catch(err){
        console.log(err);
        throw err
    }
}

const updateUser = async(_id,user) =>{
    try{
        await User.updateOne({_id},user)
        console.info("user updated")
    }catch(err){
        console.log(err);
        throw err
        }
}

const deleteUser = async(_id) =>{
    try{
        await User.deleteOne({_id})
        console.info("user deleted")
    }catch(err){
        console.log(err);
        throw err
        }
}

const listUser = async() =>{
    try{
        const users = await User.find()
        console.info(users)
        console.info(users.length+" users")
    }catch(err){
        console.log(err);
        throw err
        }
}

module.exports = {
    addUser,
    searchUser,
    updateUser,
    deleteUser,
    listUser
}