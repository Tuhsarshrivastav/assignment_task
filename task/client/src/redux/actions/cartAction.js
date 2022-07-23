export const adToCart = (product) => (dispatch, getState) => {
  var cartItem = {
    name: product.title,
    _id: product._id,
    description: product.description,
    image: product.image,
    prices: product.price,
    category: product.category,
    rate: product.rating.rate,
    count: product.rating.count,
  };
  dispatch({ type: "ADD_TO_CART", payload: cartItem });
  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().cartReducers.cartItems)
  );
};
