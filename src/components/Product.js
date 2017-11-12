import React from 'react';
import ReactDOM from 'react-dom';
import {LinkContainer} from 'react-router-bootstrap'
import {Thumbnail, Button} from 'react-bootstrap';

class Product extends React.Component {
	render() {
		return(
			<Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
	          <h3>{this.props.title}</h3>
	          <p>{this.props.price}</p>
	          <p>
	          	<LinkContainer to="/details">
	            	<Button bsStyle="primary">View Details</Button>
	            </LinkContainer>
	            <Button bsStyle="default">Add to Cart</Button>
	          </p>
	        </Thumbnail>
		)
	}
}

export default Product;