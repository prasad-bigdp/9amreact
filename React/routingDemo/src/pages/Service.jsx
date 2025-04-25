import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
function Service ()
{
    const [cartoon,setCartoon]=useState({})
    const { id } = useParams()
    const navigate =useNavigate()
    const handleRoute = () =>{
        if (id > 23)
        {
            navigate('/*')
        }
    }
    console.log(id)
      useEffect(() =>
      {
                    handleRoute()
        fetch(`https://api.sampleapis.com/cartoons/cartoons2D/${id}`)
          .then((res) => res.json())
          .then((data) => setCartoon(data))
              .catch((err) => console.log(err))
      },[])
  return (
      <div>
          <img src={cartoon.image} alt={cartoon.title} />
          <h2>{cartoon.title}</h2>
    </div>
  )
}

export default Service
