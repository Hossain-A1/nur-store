const useFilterProduct = (state, action) => {
  switch (action.type) {
    case "FILTER_PRODUCTS":
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };

    case "SEE_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };
    case "SEE_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "SORT_OPTION_ITEM":
      return {
        ...state,
        sort_options: action.payload,
      };

    case "SORT_PRODUCTS":
      let newSortData;

      let { filter_products,sort_options } = state;
      let copySortData = [...filter_products];

      const sortingProducts = (x, y) => {
        if (sort_options === "highest") {
          return y.price - x.price;
        }
        if (sort_options === "lowest") {
          return x.price - y.price;
        }
        if (sort_options === "A-Z") {
        return  x.name.localeCompare(y.name);
        }
        if (sort_options === "Z-A") {
         return y.name.localeCompare(x.name);
        }
      };

      newSortData = copySortData.sort(sortingProducts);

      return {
        ...state,
        filter_products: newSortData,
      };

    default:
      return state;
  }
};

export default useFilterProduct;
