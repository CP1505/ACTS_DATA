const fs=require("fs")
fs.writeFileSync("test.txt","hello word!!!\n \"welcome\" to nodejs progamming")
var data=fs.readFileSync("test.txt")
console.log(data.toString())