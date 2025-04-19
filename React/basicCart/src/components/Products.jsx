import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard';
function Products ()
{
   const [products,setProducts]=useState([])
    async function fetchData (url)
    {
        try
        {
            const res = await axios.get(url);
        setProducts(res.data)
        }
        catch (err)
        {
            console.log(err)
        }
    }
    useEffect(() =>
    {
        fetchData("https://fakestoreapi.com/products");
    },[])
  return (
    <div className=' m-auto max-w-5xl'>
          <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
              {
                  products.map((v,i) => (
                      <ProductCard key={v.id} title={v.title} image={v.image} cat={v.category} price={v.price} description={v.description} />
                  ))
              }
        </div>
    </div>
  )
}

export default Products
