import { createStore, applyMiddleware, combineReducers } from 'redux';
// import { composeWithDevTools } from '@redux-devtools/extension';
// import thunk from './middleware/thunk';
import thunk from 'redux-thunk';
import categoriesReducer from './categories.js';
import productsReducer from './products';

const reducers = {
  categories: categoriesReducer,
  products: productsReducer,

};

// const store = createStore(reducers, applyMiddleware(thunk));

export default createStore(combineReducers(reducers), applyMiddleware(thunk));
