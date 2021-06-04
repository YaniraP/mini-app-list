import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import AddItemForm from './components/AddItemForm';

function App() {
  return (
    <div className="list">
     <h1>Todo List</h1>
     <AddItemForm/>
    </div>
  );
}

export default App;
