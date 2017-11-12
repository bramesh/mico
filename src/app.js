import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import { BrowserRouter, Route, NavLink } from 'react-router-dom'

import Home from './layouts/Home.js';
import ProductList from './layouts/ProductList.js';
import ProductDetails from './layouts/ProductDetails.js';

const store = {}

const MicoRoutes = () => (
		<div>
			<Route path="/" exact component={Home} />
			<Route path="/products" component={ProductList} />
			<Route path="/details" component={ProductDetails} />
			
		</div>

	)

const App = () => (		
			<BrowserRouter>				
				<MicoRoutes />
			</BrowserRouter>		
	)



ReactDOM.render(<App />, document.getElementById('app'))