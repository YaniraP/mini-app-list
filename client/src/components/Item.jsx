import {useState} from 'react'
import {useDispatch} from 'react-redux';
import {deleteItem, editItem} from '../features/item/itemSlice'


const Item = ({id, text}) => {

const dispatch = useDispatch();
const [itemEditing, setItemEditing] = useState(null);
const [editingText, setEditingText] = useState("");

const handleDeleteClick = () => {
  dispatch(deleteItem({id}))
}
const handleSubmitEdits = () => {
  dispatch(editItem({
    id, 
    text: editingText}));
  setItemEditing(null);
}

return (
  <div  key={id} className="item"  aria-label="item">
    <div className="item-text">
      {id === itemEditing ? (
          <input
            type="text"
            required
            onChange={(e) => setEditingText(e.target.value)}
          />
      ) : (
          <div className="text">{text}</div>
          
      )}
    </div>
    <div className="item-actions">
      { id === itemEditing ? (
        <button onClick={handleSubmitEdits}>Submit Edits</button>
          ) : (
        <button className="btn-edit" onClick={() => setItemEditing(id)}><i className="fa fa-edit" ></i></button>
      )}
    <button className="btn-delete" onClick={handleDeleteClick}><i className="fa fa-trash"></i></button>
  </div>
</div>	
	);
}

export default Item;