import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react'
import { useEffect } from 'react'

function App() {

  //useRef is used for accessing DOM elements directly
  const divRef = useRef()

  useEffect(()=>{
    setTimeout(()=>{
      divRef.current.innerHTML="10"
    },4000)
  },[])

  const income = 30000

  return (
    <>
     <div>
      Your income is : <div ref={divRef}>{income}</div>
     </div>
    </>
  )
}

export default App
