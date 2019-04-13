const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
var text = [];

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/',function(req,res) {
	res.sendFile(path.join(__dirname+'/home.html'));
  });
// app.use('/',express.static('./public'));

app.get('/text',(req,res) =>{
	text.push(req.query.task);
	res.sendStatus(200);
});


app.listen(5000,function(){
	console.log('server is listening on 5000');
});