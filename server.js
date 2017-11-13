var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//API START
var mongoose = require('mongoose');

//Local db
//mongoose.connect('mongodb://localhost/residentdbnew');

//Mongo lab db
//mongoose.connect('mongodb://ramesh:ramesh@ds155325.mlab.com:55325/micoproducts')

var Products = require('./models/products.js');

//Get Products List
/*app.get('/products', function(req, res) {
	var query = {}
	Products.find(query, 'productId productName price productImgUrl', function(err, products) {
		if(err) {
			throw err;
		} else {
			res.json(products);
		}
	})
})

//Get Products Details
app.get('/products/:productId', function(req, res) {
	var query = {productId: req.params.productId};

	Products.find(query, 'productId productName productImgUrl price productDetails', function(err, productDetails) {
		if(err) {
			throw err;
		} else {
			res.json(productDetails);
		}
	})
})*/


app.get('/products', function(req, res) {
	var products = [{
		"productId": 1,
	    "productName": "MacBook",
	    "price": 90000,
	    "productImgUrl": "/images/laptop.jpg"
	}]
	res.json(products);
})

//Get Products Details
app.get('/products/:productId', function(req, res) {
	var product = [{
		"productId": 1,
	    "productName": "MacBook",
	    "price": 90000,
	    "productImgUrl": "/images/laptop.jpg",
	    "defaultOptions": [{
	    	processor: 'i3',
			screen: '14',
			touchbar: 'exclude'
	    }],
	    "productOptions": [
	    	{
				processor: [{
					i3: '',
					i5: '10000',
					i7: '17000',
					type: 'select'
				}],
			}, {
				screen: [{
					14: '',
					16: '10000',
					type: 'radio'
				}]
			}, {
				touchbar: [{
					exclude: '',
					include: '5000',
					type: 'checkbox'
				}]
			}
	    ]
	}]

	res.json(product);
})
//API END

app.get('/', function(req, res) {
	res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.use('/', function(req, res) {
	res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;