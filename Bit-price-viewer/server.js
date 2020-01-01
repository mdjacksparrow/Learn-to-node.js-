const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

var app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/',(req,res) => {
 res.send("This is home page");
});

app.get('/Price-Viewer',(req,res) => {
 res.sendFile(__dirname + "/Price-Viewer.html");
});

app.post('/Price-Viewer', (req,res) => {
 var data = req.body;
 console.log(data.Coin_option);
 
 request("https://blockchain.info/ticker", (error, response, body) => {
  var price = JSON.parse(body);
  var currencySymbol = data.Coin_option;

  switch (currencySymbol) {
    case "USD":
      res.send(
        `Currently available market price of ${data.Coin_option} is ${price.USD.last}`
      );
      break;
    case "CAD":
      res.send(
        `Currently available market price of ${data.Coin_option} is ${price.CAD.last}`
      );
      break;
    case "CHF":
      res.send(
        `Currently available market price of ${data.Coin_option} is ${price.CHF.last}`
      );
      break;

    case "EUR":
      res.send(
        `Currently available market price of ${data.Coin_option} is ${price.EUR.last}`
      );
      break;

    case "INR":
      res.send(
        `Currently available market price of ${data.Coin_option} is ${price.INR.last}`
      );
      break;
  }
 });
});

app.listen(4000,() => {
 console.log(`Server started on port 4000`);
});