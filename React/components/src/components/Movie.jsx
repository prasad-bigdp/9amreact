import React from 'react'

function Movie (props)
{
	console.log(props.title)
  return (
		<div className='movie'>
			<img
				src={props.url}
			  alt='SQUID GAME'
			  height='300'
			  width='300'
          />
		  <h2>{props.title}</h2>
		</div>
	)
}

export default Movie
