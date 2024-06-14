import { memo, useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count,setCount]= useState(0)
//usecallback for referential value to avoid unncessary rerenders
const a = useCallback(()=>{
  console.log("Child Clicked")
},[])  

  return (
    <>
     <div>
      <Child a={a}></Child>
      <button onClick={()=>{setCount(count+1)}}>Click Me</button>
      <p>Display Count : {count}</p>

     </div>
    </>
  )
}

const Child = memo(({a})=>{
  console.log("child render")
  return(<>
    <div>
      <button onClick={a}>Button Clicked</button>
    </div>
    </>)
})



export default App
