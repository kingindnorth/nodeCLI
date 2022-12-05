const program = require("commander")

const {
    addUser,
    searchUser
} = require("./app")

program.version("1.0.0").description("CLI:command line interface")

program.command("add <firstName> <lastName> <email> <phone>")
       .alias("a")
       .description("add a user")
       .action((firstName,lastName,email,phone)=>{
            addUser({firstName,lastName,email,phone})
       })

program.command("find <name>")
       .alias("f")
       .description("find a user by name")
       .action((name)=>{
            searchUser(name)
       })

program.parse(process.argv)