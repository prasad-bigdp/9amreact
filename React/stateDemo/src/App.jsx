import React, { useState } from 'react'
import './App.css'
function App ()
{
  // let c = 0;
  // function change ()
  // {
  //   c++;
  //   console.log(c)
  // }
  const [c, setC] = useState(0)
  const [color, setColor] = useState('#ffffff')
  function changeColor (e)
  {
    setColor(e.target.value)
    console.log("hello world")
  }
  return (
    <div className='myDiv' style={{backgroundColor:color}}>
      <input type="color" placeholder='Enter a color' onChange={changeColor}/>
			<h1>{c}</h1>
			<button onClick={() => setC((c) => c + 1)}>+</button>
			<button onClick={() => setC((c) => c - 1)}>-</button>
			<button onClick={() => setC(0)}>reset</button>
		</div>
	)
}

export default App
