const initialState = {
  data: [],
  activeProduct: null
}

export const getProducts = () => async (dispatch) => {
  let response = await fetch('https://api-js401.herokuapp.com/api/v1/products');
  let data = await response.json();
  dispatch(setProducts(data.results));
}

export const setProducts = (products) => {
  return {
    type: 'SET_PRODUCTS',
    payload: products,
  }
}

function productsReducer(state = initialState, action) {
  switch(action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        data: action.payload,
      }
    default:
      return state;
  }
}

export default productsReducer;