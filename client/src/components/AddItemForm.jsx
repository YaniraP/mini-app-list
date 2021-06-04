import { useState } from 'react';
import {useDispatch} from 'react-redux';
import {addItem} from '../features/item/itemSlice';

const AddItemForm = () => {
const [value, setValue] = useState('');

const dispatch = useDispatch();

const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addItem({
      text: value,
    }))
    setValue('');
}


return (
    <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          placeholder='Add element...'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Add Item</button>
    </form>
)
}

export default AddItemForm;