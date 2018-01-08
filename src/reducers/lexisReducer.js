import lexisData from '../fixtures/lexisData';

export default (state = lexisData, action) => {

  switch (action.type) {
    case 'LEXIS':
      return state

    default:
      return state
  }
}
