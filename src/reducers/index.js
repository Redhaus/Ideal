// this combines all reducers into one and feeds data to store
// This is imported into store

import lexis from './lexisReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    lexis: lexis,
})

export default rootReducer;