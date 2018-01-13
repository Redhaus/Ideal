

export const saveSelection = (select) => {

    return {
        type: 'LEXIS',
        payload: select
      }
    }


export const clearSelectedLexis = () => {
    return {
        type: 'RESET'
    
    }
}

export const setFilter = (addFilter, addTitle) => {

    return {
        type: 'VISIBILITY_FILTER',
        filter: addFilter,
        title: addTitle
        }
    }



