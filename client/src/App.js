import React from 'react';

import AddItemForm from './components/AddItemForm';
import List from './components/List';


function App() {
  return (
    <div className="list">
     <h1>MY LIST</h1>
     <AddItemForm />
     <List/>
    </div>
  );
}

export default App;
