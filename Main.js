var http = require('http');
var express = require('express');

const db="abc";
const port=3000;

var app =express();


app.listen(port,function(){
	console.log('MAP API Server started at port:' + port);
});

