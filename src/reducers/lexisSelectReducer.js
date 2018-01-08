import Store from '../store';
// import _ from 'lodash';
  
// this collects all lexis select results
  export default (state = [], action) => {
    switch (action.type) {
      case 'LEXIS':
        
        //get appStore and current lexis
        const appStore = Store.getState();
        const currentLexis = appStore.lexis;
        const idx = action.payload.idx;
  
        // if id of selected matches list Item add full list item to results
        function match(element) {
            return element.id === idx;
        }

        const newMatch = currentLexis.find(match)

        return [...state, newMatch];
        
      default:
      return state
  }
}
  