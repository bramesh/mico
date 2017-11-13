export function productDetailsReducer(state={}, action) {
	switch(action.type) {
		case 'GET_PRODUCT_DETAILS':
		return action.payload[0]
		break;
	}
	return state;
}