import {combineReducers} from 'redux';

import {productsListReducer} from './productsListReducer';
import {productDetailsReducer} from './productDetailsReducer';
import {cartReducer} from './cartReducer';

export default combineReducers({
	products: productsListReducer,
	details: productDetailsReducer,
	cart: cartReducer
})