import React, { useContext } from 'react'
import Grandchild from './Grandchild'

function Child ()
{
    
  return (
    <div style={{height:'200px',width:'200px',border:'2px solid red',padding:'50px'}}>
          <Grandchild />
          
    </div>
  )
}

export default Child
