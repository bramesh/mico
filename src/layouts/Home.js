import React from 'react';
import ReactDOM from 'react-dom';

import {Grid, Jumbotron, FormGroup, InputGroup, FormControl, Button, DropdownButton, MenuItem} from 'react-bootstrap';

import Header from '../components/Header.js';

class Home extends React.Component {
	render() {
		return (
			<div>
			<Header />
			<Grid>
				<Jumbotron>
				    <h1>Hello, Welcome to Mico!</h1>
				    <p>A user friendly and accessible online shopping site</p>
				    <div>
				    	<FormGroup>
					      <InputGroup>
					        <FormControl type="text" placeholder="Search for products" />
					        <DropdownButton
					          componentClass={InputGroup.Button}
					          id="input-dropdown-addon"
					          title="Categories"
					        >
					          <MenuItem key="1">Apparel</MenuItem>
					          <MenuItem key="2">Electronics</MenuItem>
					          <MenuItem key="3">Groceries</MenuItem>
					        </DropdownButton>
					      </InputGroup>
					    </FormGroup>
				    </div>
				</Jumbotron>
			</Grid>
			</div>
		)
	}
}

export default Home;