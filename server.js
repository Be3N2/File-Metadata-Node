// server.js
// Already set up for express

var express = require('express');
var multer  = require('multer');
var upload = multer();

var app = express();


app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// open port with a callback
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

app.post('/file-upload', upload.single('fileUpload'), function (request, response, next) {
  // req.file is the `avatar` file 
  console.log(request.fileUpload);
  response.send("running");
  // req.body will hold the text fields, if there were any 
})