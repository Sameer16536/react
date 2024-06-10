import { useState ,useEffect } from 'react'

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = ()=>{
    setTodos([...todos,{
      id: todos.length + 1, // Generate a new ID based on the current length
      title: `New Todo ${todos.length + 1}`, // Example title
      description: `Description ${todos.length + 1}` // Example description
    }])
  }
  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos")
        .then(async (res) => {
          const json = await res.json();
          setTodos(json.todos);
        });
    }, 10000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); 

  return (
    <>
    <button onClick={addTodo}>Add todo</button>
      {todos.map((todo)=><Todo key={todo.id} title={todo.title} description={todo.description}/>)}
    </>
  )
}

const Todo =({title,description})=>{
  return <div>
    <h1>{title}</h1>
    <h5>{description}</h5>
  </div>
}
export default App
