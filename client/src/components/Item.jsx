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
     <div  key={id} className="item">
        <div className="item-text">
          {id === itemEditing ? (
              <input
                type="text"
                onChange={(e) => setEditingText(e.target.value)}
              />
          ) : (
              <div>{text}</div>
          )}
        </div>
        <div className="item-actions">
          { id === itemEditing ? (
            <button onClick={handleSubmitEdits}>Submit Edits</button>
              ) : (
            <button onClick={() => setItemEditing(id)}>Edit</button>
          )}
        <button onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>	
	);
}

export default Item;