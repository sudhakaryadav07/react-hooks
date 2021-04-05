import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'thunk';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer,compose(applyMiddleware(thunk)));

export default store;