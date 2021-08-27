const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const GET_BOOKS= 'GET_BOOKS'
export const addBook = (payLoad) => ({
  type: ADD_BOOK,
  payLoad,
});

export const removeBook = (payLoad) => ({
  type: REMOVE_BOOK,
  payLoad,
});

export const fetchBooks=()=>{
  return async (dispatch) =>{
    const result= await fetch("",{
      method:'GET',
      headers:{'content-type': 'application/json'}
    });
    const response= await result.json()
    if(json){
      dispatch({
        type:'GET_BOOKS',
        payLoad:response
      })

    }else{
      console.log("Unable to fetch data")
    }

  }
}