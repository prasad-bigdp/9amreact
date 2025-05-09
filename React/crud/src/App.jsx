import React, { useState } from 'react'
import UsersList from './components/UsersList'
import Modals from './components/Modal'
function App ()
{
      const API_URL = import.meta.env.VITE_API_URL

  const [show, setShow] = useState(false);
  const postData = async (email,name) =>
  {
      try
        {
           const res = await fetch(`${API_URL}`, {
             method: "POST",
             body: JSON.stringify({
               name: name,
               email:email
             })
            })
        console.log(res);
        window.location.reload();
				} catch (err) {
					console.log("fetch error:" + err)
				}  
  }
  return (
		<div>
			<header className=' container-fluid bg-primary-subtle fs-2 fw-bold d-flex justify-content-between'>
        CRUD
        <button className='btn btn-success' onClick={()=>setShow(true)}>+</button>
      </header>
      {show && <Modals show={show} setShow={setShow} postData={postData} />}
      <UsersList />
		</div>
	)
}

export default App
