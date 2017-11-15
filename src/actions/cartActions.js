export function addToCart(product) {
	return function(dispatch) {
    dispatch({
      type: 'ADD_TO_CART',
      payload: product
    })
  }
}
