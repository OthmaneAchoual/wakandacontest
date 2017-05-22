var express = require('express'),
    app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.sendFile('index.html');
});

app.listen(app.get('port'), function() {
	console.log('Server started, ctrl-c to terminate ...');
});
