var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + './index.html'));
});

app.get('/contact', function(req, res){
	res.send('Strona Kontakt');
});



app.listen(3000, function(){
	console.log('Serwer działa prawidłowo');
});