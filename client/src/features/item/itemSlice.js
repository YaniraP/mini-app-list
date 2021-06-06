import { createSlice } from '@reduxjs/toolkit';

const itemSlice = createSlice({
    name: 'items',
    initialState: [],
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
            const index = state.findIndex((item)=> item.id === action.payload.id);
            if(index !== -1) {
            state[index].text = action.payload.text;
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


