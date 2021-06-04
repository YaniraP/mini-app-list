
import { useState } from 'react';

const AddItemForm = () => {

const [value, setValue] = useState('');
    
const handleSubmit = (event) => {
  event.preventDefault();
  setValue(value);
}

return (
    <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button type="submit">Add Item</button>
    </form>
)
}

export default AddItemForm;