import React from 'react'

function Child ({ fun })
{
    console.log("child is called")
  return (
    <div>
      {/* <button onClick={fun}>click me </button> */}
    </div>
  )
}

export default React.memo(Child)
