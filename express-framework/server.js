const express = require("express");
const bodyParser = require("body-parser")
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req,res)=>{
 res.send("Hello Jack");
});

app.get("/about",(req,res) => {
 res.send("Hi I am jack and a software engineer worked at Google!");
})

app.get('/bmi',(req,res) => {
 res.sendFile("C://Users/ELCOT/Desktop/Node/BMI-calc/bmi.html");
});

app.post('/bmi',(req,res) => {
 // console.log(req.body);
 var data = req.body;
 var height = Number(data['Height']);
 var weight = Number(data['Weight']);
 console.log(height, weight);
 var n = weight * (height * height);
 
 res.send(`Your BMI Calculation is ${n}`);
})


// console.log("C://Users/ELCOT/Desktop/Node/BMI-calc");

app.listen(4000,() => {
 console.log("server started at 3000");
});