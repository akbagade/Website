var express = require('express');
var app =express();
var bodyParser = require('body-parser');
var port =process.env.PORT || 8080

app.use(bodyParser.urlencoded({ extended:true }));

app.get('/', (req, res) => {
	res.send("This is a test");
});

app.post('/test', function(req, res) {
	console.log(req.body);
	res.send("Hello");
});

app.listen(port,function() {
    console.log("app running");

})