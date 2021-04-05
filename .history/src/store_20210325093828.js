import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'thunk';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;