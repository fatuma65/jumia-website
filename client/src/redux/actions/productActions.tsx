import { productsTypes, productType } from "./types";

export const fetchAllProducts = (products: any) => {
  return {
    type: productsTypes.FETCH_ALL_PRODUCTS,
    payload: products,
  };
};

export const fetchProductsFailure = (error: any) => {
  return {
    type: productsTypes.FETCH_PRODUCTS_FAILURE,
    payload: error,
  };
};

export const fetchProductDetails = (productDetails: any) => {
  return {
    type: productType.FETCH_PRODUCT,
    payload: productDetails,
  };
};

export const fetchProductFailure = (error: any) => {
  return {
    type: productType.FETCH_PRODUCT_FAILURE,
    payload: error,
  };
};

export const slicedProduct = (startIndex: any, endIndex: any) => {
  return {
    type: productsTypes.SLICED_PRODUCTS,
    payload: {startIndex, endIndex}
  }
}
