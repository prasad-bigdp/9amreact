import React from 'react'
import Movie from './Movie'

function MovieLine (props)
{
	
  return (
		<div className='MovieLine' style={{display:'flex',gap:'20px'}}>
		  {
			  props.movies.map((v, i) => (
				  <Movie title={v.title} url={v.url} />
			  ))
		  }
		</div>
	)
}

export default MovieLine
