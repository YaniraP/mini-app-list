import itemReducer, {
  addItem 
} from './itemSlice';

describe('item reducer', () => {
  const initialState = [
    {id: 1, text: 'item1'},
    {id: 2, text: 'item2'},
  ];

 const newItem = {
  id: 3,
  text: 'item3'
};

  it('should handle initial state', () => {
    expect(itemReducer(undefined, { type: 'unknown' })).toEqual([]);
  });

  it('should handle addItem', () => {
    const actual = itemReducer(initialState, addItem(newItem));
    expect(actual[2].text).toEqual('item3');
  });
 });
