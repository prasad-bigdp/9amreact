import React, { useEffect, useState } from 'react'

function RandomQuote ()
{
 const [Quote,setQuote]=useState({})

  useEffect(() =>
  {
    fetch("https://dummyjson.com/quotes/random")
      .then((res) => res.json())
      .then((data) =>setQuote(data))
      .catch((err) => console.log(err));
   }, [])
  return (
		<div className=' h-screen flex flex-col justify-center items-center gap-2'>
      <h2 className=' text-3xl'>{Quote.quote}</h2>
      <p>- {Quote.author}</p>
		</div>
	)
}

export default RandomQuote
