var express = require('express');
var path = require('path');

var port = process.env.PORT || 3000;
var app = express();

app.use(function(req, res, next){
  console.log(req.method, req.url);
  next();
});

app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.all('/*', function (req, res, next) {
  res.sendFile('/public/index.html', {root: __dirname});
})

app.listen(port, function () {
  console.log("Server is up and running on port", port)
});
