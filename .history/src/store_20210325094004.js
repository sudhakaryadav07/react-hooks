import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'thunk';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer,composeWithDevTools());

export default store;