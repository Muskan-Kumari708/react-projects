import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
 // let count = 10; 
 let [counter, setCounter] = useState(10)
 const addvalue = ()=>{
  if(counter < 20){
  setCounter(counter + 1);
  }
 }
 const removeValue = ()=>{
  if(counter > 0){
  setCounter(counter - 1)
  }
 }

  return (
    <>  
             
      <section id="center">
      <h1>Counter-App</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addvalue}>add value</button>
      <button onClick={removeValue}>remove value</button>
      </section>



    </>
  )
}

export default App
