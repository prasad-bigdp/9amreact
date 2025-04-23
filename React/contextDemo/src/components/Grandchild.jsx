import React from 'react'
import { useContext } from 'react'
import { myContext } from '../main'
import { themeContext } from '../App'
function Grandchild ()
{
    const c = useContext(myContext)
    const theme= useContext(themeContext)
  return (
    <div style={{height:'100px',width:'100px',border:'2px solid red',padding:'50px',backgroundColor:theme=='light'?'white':'black',color:theme=='light'?'black':'white'}}>
          {c && <p>{c}</p>}
    </div>
  )
}

export default Grandchild
