var express = require('express'),
    app = express();

var books = [{"title": "The C++ programming language", "author": "Bjarne Stroustrup"}, 
			 {"title": "1984", "author": "George Orwell"},
			 {"title": "Les miserables", "author": "Victor Hugo"}];

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.sendFile('index.html');
});

app.get('/books', function(req, res) {
	res.json(books);
});

app.get('/books/:id', function (req, res) {
	var id = parseInt(req.params.id, 10);

	res.json(books[id]);
})

app.listen(app.get('port'), function() {
	console.log('Server started, ctrl-c to terminate ...');
});
