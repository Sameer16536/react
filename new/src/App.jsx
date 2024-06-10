import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
function App() {
  const [todos,setTodos] = useState([])
  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todos")
    .then((response)=>{
      setTodos(response.data.todos)
    })
  },[])
  return (
    <>
      <div>
        {todos.map((i)=><Todo key={i.id} title={i.title} description={i.description}/>)}
        
      
      </div>
    </>
  )
}
const Todo = ({title,description})=>{
return<div>
  <h1>{title}</h1>
  <h4>{description}</h4>
</div>
}
export default App
