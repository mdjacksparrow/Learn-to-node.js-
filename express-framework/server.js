const express = require("express");

const app = express();

app.get("/", (req,res)=>{
 res.send("Hello Jack");
});

app.get("/about",(req,res) => {
 res.send("Hi I am jack and a software engineer worked at Google!");
})

app.listen(3000,() => {
 console.log("server started at 3000");
});