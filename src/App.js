//App.js - main point of entry to frontend. Creating basic markup for the page
//npx create-react-app todo-list -installing Create React App
//cd todo-list
//npm start

import React from 'react';
import Todo from './components/todo';


export default function App() {
  return (
    <div>
      <Todo/>
    </div>
  );
}
