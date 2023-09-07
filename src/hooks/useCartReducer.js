const useCartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let { id, color, amount, product, stock } = action.payload;

      // existing product
      let existing_product = state.cart.find((el) => el.id === id + color);

      if (existing_product) {
        let updatedProduct = state.cart.map((el) => {
          if (el.id === id + color) {
            let newAmount = el.amount + amount;

            if(newAmount >= el.max){
              return newAmount = el.max
            }
            return {
              ...el,
              amount: newAmount,
            };
          }else{
            return el
          }
        });

     return{
      ...state,
      cart:updatedProduct
     }
      
      }

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

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

      case "INCREASE_ITEM":
        const increase = state.cart.map((el)=>{
          if(el.id === action.payload){
         let  incAmount = el.amount + 1
         if(incAmount >= el.max){
          incAmount =el.max
         }
         return{
          ...el,
          amount:incAmount
         }
          }else{
            return el
          }
        })

      return{
        ...state,
        cart:increase
      }
      case "DECREASE_ITEM":

      const decrease = state.cart.map((el)=>{
        if(el.id === action.payload){
       let  decAmount = el.amount - 1

       if(decAmount <= 0){
        decAmount = 1
       }

       return{
        ...el,
        amount:decAmount
       }
        }else{
          return el
        }
      })

      return{
        ...state,
        cart:decrease
      }
    default:
      return state;
  }
};

export default useCartReducer;
