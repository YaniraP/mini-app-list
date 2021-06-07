import itemReducer, {
  addItem, 
  deleteItem,
  editItem

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

const EditedState = [
  {id: 1, text: 'itemEdited'},
  {id: 2, text: 'item2'},
];


  it('should handle initial state', () => {
    expect(itemReducer(undefined, { type: 'unknown' })).toEqual([]);
  });

  it('should handle addItem', () => {
    const actual = itemReducer(initialState, addItem(newItem));
    expect(actual[2].text).toEqual('item3');
    expect(actual.length).toEqual(3);

  });


  it('should handle deleteItem',  () => {
    const actual = itemReducer(initialState, deleteItem({id: 2}));
    expect(actual.length).toEqual(1);
  });


  it('should handle editItem',  () => {
    const actual =  itemReducer( initialState, editItem({id: 1, text: 'itemEdited'}));
    expect(actual).toEqual(EditedState);
  });

 });
