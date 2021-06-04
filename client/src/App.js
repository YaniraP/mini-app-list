import React from 'react';

import './App.css';
import AddItemForm from './components/AddItemForm';
import List from './components/List';



function App() {
  
  // const [item, setItem] = useState('');
  // const [items, setItems] = useState([]);

  return (
    <div className="list">
     <h1>LIST</h1>
     <AddItemForm />
     <List/>
    </div>
  );
}

export default App;
