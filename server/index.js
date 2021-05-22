const express = require('express');

const app = express();
const port = 8000;

app.get('/hello', (req, res) => {
  res.send('Hello World! by Aleguerra05');
})



app.get('/fizzbuzz', (req, res) => {
    let result = ''
    for (let index = 1; index < 101; index++) {
        result += GetFizz(index)+'\n';
    }
    res.send(result);
})

app.get('/fizzbuzz/:number', (req, res) => {
    let result = GetFizz(req.params.number);
    res.send(result);
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