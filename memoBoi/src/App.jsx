import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [exchange1data,setExchange1data]= useState(0)
  const [exchange2data,setExchange2data]= useState(0)
  const [bank, setbank] = useState(0)

  useState(()=>{
    setExchange1data({
      returns:100
    })
  },[])
  useState(()=>{
    setExchange2data({
      returns:200
    })
  },[])
  useState(()=>{
    setTimeout(()=>{
      setbank({
        income:3000
      })
    },5000)
  },[])
  const cryptoreturns = useMemo(()=>{
    exchange1data.returns + exchange2data.returns
  },[exchange1data,exchange2data])
  
  const incomeTax = (cryptoreturns+bank.income)*0.3
  return (
    <>
     <div>Your Income Tax is {incomeTax}</div>
     
    </>
  )
}

export default App
