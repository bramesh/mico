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