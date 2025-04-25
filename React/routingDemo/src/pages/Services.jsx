import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Services ()
{
  const [cartoons, setCartoons] = useState([]);
  useEffect(() =>
  {
    fetch(`https://api.sampleapis.com/cartoons/cartoons2D`)
      .then((res) => res.json())
      .then((data) => setCartoons(data))
      .catch((err) => console.log(err))
  },[])
  return (
    <div className=' max-w-5xl m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {
        cartoons.map((v, i) =>
        (
          <div key={v.id} className='shadow shadow-blue-400 p-5 rounded-2xl flex flex-col justify-center items-center gap-5'>
            <img src={v.image} alt={v.title} height='200' />
            <Link to={`/service/${v.id}`}><h2>{v.title}</h2></Link>
          </div>
        ))
      }
    </div>
  )
}

export default Services
