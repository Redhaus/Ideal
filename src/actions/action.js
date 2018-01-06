

// export const saveSelection = (select) => {
//     console.log('adding item: ', select)
//     return {
//         type: 'LEXIS',
//         payload: select
//     }
// }



export const saveSelection = (select) => {

    return {
        type: 'LEXIS',
        payload: select
      }
    }



    // return (dispatch) => {
    //     request.then( (data) => {
    //         dispatch({
    //             type: 'LEXIS',
    //             payload: select
    //           })
    //     })
     
  
    //   dispatch({
    //     type: INCREMENT
    //   })
    



// export const saveSelection = (select = {}) => {
//     return (dispatch) => {
//         setTimeout(dispatch(saveSelection2()), 2000 )
//     }

// }



// export const saveSelection = () => {
//     return dispatch => {
//       dispatch({
//         type: INCREMENT_REQUESTED
//       })
  
//       dispatch({
//         type: INCREMENT
//       })
//     }
//   }
  
//   export const incrementAsync = () => {
//     return dispatch => {
//       dispatch({
//         type: INCREMENT_REQUESTED
//       })
  
//       return setTimeout(() => {
//         dispatch({
//           type: INCREMENT
//         })
//       }, 3000)
//     }
//   }
  
//   export const decrement = () => {
//     return dispatch => {
//       dispatch({
//         type: DECREMENT_REQUESTED
//       })
  
//       dispatch({
//         type: DECREMENT
//       })
//     }
//   }
  
//   export const decrementAsync = () => {
//     return dispatch => {
//       dispatch({
//         type: DECREMENT_REQUESTED
//       })
  
//       return setTimeout(() => {
//         dispatch({
//           type: DECREMENT
//         })
//       }, 3000)
//     }
//   }
  