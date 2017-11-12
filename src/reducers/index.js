import {combineReducers} from 'redux';

import {productsListReducer} from './productsListReducer';

export default combineReducers({
	productsList: productsListReducer
})