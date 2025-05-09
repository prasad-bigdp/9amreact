import React, { useEffect, useState } from 'react'
import Table from "react-bootstrap/Table"

function UsersList ()
{
    const [data,setData]=useState([])
    const API_URL=import.meta.env.VITE_API_URL
    const fetchData = async () =>
    {
        try
        {
            const res = await fetch(`${API_URL}`);
        const data = await res.json();
        setData(data)
        }
        catch (err)
        {
            console.log("fetch error:"+err)
        }
    }
    const deleteData = async (id) =>
    {
        try
        {
           console.log(id)
           const res = await fetch(`${API_URL}/${id}`, {
                        method:"DELETE"
                    })
           console.log(res);
           fetchData()
				} catch (err) {
					console.log("fetch error:" + err)
				}  
    }
    useEffect(() =>
    {
        fetchData()
    },[])
  return (
      <div className=' container'>
          <h1 className=' text-center'>Users List</h1>
			<Table
				striped
				bordered
				hover>
				<thead>
					<tr>
						<th>name</th>
						<th>email</th>
						<th>delete</th>
					</tr>
				</thead>
				<tbody>
					{data.map((v, i) => (
						<tr key={v.id}>
							<td> {v.name}</td>
							<td>{v.email}</td>
							<td>
								<button className=' btn btn-danger' onClick={()=>deleteData(v.id)}>🗑️</button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	)
}

export default UsersList
