import React from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col, Image, Button} from 'react-bootstrap';

import Header from '../components/Header.js';

class ProductDetails extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Grid>
					<Row className="show-grid">
						<Col xs={6} md={4}><Image src="https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/M/AC/MACBOOKPRO/MACBOOKPRO?wid=1879&hei=1061&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=6xyk93" responsive /></Col>
						<Col xs={12} md={8}>
							<h1>Apple MacBook Pro</h1>
							<h3>Rs.50000</h3>
							<Button bsStyle="primary">Add to Cart</Button>
						</Col>
					</Row>
				</Grid>
			</div>
		)
	}
}

export default ProductDetails;