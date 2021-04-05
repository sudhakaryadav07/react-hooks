import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'thunk';
import rootReducer from './reducers/rootReducer';

export default createStore(rootReducer, compose(applyMiddleware(thunk)));