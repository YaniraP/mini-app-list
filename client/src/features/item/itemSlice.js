import { createSlice } from '@reduxjs/toolkit';

//TODO: FIX EDIT
const itemSlice = createSlice({
  name: 'items',
  initialState: [
    {id: 1, text: 'item1'}
  ],
  reducers: {
    addItem: (state, action) => {
      const newItem = {
        id: Date.now(),
        text: action.payload.text
      };
      state.push(newItem)
    }, 
    deleteItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id )
   },
   editItem: (state, action) => {
    const itemToEdit = state.find((item)=> item.id === action.payload.id);
    if(itemToEdit) {
      itemToEdit.text = action.payload.text;
    }
  }
  }
})
;
  export const {
    addItem,
    deleteItem,
    editItem
  } = itemSlice.actions
  
  export default itemSlice.reducer;


