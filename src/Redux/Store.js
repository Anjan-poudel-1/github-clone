import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {combineReducers} from 'redux'
import gmailReducer from './Reducers/Gmailreducer';



const middlewares = [thunk]; 

const store = createStore(gmailReducer,composeWithDevTools(
    applyMiddleware(...middlewares)
    
    ));

export default store;