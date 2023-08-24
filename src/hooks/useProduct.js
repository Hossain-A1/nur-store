const useProduct = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_DATA":
      const featureData = action.payload.filter((ele) => {
        return ele.featured === true;
      });
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featureData,
      };
    case "GET_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };

    case "SINGLE_DATA":
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      };
    case "SINGLE_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default useProduct;
