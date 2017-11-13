export function productsListReducer (state={products:[]}, action) {
	switch(action.type) {
		case 'GET_PRODUCTS':
		return {products:[...state, ...action.payload]}
		break;
	}
	return state;
}