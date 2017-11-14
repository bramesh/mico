import React from 'react';
import ReactDOM from 'react-dom';

import {Grid, Jumbotron, FormGroup, InputGroup, FormControl} from 'react-bootstrap';
import {Typeahead} from 'react-bootstrap-typeahead';

import Header from '../components/Header.js';

import {getProducts, getProductDetails} from '../actions/productsListActions';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Home extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		this.props.getProducts();
	}
	render() {
		return (
			<div>
			<Header />
			<Grid>
				<Jumbotron>
				    <h1>Hello, Welcome to Mico!</h1>
				    <p>A user friendly and accessible online shopping site</p>
				    <div>
				    	<Typeahead
				          labelKey="productName"
				          options={this.props.products}
				          filterBy={["productName"]}
				          placeholder="Choose a Product..."
				          onChange={(selected) => {
				          	let product = selected[0];
				          	let productId = product.productId;
				          	this.props.getProductDetails(productId);
				          	this.props.history.push('/details');
				          }}
				        />
				    </div>
				</Jumbotron>
			</Grid>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		products: state.products.products
	}
}

function mapDispatchToProps(dispath) {
	return bindActionCreators({
		getProducts: getProducts,
		getProductDetails: getProductDetails
	}, dispath)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);