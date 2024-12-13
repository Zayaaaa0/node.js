const http = require('http');
const { faker } = require('@faker-js/faker');
const randomName = faker.person.fullName()


http.createServer(function (req, res) {
  res.writeHead(200,{"Content-Type" : "appication/json"}); 
  res.end(randomName.toString()); 
}).listen(8080)
