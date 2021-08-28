const initialState = { books: [], apiId: '' };
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, action.payLoad];
    case 'REMOVE_BOOK':
      return state.filter((item) => item.id !== action.payLoad);
    case 'GET_BOOKS':
      console.log(action.payLoad);
      return { ...state, books: action.payLoad };
    case 'GET_APIID':
      return { ...state, apiId: action.payLoad };
    default:
      return state;
  }
};

export default bookReducer;
