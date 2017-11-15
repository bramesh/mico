import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import {Thumbnail, Button} from 'react-bootstrap';


class Product extends React.Component {
	constructor(props) {
		super(props);
	}
	getDetails(productId) {
		this.props.getProductDetails(productId);
		this.props.history.push('/details');
	}
	addToCart(product) {
		console.log(product)
		this.props.addToCart(product);
	}
	render() {
		const product = this.props.product;
		return(
			<Thumbnail src={product.productImgUrl} alt="242x200">
	          <h3>{product.title}</h3>
	          <p>Rs.{product.price}</p>
	          <p>
	          	<Button bsStyle="primary" onClick={this.getDetails.bind(this, product.productId)}>View Details</Button>
	            <Button bsStyle="default" onClick={this.addToCart.bind(this, product)}>Add to Cart</Button>
	          </p>
	        </Thumbnail>
		)
	}
}

export default Product;