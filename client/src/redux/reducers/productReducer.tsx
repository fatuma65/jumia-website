import { productsTypes, productType } from "../actions/types";

const initialState = {
  products: [],
  slicedProducts: [],
  loading: false,
  error: null,
  productDetails: null,
};

const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case productsTypes.FETCH_ALL_PRODUCTS:
      
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
      case productsTypes.SLICED_PRODUCTS:
        // const slicedProducts = state.products.slice(0, 6)
        const {startIndex, endIndex} = action.payload
        const slicedProducts = state.products.slice(startIndex, endIndex)
        return {
          ...state,
          slicedProducts
        }
    case productsTypes.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case productType.FETCH_PRODUCT:
      return {
        ...state,
        productDetails: action.payload,
        loading: false,
      };
    case productType.FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        error: action.payload,
        productDetails: null
      };
    default:
        return state
  }
};

export default productReducer;
