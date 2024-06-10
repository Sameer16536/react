import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos,setTodos]= useState([
    {
      id:1,
      title:"Go to gym",
    description:"DO XYZ"
    },
    {
      id:2,
      title:"Go to SPA",
    description:"DO abc"
    }
  ])
  const addTodo = ()=>{
    setTodos([...todos,{
      id: todos.length + 1, // Generate a new ID based on the current length
      title: `New Todo ${todos.length + 1}`, // Example title
      description: `Description ${todos.length + 1}` // Example description
    }])
  }
  return (
    <>
    <button onClick={addTodo}>Add Todo</button>
    {todos.map((todo)=><Todo key={todo.id} title={todo.title} description={todo.description}/>)}

      </>)
}
const Todo = ({title,description})=>{
  return <div>
    <h1>{title}</h1>
    <h3>{description}</h3>
  </div>
}
export default App
