import React from 'react'
import Controlled from './components/Controlled'
import './App.css'
import Uncontrolled from './components/Uncontrolled'
function App() {
  return (
    <div className=' h-screen flex justify-center items-center'>
      <Controlled />
      <Uncontrolled />
    </div>
  )
}

export default App
