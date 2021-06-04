

const AddItemForm = ({item, setItem, items, setItems}) => {

    
const handleSubmit = (event) => {
  event.preventDefault();
  const newItem = {
    id: new Date().getTime(),
    text: item,
    };
    setItems([...items].concat(newItem));
    setItem("");

}

return (
    <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setItem(e.target.value)}
          value={item}
        />
        <button type="submit">Add Item</button>
    </form>
)
}

export default AddItemForm;