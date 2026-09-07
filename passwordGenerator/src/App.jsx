import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllwod, setcharAllwod] = useState(false)
  const [Password, setPassword] = useState("")

//   Difference between UseEffect and useCallback dependencies
// 1.useEffect dependencies are used to call function again whenever any changes are found in dependencies
// 2.useCallback dependencies are used to memoize function again whenever any changes are found in dependencies

       // useRef hook
  const passwordRef = useRef(null)
  const passGenerator = useCallback(
    ()=>{
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
if(numberAllowed){
  str += "0123456789"
}
if(charAllwod){
  str += "!@#$%^*-_+=/[]{}&`~"
}
for(let i=1;i<=length;i++){
  let char = Math.floor(Math.random()*str.length+1)
  pass += str.charAt(char)
}
setPassword(pass)
    }
  , [length, numberAllowed, charAllwod, setPassword])

  const copyPassToClip = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(Password)
  },[Password])

  useEffect(()=>{
    passGenerator()

  },[length, numberAllowed, charAllwod, passGenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 
    bg-gray-700'>
      <h1 className='text-white text-center my-2'>Password Generator</h1>
      <div className='flex shadow rounded-lg mb-4 overflow-hidden'>
        <input type="text"
        value={Password}
        className='outline-none w-full px-3 py-1 bg-white' 
        placeholder='password' 
        readOnly
        ref = {passwordRef}
        />
        <button
        onClick={copyPassToClip}
         className='outline-none bg-blue-700 px-3 py-0.5 shrink-0 text-white'>copy</button>
      </div>
<div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range"
        min={6}
        max={100}
        value={length}
        className='cursor-pointer' 
        onChange={(e)=>{setLength(e.target.value)}}
        />
        <label>Length : {length}</label>
      </div>

      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        defaultChecked = {numberAllowed}
        id='numberInput'
        onChange={()=>{
          setNumberAllowed((prev)=>!prev)
        }}
        />
        <label>Number</label>
      </div>

      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        defaultChecked = {charAllwod}
        id='characterInput'
        onChange={()=>{
          setcharAllwod((prev)=>!prev)
        }}
        />
        <label>Character</label>
      </div>
    </div>

    </div>
    </>
  )
}

export default App
