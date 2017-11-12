var mongoose = require('mongoose');

var ProductsSchema = mongoose.Schema({
	productName: String,
	productPrice: Number,
	productId: Number,
	category: String,
	productImg: String
})

var Products = mongoose.model('Products', ProductsSchema);

module.exports = Products;