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
		console.log(productId)
		this.props.history.push('/details')
	}
	render() {
		return(
			<Thumbnail src={this.props.productImgUrl} alt="242x200">
	          <h3>{this.props.title}</h3>
	          <p>Rs.{this.props.price}</p>
	          <p>
	          	<Button bsStyle="primary" onClick={this.getDetails.bind(this, this.props.productId)}>View Details</Button>
	            <Button bsStyle="default">Add to Cart</Button>
	          </p>
	        </Thumbnail>
		)
	}
}

export default Product;