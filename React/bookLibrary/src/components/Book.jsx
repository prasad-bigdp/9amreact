import React from 'react'

function Book (props)
{
  return (
		<div className='book'>
			<img
				src={props.imgLink}
				alt={props.title}
			/>
			<h2>{props.title}</h2>
		  <p>By - {props.author}</p>
		  <button onClick={() => props.fun(5000)}>send</button>
		  <button onClick={()=>props.fun2(props.author)}>click me</button>
		</div>
	)
}

export default Book
