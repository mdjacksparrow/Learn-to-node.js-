const express = require('express');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;
app.listen(port, () => {
 console.log(`Server started at ${port}`);
});

app.get('/',(req, res) => {
 res.sendFile(__dirname + "/calculator.html");
});

app.post('/',(req,res) => {
 var num_1 = Number(req.body['num_1']);
 var num_2 = Number(req.body['num_2']);

 res.send(`The sum of two num is ${num_1 + num_2}`);
});