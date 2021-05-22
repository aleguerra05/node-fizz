var server = require('./server');
var port = process.env.PORT || 8000;

server.listen(port, function () {
  console.log(`Example app listening at http://localhost:${port}/fizzbuzz`)
});