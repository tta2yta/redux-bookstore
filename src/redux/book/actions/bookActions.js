const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
export const addBook= payLoad=>({
    type:ADD_BOOK,
    payLoad
});

export const removeBook=payload=({
    type:REMOVE_BOOK,
    payLoad
})
