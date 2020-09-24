import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from "./modules/rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const thunk = require('redux-thunk').default

// const middlewares =[ thunk, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()]

// if (process.env.NODE_ENV === 'development'){
//
// })

const store = createStore(rootReducer, composeWithDevTools( applyMiddleware(thunk)) );

export default store;
