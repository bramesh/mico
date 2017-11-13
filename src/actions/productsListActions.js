import axios from 'axios';

export function getProducts() {
	return function(dispatch) {
		axios.get('/products')
			.then(function(response) {
				dispatch({type:'GET_PRODUCTS', payload:response.data})
			})
			.catch(function(err) {
				dispatch({type: 'GET_PRODUCTS_ERROR', payload: err})
			})
	}
}

export function getProductDetails(productId) {
	return function(dispatch) {
		axios.get('/products/' + productId)
			.then(function(response) {
				dispatch({type: 'GET_PRODUCT_DETAILS', payload: response.data})
			})
			.catch(function(err) {
				dispatch({type: 'GET_PRODUCT_DETAILS_ERROR', payload: err})
			})
	}
}