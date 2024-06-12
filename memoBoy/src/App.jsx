import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[counter,setcounter]=useState(0)
  const[inputValue,setInputValue]=useState(1)

  let count = useMemo(()=>{
    let finalCount= 0 ;
  for(let i = 1 ;i <= inputValue;i++){
    finalCount = finalCount +i ;
  }
  return finalCount;
  },[inputValue])
  
  return (
    <>
      <input placeholder='Sum from 1 to 'onChange={(e)=>setInputValue(e.target.value)} />
      <br />
      <div>
      Sum from 1 to  {inputValue} is {count}
      </div>
      <br />
      <button onClick={()=>{setcounter(counter+1)}}>Counter:{counter}</button>
      
      
          </>
  )
}

export default App
