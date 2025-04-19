import React from 'react'

function MovieCard({title,vote,imgUrl}) {
  return (
		<div className='MovieCard flex flex-col p-5 rounded-2xl shadow shadow-[#0d253f] hover:scale-105 transition-all'>
			<img
				src={`https://image.tmdb.org/t/p/w500/${imgUrl}`}
				alt='title'
				className=' object-cover'
			/>
			<h2 className=' text-2xl font-bold'>{title}</h2>
			<p className='p-3 w-15 h-15 rounded-full bg-[#0d253f] text-white text-xl'>
				{vote * 10}%
			</p>
		</div>
	)
}

export default MovieCard
