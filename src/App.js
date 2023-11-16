import React, { useState } from 'react';
import './App.css';
import Todo from './components/Todo';

function App() {
  const  [ todos, setTodos ] = useState([]);
  const [ todo, setTodo ] = useState({
    activity:""
  })

  const handleChange = (e) => {
    setTodo({
      [e.target.name]: e.target.value
    })
    console.log(todo);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let activityShape = {
      activity: todo,
      id:Date.now(),
      complete: false
    }

    setTodos({
      ...todos,
      activityShape
    })
  }

  return (
    <div className="App">
      <h1>Its working</h1>
      <div>
      {todos.map(todo=> <Todo activity={todo.activity} key={todo.id} complete={todo.complete}/>)}
      </div>
      <form onSubmit={handleSubmit}>
        <input name="activity" onChange={handleChange} placeholder='Activity'/>
        <button>+</button>
      </form>
    </div>
  );
}

export default App;
