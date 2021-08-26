const initialState = [];
const bookReducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, action.payLoad];
    case 'REMOVE_BOOK':
      return state;
    default:
      return state;
  }
};

export default bookReducer;
