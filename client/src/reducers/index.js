// combine all reducer
import { combineReducers } from 'redux';
import user from './user_reducer';

// pass object into combineReducer method
const rootReducer = combineReducers({
    user: user
})

export default rootReducer;