import React from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col, Image, Button} from 'react-bootstrap';

import Header from '../components/Header.js';
import ProductOptions from '../components/ProductOptions.js';

import {getProductDetails} from '../actions/productsListActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class ProductDetails extends React.Component {
	constructor(props) {
		super(props);
		this.getProductOptions = this.getProductOptions.bind(this);
		this.state = {details: false}
	}
	componentDidMount() {
		console.log(this.props.history);
	}
	componentWillReceiveProps() {
		this.setState({
			details: true
		})
	}
	getProductOptions() {
		if(this.state.details) {
			const details = this.props.details;
			let defaultOptions = details.defaultOptions;
			let productOptions = details.productOptions;
			return (
					<Row className="show-grid">
						<Col xs={6} md={4}>
							<Image src={details.productImgUrl} responsive />
						</Col>
						<Col xs={12} md={8}>
							<h1>{details.productName}</h1>
							<h3>Rs.{details.price}</h3>
							<Button bsStyle="primary">Add to Cart</Button>
							<br /><br />
							<ProductOptions defaultOptions={defaultOptions} productOptions={productOptions} />
						</Col>
					</Row>
				)
		}
	}
	render() {
		const details = this.props.details;
		const getProductOptions = this.getProductOptions() || null;
		return (
			<div>
				<Header />
				<Grid>
					{getProductOptions}
				</Grid>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
			details: state.details
		}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		getProductDetails: getProductDetails
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);