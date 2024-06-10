import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
      {/* <WrapperComponent innerComponent={<TextComponent/>}></WrapperComponent> */}
      <WrapperComponent>Hi Myself Sameer</WrapperComponent>
    </>
  )
}

// const TextComponent = ()=>{
//   return<>
//   <div>
//     Hi there
//   </div>
//   </>
// }

// const WrapperComponent =({innerComponent})=>{
//   return<>
//   <div style={{color:'black',backgroundColor:'red'}}>{innerComponent}</div>
//   </>
// }

const WrapperComponent = ({children})=>{
  return <div style={{color:'black',backgroundColor:'red'}}>{children}</div>
}
export default App
