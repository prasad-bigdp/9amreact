import React from 'react'
import Child from './Child'
function Parent() {
  return (
    <div style={{height:'300px',width:'300px',border:'2px solid red',padding:'50px'}}>
      <Child />
    </div>
  )
}

export default Parent
