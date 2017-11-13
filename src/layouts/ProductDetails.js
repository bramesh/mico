import React from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col, Image, Button} from 'react-bootstrap';

import Header from '../components/Header.js';

import {getProductDetails} from '../actions/productsListActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class ProductDetails extends React.Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		this.props.getProductDetails(1);

	}
	render() {
		const details = this.props.details;
		let defaultOptions = details.defaultOptions;
		if(defaultOptions) {
			defaultOptions = details.defaultOptions[0]
			for(let i in defaultOptions) {
				console.log(defaultOptions[i]);
			}
		}
		return (
			<div>
				<Header />
				<Grid>
					<Row className="show-grid">
						<Col xs={6} md={4}>
							<Image src={details.productImgUrl} responsive />
						</Col>
						<Col xs={12} md={8}>
							<h1>{details.productName}</h1>
							<h3>Rs.{details.price}</h3>
							<Button bsStyle="primary">Add to Cart</Button>
						</Col>
					</Row>
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