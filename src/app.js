import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import thunk from 'redux-thunk'

import Home from './layouts/Home.js';
import ProductList from './layouts/ProductList.js';
import ProductDetails from './layouts/ProductDetails.js';
import Cart from './layouts/Cart.js';

import reducers from './reducers/index';


const middleware = applyMiddleware(thunk, logger);

const store = createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), //for debugging purpose
	middleware
	)


const MicoRoutes = () => (
		<div>
			<Route path="/" exact component={Home} />
			<Route path="/products" component={ProductList} />
			<Route path="/details" component={ProductDetails} />
			<Route path="/cart" component={Cart} />
		</div>

	)

const App = () => (		
			<Provider store={store}>
				<BrowserRouter>				
					<MicoRoutes />
				</BrowserRouter>
			</Provider>		
	)



ReactDOM.render(<App />, document.getElementById('app'))