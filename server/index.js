const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.get('/fizzbuzz', (req, res) => {
    let result = ''
    for (let index = 1; index < 101; index++) {
        if(index%15==0)
            result+="fizzbuzz\n"
        else if(index%3==0)
            result+="fizz\n"
        else if(index%5==0)
            result+="buzz\n"
        else
            result+=index+"\n"
    }
    res.send(result)
  })

module.exports = app;