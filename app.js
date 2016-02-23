var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var pg = require('pg');
var connectionString = '';
if(process.env.DATABASE_URL != undefined) {
    connectionString = process.env.DATABASE_URL + 'ssl';
} else {
    connectionString = 'postgres://localhost:5432/assignments';
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/data', function(req, res) {
    var results = [];
    pg.connect(connectionString, function(err, client, done) {
        var query = client.query('SELECT * FROM customers');

        query.on('row', function(row) {
            results.push(row);
        });

        query.on('end', function() {
            done();
            return res.json(results);
        });

        if(err) {
            console.log(err);
        }
    });
});

app.get('/orders/:id', function(req, res) {
    var customerID = req.params.id;
    console.log(customerID);
    var results = [];
    pg.connect(connectionString, function(err, client, done) {
        var query = client.query('SELECT customers.first_name, customers.last_name, addresses.street,' +
            ' addresses.city, addresses.state, addresses.zip addresses.address_type, orders.order_date,' +
            ' orders.total, line_items.quantity, products.description products.unit_price FROM customers JOIN' +
            ' addresses ON customers.id = addresses.customer_id JOIN order ON addresses.id = orders.address_id JOIN' +
            ' line_items ON line_items.order_id = orders.id JOIN products O products.id = line_items.product_id' +
            ' WHERE customers.id = $1;', [customerID]);

        console.log('I am query', query);

        query.on('row', function(row) {
            results.push(row);
        });

        console.log('I am results', results);

        query.on('end', function() {
            done();
            return res.json(results);
        });

        if(err) {
            console.log(err);
        }
    });
});

//app.get('/data', function(req, res) {
//    res.send({message: 'hello'});
//});
//
//app.post('/data/:number', function(req, res) {
//    res.send(req.params.number);
//});

// Serve back static files
app.use(express.static('public'));
app.use(express.static('public/views'));
app.use(express.static('public/scripts'));
app.use(express.static('public/styles'));
app.use(express.static('public/vendors'));

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});