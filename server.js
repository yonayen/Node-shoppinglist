var express = require('express');

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

var Storage = function() {
    this.items = [];
    this.id = 0;
};

Storage.prototype.add = function(name) {
    var item = {name: name, id: this.id};
    this.items.push(item);
    this.id += 1;
    return item;
};

Storage.prototype.delete = function(id) {
    this.items.splice(index, 1);

    return item;
};

var storage = new Storage();
storage.add('Broad beans');
storage.add('Tomatoes');
storage.add('Peppers');

var app = express();

app.use(express.static('public'));

app.get('/items', function(request, response) {
    response.json(storage.items);
});

app.get('/items/:id', function(req, res){
	var id = req.params.id;
	res.json({id: id});
});

app.post('/items', jsonParser, function(request, response) {
    if (!request.body) {
        return response.sendStatus(400);
    }

    var item = storage.add(request.body.name);
    response.status(201).json(item);
});

app.delete('/items/:id', function(request, response) {
    var id = req.params.id;
    if (!request.body) {
        return response.sendStatus(400);
    }

    // var item = storage.add(request.body.name);
    response.status(200).json(item);
});



app.listen(process.env.PORT || 3000);

exports.app = app;
exports.storage = storage;