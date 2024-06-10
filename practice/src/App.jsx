import { memo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[current,change]=useState("Sameer Marathe")
  const changeHandler = ()=>{
    change(Math.random())
  }

  return (
    <>
      <button onClick={changeHandler}>Change the value</button>
      <Header title={current}></Header>
      <Header title={"Sameer Marathe2"}></Header>
      <Header title={"Sameer Marathe3"}></Header>
      <Header title={"Sameer Marathe4"}></Header>
      <Header title={"Sameer Marathe5"}></Header>
      <Header title={"Sameer Marathe6"}></Header>
      <Header title={"Sameer Marathe7"}></Header>

    </>
  )
}

const Header = memo(function Header ({title}){
  return <div>{title}</div>
})
export default App
