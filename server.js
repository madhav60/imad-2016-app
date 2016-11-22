var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/intro', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'work1.html'));
});
app.get('/hills', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'work2.html'));
});
app.get('/beaches', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'work3.html'));
});
app.get('/islands', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'work4.html'));
});
app.get('/forests', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'work5.html'));
});
app.get('/pilgrimage', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'work6.html'));
});
app.get('/museums', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'work7.html'));
});
app.get('/zoos', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'work8.html'));
});
app.get('/wildlifesanctuaries', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'work9.html'));
});
app.get('/natparks', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'work10.html'));
});
app.get('/amuseparks', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'work11.html'));
});
app.get('/counter', function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});
var counter= 0;
app.get('/article-two', function (req, res) {
  res.sendFile('article two would be shown here,');
});
app.get('/article-three', function (req, res) {
  res.sendFile('article three mentioned will be shown here');
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
