// server.js
// Already set up for express

var express = require('express');
var app = express();

var multer  = require('multer');
var upload = multer();

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// open port with a callback
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

app.post('/file-upload', upload.single('fileUpload'), function (request, response, next) {
  console.log(request.file.size);
  var sizeObj = {"name": request.file.originalname, "size": request.file.size};
  response.send(sizeObj);
  // req.body will hold the text fields, if there were any 
});