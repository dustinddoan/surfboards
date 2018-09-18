// combine all reducer
import { combineReducers } from 'redux';
import user from './user_reducer';
import products from './product_reducer'

// pass object into combineReducer method
const rootReducer = combineReducers({
    user: user,
    products: products
})

export default rootReducer;