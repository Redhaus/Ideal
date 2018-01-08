
export const saveSelection = (select) => {

    return {
        type: 'LEXIS',
        payload: select
      }
    }

export const setFilter = (filter, title) => {

    return {
        type: 'VISIBILITY_FILTER',
        filter: filter,
        title: title
        }
    }
