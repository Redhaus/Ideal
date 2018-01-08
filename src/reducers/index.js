// this combines all reducers into one and feeds data to store
// This is imported into store

import lexis from './lexisReducer';
import lexisSelect from './lexisSelectReducer';
import lexisFilterReducer from './lexisFilterReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    lexis: lexis,
    lexisSelect: lexisSelect,
    lexisFilterReducer: lexisFilterReducer
})

export default rootReducer;