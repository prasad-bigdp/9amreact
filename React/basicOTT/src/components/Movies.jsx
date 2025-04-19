import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
function Movies ()
{
    const [timeWindow, setTimeWindow] = useState('day')
    const [movies,setMovies]=useState([])
    const fetchData = async () =>
    {
        try
        {
            const res = await fetch(
            `https://api.themoviedb.org/3/trending/movie/${timeWindow}?api_key=aef414ec2396be6ed2ccac78df781134`,
        );
        const data = await res.json();
        console.log(data.results);
        setMovies(data.results)
        }
        catch(err)
        {
            console.log(err)
        }
    }
    useEffect(() =>
    {
        fetchData(); 
    },[timeWindow])
    return (
			<>
				<div className=' m-auto max-w-5xl'>
					<select
						onChange={(e) => setTimeWindow(e.target.value)}
						className=' bg-[#0d253f] text-white'>
						<option value='day'>day</option>
						<option value='week'>week</option>
					</select>
				</div>

				<div className='movies grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-auto max-w-5xl my-5 gap-5'>
					{movies.map((v, i) => (
						<MovieCard
							key={i}
							title={v.title}
							vote={v.vote_average}
							imgUrl={v.poster_path}
						/>
					))}
				</div>
			</>
		)
}

export default Movies
