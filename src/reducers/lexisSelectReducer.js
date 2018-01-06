import Store from '../store';
  
  
  export default (state = [], action) => {
    switch (action.type) {
      case 'LEXIS':
        
        //get appStore and current lexis
        const appStore = Store.getState();
        const currentLexis = appStore.lexis;
        const idx = action.payload.idx;
  

        function match(element) {
            return element.id === idx;
        }

        const newMatch = currentLexis.find(match)



        // console.log(action.payload);

          return [...state, newMatch];
        


      default:
      return state
  }
}
  