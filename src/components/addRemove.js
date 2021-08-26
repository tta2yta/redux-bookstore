import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/book/actions/bookActions';

const addRemove = (props) => {
  const id = props.itemId;
  const dispatch = useDispatch();
  const removeBookItem = () => {
    dispatch(removeBook(id));
  };
  return (
    <div className="crudbtn">
      <button type="button" className="addbtn">Comments</button>
      <button type="button" className="rmvbtn" onClick={removeBookItem}>Remove</button>
      <button type="button" className="editbtn">Edit</button>
    </div>
  );
};
export default addRemove;
