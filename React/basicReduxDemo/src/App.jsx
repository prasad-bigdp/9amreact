import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { increment, decrement, Reset } from './redux/actions'
import './App.css'
function App ()
{
  const dispatch = useDispatch()
  const count= useSelector((state)=>state.count)
  return (
    <div>
      <p>{count}</p>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button onClick={()=>dispatch(Reset())}>Reset</button>
    </div>
  )
}

export default App
