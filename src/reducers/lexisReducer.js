import lexisData from '../fixtures/lexisData';
// const select = false;

// const initialState = [
//     {
//     id: 'adfg34q',
//     word: 'Apollo',
//     def: 'Greek God',
//     selected: select
//     },
//     {
//     id: 'lkuh47',    
//     word: 'abstract',
//     def: 'something without form',
//     selected: select
//     },
//     {
//     id: 'rrewqq',    
//     word: 'cows',
//     def: 'something for milk',
//     selected: select
//     }
// ]
  
  export default (state = lexisData, action) => {
    //   console.log(action.payload);
    switch (action.type) {
      case 'LEXIS':

      // console.log(action.payload)

          // this works
          // const idx = action.payload.idx;
        
          // function match(element) {
          //   return element.id === idx;
          // }

          // const bingo = state.find(match)
          // bingo.selected = !bingo.selected;
     
          // return [...state]
          return state
        


      default:
      return state
  }
}
  
//       case INCREMENT:
//         return {
//           ...state,
//           count: state.count + 1,
//           isIncrementing: !state.isIncrementing
//         }
  
//       case DECREMENT_REQUESTED:
//         return {
//           ...state,
//           isDecrementing: true
//         }
  
//       case DECREMENT:
//         return {
//           ...state,
//           count: state.count - 1,
//           isDecrementing: !state.isDecrementing
//         }
  