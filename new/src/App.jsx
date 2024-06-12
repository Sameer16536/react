import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [selectedID, setSelectedId] = useState(1)

  return (
    <div>
      <button onClick={() => setSelectedId(1)}>1</button>
      <button onClick={() => setSelectedId(2)}>2</button>
      <button onClick={() => setSelectedId(3)}>3</button>
      <button onClick={() => setSelectedId(4)}>4</button>
      <Todo id={selectedID} />
    </div>
  )
}

const Todo = ({ id }) => {
  const [todo, setTodo] = useState(null) // Initially null to handle loading state

  useEffect(() => {
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
      .then((response) => {
        setTodo(response.data.todo)
      })
      .catch((error) => {
        console.error("Error fetching the todo data:", error)
      })
  }, [id])

  if (!todo) {
    return <div>Loading...</div> // Loading state
  }

  return (
    <div>
      <p>{todo.id}</p>
      <h1>{todo.title}</h1>
      <h4>{todo.description}</h4>
    </div>
  )
}

export default App
