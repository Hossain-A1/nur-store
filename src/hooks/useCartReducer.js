const useCartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let { id, color, amount, product, stock, price } = action.payload;

      let cartProduct;

      cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount: product.price,
        image: product.image[0].url,
        max: product.stock,
        stock,
        price: product.price,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };

    case "REMOVE_CART":
      const filterCart = state.cart.filter((el) => el.id !== action.payload);
      return {
        ...state,
        cart: filterCart,
      };

    default:
      return state;
  }
};

export default useCartReducer;
