import React, { useState } from 'react'

function FunCompo ()
{
 const [count,setCount]= useState(0)
  return (
		<div>
			<p>{count}</p>
			<button onClick={() => setCount(count + 1)}>+</button>
			<button onClick={() => setCount(count - 1)}>-</button>
			<button onClick={() => setCount(0)}>Reset</button>
		</div>
	)
}

export default FunCompo
