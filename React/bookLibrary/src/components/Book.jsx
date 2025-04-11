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
		</div>
	)
}

export default Book
