import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import  { composeWithDevTools }  from 'redux-devtools-extension'
import { todoReducers } from './reducers/todoReducers'


const reducer = combineReducers({
     todoReducers,
})

const intialState = {}

const middleware = [thunk]

const store = createStore(
    reducer, 
    intialState, 
    composeWithDevTools(applyMiddleware(...middleware))
)


export default store;