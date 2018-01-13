import lexisData from '../fixtures/lexisData';
// import name from 'module';

export default (state = lexisData, action) => {

  switch (action.type) {
    case 'LEXIS':
      return state

    default:
      return state
  }
}
