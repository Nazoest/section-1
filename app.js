/* const {sum} =require("./helper")
const http=require("http")
const server = http.createServer((req,res)=>{

    res.end("Hello from Kenya now its all Jambo???")
})

server.listen(3000)

const total=sum(12,16)
console.log(total)

 */

/* const express = require("express")

const app =express()
app.get('/',(req,res)=>{
    res.send("Hey its Nathan learning Express!!@")
    
})
app.listen(3000) */

const fs=require('fs')
const fileName = "target.txt"

const errHandler=err=>console.log(err)
const dataHandler=data=>console.log(data.toString())

fs.readFile(fileName,(err,data)=>{
    if(err)errHandler(err);
    dataHandler(data)
    
    console.log(data)
})

console.log("Node js async programming...?")