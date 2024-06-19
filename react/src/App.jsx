import { useState } from "react";


function App() {
  const [todos, setTodos] = useState([
    {
      title: "Go to gym",
      description: "From 7 - 9",
      completed: false
    },
    {
      title: "study dsa",
      description: "From 9 - 11",
      completed: true
    }
  ])

  function addNewTodo() {
    setTodos([...todos, {
      title: "Go to gym",
      description: "From 7 - 9",
      completed: false
    }])
  }
  return (

    <div>
      <button onClick={addNewTodo}>Add todo</button>
      {todos.map(todo => {
        return (
          <Todo title={todo.title} description={todo.description}></Todo>
        )
      })}

    </div >
  )
}


function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  )
}

export default App
