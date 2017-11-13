import React from 'react';
import ReactDOM from 'react-dom';

import {Grid, Row, Col} from 'react-bootstrap';

import Header from '../components/Header.js';
import Product from '../components/Product.js';

import {getProducts} from '../actions/productsListActions';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class ProductList extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		this.props.getProducts();
	}
	render() {
		const products = this.props.products;
		const showProducts = products.map(function(item) {
			return(
				<Col sm={6} md={3} key={item._id}>
					<Product title={item.productName} price={item.price} productImgUrl={item.productImgUrl} productId={item.productId} history={this.props.history} />
				</Col>
			)
		}, this)
		return (
			<div>
				<Header />
				<Grid>
				<h1>Product List</h1>				
					<Row className="show-grid">
						{showProducts}
					</Row>
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

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		getProducts: getProducts
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);