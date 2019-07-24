var express = require('express');
var app =express();
var bodyParser = require('body-parser');
var port =process.env.PORT || 8080

app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static(__dirname));

app.get("/", function(req, res) {
    res.render("index.htm");

})

app.post('/test', function(req, res) {
	console.log(req.body);
	res.send("Hello");
});

app.listen(port,function() {
    console.log("app running");

})