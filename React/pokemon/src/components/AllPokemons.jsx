import React, { useEffect, useState } from 'react'
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

function AllPokemons ()
{
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true)
  const fetchData = async (url) =>
  {
    try
    {
      const res = await fetch(url);
    const data = await res.json();;
    setPokemons(data.results);
    setLoading(false)
    }
    catch (err)
    {
      console.log(err)
    }
  }
  useEffect(() =>
  {
    setTimeout(() => fetchData(`https://pokeapi.co/api/v2/pokemon?limit=50`),5000)
  },[])
  return (
		<div>
			<p>
				{loading && (
					<DotLottieReact
						src='https://lottie.host/3ebe12b1-b2ca-466d-9efb-6b1c3dca64d5/VRgVMGsQrM.lottie'
						loop
						autoplay
					/>
				)}
			</p>
			<div className='pokemons grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				{pokemons.map((v, i) => (
					<p
						key={i}
						className=' p-5 rounded-2xl shadow shadow-blue-300'>
						{v.name}
					</p>
				))}
			</div>
		</div>
	)
}

export default AllPokemons
