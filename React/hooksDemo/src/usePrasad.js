import React, { useEffect, useState } from 'react'

 function usePrasad(url) {
    const [data, setData] = useState([]);
     const [error, setError] = useState('');
     async function fetchData ()
     {
          try {
						const res = await fetch(url)
						const data = await res.json()
						setData(data)
					} catch (err) {
						setError(err)
					}
     }
     useEffect(() =>
     {
       fetchData()
   },[])
    return [data,error]
}

export default usePrasad
