const express = require('express');
const path = require("path");

const app = express();
const port = 8000;

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.get('/', (req, res) => {
  res.render('home', {title:"Home", message: "This is my FizzBuzz"});
})

app.get('/check',(req,res)=>{
    res.render('check',{title:"Check Number"});
})

app.get('/result',(req,res)=>{
    res.render('result',{title:"Fizzbuzz Result", number:req.query.number, fizz:GetFizz(req.query.number)});
})

app.get('/fizzbuzz', (req, res) => {
    let result = ''
    for (let index = 1; index < 101; index++) {
        result += GetFizz(index)+'\n';
    }
    res.send(result);
})

app.get('/fizzbuzz/:number(\\d+)', (req, res) => {
    let result = GetFizz(req.params.number);
    res.send(result);
})

app.use(function(req, res, next) {
    res.status(404);
  
    // respond with html page
    if (req.accepts('html')) {
      res.render('404', {title:"404 Not Found" });
      return;
    }
})

function GetFizz(number) {
    if (number%15==0) {
        return "fizzbuzz";
    } else if (number%3==0){
        return "fizz";
    } else if (number%5==0){
        return "buzz";
    } else {
        return number;
    }
}

module.exports = app;