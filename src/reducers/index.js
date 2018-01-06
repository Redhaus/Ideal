// this combines all reducers into one and feeds data to store
// This is imported into store

import lexis from './lexisReducer';
import lexisSelect from './lexisSelectReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    lexis: lexis,
    lexisSelect: lexisSelect
})

export default rootReducer;