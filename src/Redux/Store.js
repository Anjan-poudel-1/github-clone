import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {combineReducers} from 'redux'
import gmailReducer from './Reducers/Reducer';

const appreducers = combineReducers({
    gmailReducer : gmailReducer
})

const middlewares = [thunk]; 

const store = createStore(appreducers,composeWithDevTools(
    applyMiddleware(...middlewares)
    
    ));

export default store;