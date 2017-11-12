import React from 'react';
import ReactDOM from 'react-dom';

import {Grid, Row, Col} from 'react-bootstrap';

import Header from '../components/Header.js';
import Product from '../components/Product.js';

import {getProducts} from '../actions/productsListActions';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class ProductList extends React.Component {
	constructor() {
		super()
	}

	componentDidMount() {
		this.props.getProducts();
	}
	render() {
		return (
			<div>
				<Header />
				<Grid>
				<h1>Product List</h1>				
					<Row className="show-grid">
						<Col sm={6} md={3}><Product title="Jeans" price="Rs.2500" /></Col>
						<Col sm={6} md={3}><Product title="Laptop" price="Rs.50000" /></Col>
						<Col sm={6} md={3}><Product title="Mobile" price="Rs.40000" /></Col>
						<Col sm={6} md={3}><Product title="Milk" price="Rs.50" /></Col>
						<Col sm={6} md={3}><Product title="Eggs" price="Rs.50" /></Col>
						<Col sm={6} md={3}><Product title="Trousers" price="Rs.1000" /></Col>
					</Row>
				</Grid>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		products: state.products
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		getProducts: getProducts
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);