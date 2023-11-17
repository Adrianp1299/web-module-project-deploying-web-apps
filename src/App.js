import React from 'react';
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList'

const initialTodos = []

export default class App extends React.Component {
 state = {
  todos: initialTodos
 }

 addTodo = (name) => {
  this.setState ({
    ...this.state, 
    todos: this.state.todos.concat({id: Date.now(), name, completed: false})
  })
}

toggleCompletion = id => {
  this.setState ({
    ...this.state,
    todos: this.state.todos.map(td => {
      if (id == td.id) return { ...td, completed: !td.completed }
      return td
    })
  })
}

  render () { 
    return (
      <div>
        <Form addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} toggleCompletion={this.toggleCompletion} />
      </div>
    )
    }
}
