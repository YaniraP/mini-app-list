
import { useState } from 'react';


const Item = ({items, setItems}) => {


  const [itemEditing, setItemEditing] = useState(null);
  const [editingText, setEditingText] = useState("");

  const item = [
    { id: 6, title: 'item6' },
   
	];

  function handleDeleteClick(id) {
    let updatedItems = [...items].filter((item) => item.id !== id);
    setItems(updatedItems);
  }


  function submitEdits(id) {
    const updatedItems = [...items].map((item) => {
      if (item.id === id) {
        item.text = editingText;
      }
      return item;
    });
    setItems(updatedItems);
    setItemEditing(null);
  }

	return (
    <>
    <div className="item-text">
    
    {item.id === itemEditing ? (
      <input
        type="text"
        onChange={(e) => setEditingText(e.target.value)}
      />
    ) : (
      <div>{item.text}</div>
    )}
  </div>
  <div className="item-actions">
    {item.id === itemEditing ? (
      <button onClick={() => submitEdits(item.id)}>Submit Edits</button>
    ) : (
      <button onClick={() => setItemEditing(item.id)}>Edit</button>
    )}

    <button onClick={() => handleDeleteClick(item.id)}>Delete</button>
  </div>
  </>
	);


}

export default Item;