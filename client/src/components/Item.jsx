
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import {deleteItem, editItem} from '../features/item/itemSlice'


const Item = ({id, text}) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
		dispatch(deleteItem({id}))
	}

  //TODO: FIX HANDLE EDIT
	const handleEditClick = () => {


	}

  // const [itemEditing, setItemEditing] = useState(null);
  // const [editingText, setEditingText] = useState("");

  
  // function handleDeleteClick(id) {
  //   let updatedItems = [...items].filter((item) => item.id !== id);
  //   setItems(updatedItems);
  // }


  // function submitEdits(id) {
  //   const updatedItems = [...items].map((item) => {
  //     if (item.id === id) {
  //       item.text = editingText;
  //     }
  //     return item;
  //   });
  //   setItems(updatedItems);
  //   setItemEditing(null);
  // }

	return (

    <div className="item">
    <div className="item-text">
    
    {/* {item.id === itemEditing ? (
      <input
        type="text"
        onChange={(e) => setEditingText(e.target.value)}
      />
    ) : ( */}
      <div>{text}</div>
    {/* )} */}
  </div>
  <div className="item-actions">
    {/* {item.id === itemEditing ? (
      <button onClick={() => submitEdits(item.id)}>Submit Edits</button>
    ) : (
      <button onClick={() => setItemEditing(item.id)}>Edit</button>
    )} */}

    <button onClick={handleDeleteClick}>Delete</button>
  </div>
  </div>	
	);


}

export default Item;