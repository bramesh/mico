import React from 'react';
import ReactDOM from 'react-dom';

import Header from '../components/Header.js';

class ProductList extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<h1>Product List</h1>
				<div>List of products</div>
			</div>
		)
	}
}

export default ProductList;