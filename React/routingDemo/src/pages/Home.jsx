import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Home() {
  return (
		<div>
			<h1>Home Page</h1>
			<div className=' border-2 flex  border-black p-4'>
				<Outlet />
				<div className=' flex flex-col gap-5'>
					<button className=' bg-gray-400 text-2xl text-white hover:bg-blue-500'>
						<Link to='/home/child1'>Child1</Link>
					</button>
					<button className=' bg-gray-400 text-2xl text-white hover:bg-blue-500'>
						<Link to='/home/child2'>Child2</Link>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Home
