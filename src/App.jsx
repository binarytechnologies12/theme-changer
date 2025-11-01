
import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [IsDarkMode,setIsDarkMode]=useState("false")
  return (
    <>
      <div className={`flex flex-col gap-2 items-center min-h-screen 
      transition-all duration-500  justify-center ${IsDarkMode? "bg-gray-800 text-white":"bg-white text-gray-500"}`}>

<h1 className='text-xl font-bold'>
{IsDarkMode? "Dark Mode":"light Mode"}


</h1>


<button className={`p-4 rounded-lg border  ${IsDarkMode? "text-white":"text-gray-500"}`} onClick={()=>setIsDarkMode(!IsDarkMode)}>Toggle theme</button>



<p className={`text-4xl ${IsDarkMode? "text-white":"text-gray-500"}  transition-all duration-500 font-bold`}>
  Theme Toggler With React and Tailwind css
</p>

      </div>
     
    </>
  )
}

export default App
