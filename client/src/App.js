import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import AddItemForm from './components/AddItemForm';

import { useState } from 'react';
import List from './components/List';



function App() {
  
  const [item, setItem] = useState('');
  const [items, setItems] = useState([]);

  return (
    <div className="list">
     <h1>Todo List</h1>
     <AddItemForm item={item} setItem={setItem} items={items} setItems={setItems}/>
     <List/>
    </div>
  );
}

export default App;
