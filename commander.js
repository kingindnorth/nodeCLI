#!/usr/bin/env node
const program = require("commander")
const {prompt} = require("inquirer");

const {
    addUser,
    searchUser,
    updateUser,
    deleteUser,
    listUser
} = require("./app")

const questions = [
    {
        type:"input",
        name:"firstName",
        message:"user first name"
    },
    {
        type:"input",
        name:"lastName",
        message:"user last name"
    },
    {
        type:"input",
        name:"email",
        message:"user email"
    },
    {
        type:"input",
        name:"phone",
        message:"user phone"
    }
]

program.version("1.0.0").description("CLI:command line interface")

program.command("add")
       .alias("a")
       .description("add a user")
       .action(async()=>{
            const ans = await prompt(questions)
            addUser(ans)
       })

program.command("find <name>")
       .alias("f")
       .description("find a user by name")
       .action(async(name)=>{
            await searchUser(name)
       })

program.command("update <id>")
        .alias("u")
        .description("update a user by id")
        .action(async(id)=>{
            const ans = await prompt(questions)
            updateUser(id,ans)
        })    
        
program.command("delete <id>")
        .alias("d")
        .description("delete an user by id")
        .action(async(id)=>{
            await deleteUser(id)
        })        

program.command("list")
        .alias("l")
        .description("list of all users")
        .action(async()=>{
            await listUser()
        })

program.parse(process.argv)