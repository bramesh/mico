import {combineReducers} from 'redux';

import {productsListReducer} from './productsListReducer';
import {productDetailsReducer} from './productDetailsReducer';

export default combineReducers({
	products: productsListReducer,
	details: productDetailsReducer
})