import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
function App() {
  
  return (
    <>
      <div>
        {/* {todos.map((i)=><Todo key={i.id} title={i.title} description={i.description}/>)} */}
        <Todo id={3}/>
        
      
      </div>
    </>
  )
}
const Todo = ({id})=>{
  const [todos,setTodos] = useState([])
  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todo?id="+id)
    .then((response)=>{
      setTodos(response.data.todos)
    })
  },[])
return<div>
  <h1>{todos.title}</h1>
  <h4>{todos.description}</h4>
</div>
}
export default App
