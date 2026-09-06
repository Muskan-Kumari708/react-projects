import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './Components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <section id='centre'>
        <Card username = "Muskan Singh" btnText = " Next" />
        <Card username= "Muskan Kumari" />

    </section>

     
     


    </>

    
  )
}

export default App
