import React from 'react';
import ReactDOM from 'react-dom';

import Header from '../components/Header.js';

import {Grid, Modal, Panel, Col, Row, Button, ButtonGroup} from 'react-bootstrap';


class Cart extends React.Component {
	render() {
		const cartItems = () => (
				<Panel>
		          <Row>
		            <Col xs={12} sm={4}>
		              <h6>Product1</h6><span>    </span>
		            </Col>
		          </Row>
		        </Panel>
			)
		return(
				<div>
					<Header />
					<Grid>
						<Panel header="Cart">
							{cartItems}
							<Row>
								<Col xs={12}>
						            <h6>Total amount: </h6>
						            <Button bsStyle="success" bsSize="small">
						              PROCEED TO CHECKOUT
						            </Button>
						          </Col>
							</Row>
						</Panel>
					</Grid>
				</div>
			)
	}
}



export default Cart;