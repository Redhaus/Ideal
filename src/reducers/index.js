// this combines all reducers into one and feeds data to store
// This is imported into store

import lexis from './lexisReducer';
import lexisSelect from './lexisSelectResult';
import lexisFilterReducer from './lexisFilterReducer';
import { combineReducers } from 'redux';
import lexisSelectedReducer from './lexisSelectedFilters';

const rootReducer = combineReducers({
    lexis: lexis, // this is the lexis guide
    lexisSelect: lexisSelect, // these are selected items for results
    lexisFilterReducer: lexisFilterReducer, // SHOW ALL
    lexisSelectedReducer: lexisSelectedReducer //all
})

export default rootReducer;