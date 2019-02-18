//this file is basically to pull in all the other reducers

import { combineReducers } from 'redux'
import itemReducer from './itemReducer';

export default combineReducers({
    item: itemReducer
})