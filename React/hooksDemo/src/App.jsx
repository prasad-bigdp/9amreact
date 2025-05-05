import { useCallback, useId, useMemo, useReducer, useState } from 'react'
import './App.css'
import Child from './Child'
import usePrasad from './usePrasad'
function myReducer (state,action)
{
  switch (action.type)
  {
    case "incr":return {...state,count:state.count+1}
  }
}
function App ()
{
  const [data, error] = usePrasad('https://fakestoreapi.com/products');
  console.log(data)
  const [count, setCount] = useState(0)
  const [state,dispatch]=useReducer(myReducer,{count:10})
  let x=20
  const handleClick = useCallback(() => console.log("hello world"),[])
  const increment = () => setCount((count) => count + 1)
  const expensiveCalc = (num) =>
  {
    console.log("expensiveCalc is called")
    for (let i = 0; i < 100000000; i++){ }
    return num*2
  }
  const id = useId()
    const id2 = useId()

  console.log(id,id2)
  const result = useMemo(()=>expensiveCalc(5),[])
  return (
		<>
			<h1>{result}</h1>
			<div className='card'>
				<button onClick={()=>dispatch({type:"incr"})}>count is {state.count}</button>
				<button onClick={increment}>count is {count}</button>
			</div>
			<Child fun={handleClick} />
		</>
	)
}

export default App
