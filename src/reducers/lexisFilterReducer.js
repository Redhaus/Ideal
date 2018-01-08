import _ from 'lodash';
  
  export default (state = 'SHOW_ALL', action) => {
    
    switch (action.type) {
      case 'VISIBILITY_FILTER':

        switch (action.filter) {

            case 'SHOW_ALL':
            console.log('SHOW ALL')
            if(state.includes('SHOW_ALL')){ return _.without(state, 'SHOW_ALL' ) }
            return 'SHOW_ALL' //[...state, 'SHOW_ALL']

            case 'SHOW_CITY':
            console.log('SHOW CITY')
            if(state.includes('SHOW_CITY')){ return _.without(state, 'SHOW_CITY' ) }        
            return 'SHOW_CITY' //[...state, 'SHOW_CITY']
                

            case 'SHOW_NAME':
            console.log('SHOW NAME')
            if(state.includes('SHOW_NAME')){ return _.without(state, 'SHOW_NAME' ) }
            return 'SHOW_NAME' //[...state, 'SHOW_NAME']
                

            case 'SHOW_PIE':
            console.log('SHOW PIE')
            if(state.includes('SHOW_PIE')){ return _.without(state, 'SHOW_PIE' ) }
            return 'SHOW_PIE' //[...state, 'SHOW_PIE']
    
        
            default:
            return state
        }
         


      default:
      return state
  }
}