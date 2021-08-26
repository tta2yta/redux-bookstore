const initialState = [];
const bookReducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, action.payLoad];
    case 'REMOVE_BOOK':
      return state.filter((item) => item.id !== action.payLoad);
    default:
      return state;
  }
};

export default bookReducer;
