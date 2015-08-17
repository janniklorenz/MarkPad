var sharejs = require('share');
var lessMiddleware = require('less-middleware');
var config = require("./config.js");
var express = require('express');
var http = require("http");
var app = express();


// set the view engine to jade
app.set('view engine', 'jade');


// assets routes
app.use("/assets/css/", lessMiddleware(__dirname + "/stylesheets"));
app.use("/assets/css/", express.static(__dirname + "/stylesheets"));

app.use("/assets/js/marked.min.js", express.static(__dirname + "/node_modules/marked/marked.min.js"));
app.use("/assets/css/highlight/", express.static(__dirname + "/node_modules/highlight.js/styles/"));

app.use("/assets/", express.static(__dirname + "/assets"));


// routes for app
app.get('/', function(req, res) {
	res.render('pad');
});
app.get('/(:id)', function(req, res) {
	res.render('pad');
});


// set up redis server
var redisClient;
console.log(process.env.REDISTOGO_URL);
if (process.env.REDISTOGO_URL) {
	var rtg   = require("url").parse(process.env.REDISTOGO_URL);
	redisClient = require("redis").createClient(rtg.port, rtg.hostname);
	redisClient.auth(rtg.auth.split(":")[1]);
} else {
	redisClient = require("redis").createClient();
}


// options for sharejs
var options = {
	db: {type: 'redis', client: redisClient}
};


// attach the express server to sharejs
sharejs.server.attach(app, options);


// start express
var server = http.Server(app)
server.listen(config.network.port, config.network.address)
server.on('listening', function() {
	console.log('Express server started on at %s:%s', server.address().address, server.address().port)
})
