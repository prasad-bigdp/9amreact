import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from '../../Axios'
import { API_KEY, BasrUrl, IMG_BASE } from '../../Constant/contant'
import YouTube from 'react-youtube';


function Row({ genres, title, setTarget, target }) {
  const [movie, setMovies] = useState([])
  const [trailer,setTrailer] = useState('')
  const opts = {
    height:155,
    width: 230,
    playerVars: {
      autoplay: 1,
      controls: 0,
      showinfo: 0,
      modestbranding: 0,
      mute: 1,
      loop: 1,
    },
  };

  

  const manageTarget = async (index,status) => {
    setTarget({ index: index, status: status })
    const trailerResponse = await axios.get(`/movie/${index}/videos?api_key=${API_KEY}&language=en-US`);
    const trailerKey = trailerResponse.data.results.length > 0 ? trailerResponse.data.results[0].key : "";
    setTrailer(trailerKey)
    // console.log(trailerKey);

  }
  useEffect(() => {
    axios.get(`discover/movie?api_key=${API_KEY}&with_genres=${genres}`).then((response) => {
      // console.log(response.data.results);
      setMovies(response.data.results)
      // console.log(movie);
    })
  }, [])

  return (
    <div className='row pt-5'>
      <h4>{title}</h4>

      <div className='posters '>

        {movie.map((item, index) => {
          return (


            
            // <img key={item.id} className='poster' src={`${IMG_BASE}w400${item.poster_path}`} alt="" />
            
            <div key={index} onMouseEnter={() => manageTarget(item.id, true)}
              onMouseLeave={() => manageTarget(item.id, false)}
              style={target.index !== item.id ? { backgroundImage: `URL(${IMG_BASE}w400${item.backdrop_path})` }:null} className=' poster-div d-flex'>
              {target.index == item.id ?
                  <div className={target.index == item.id && target.status==true ? " activeTarget trilarView overlay-content" : "disActive"} >
                    <YouTube videoId={trailer} opts={opts} />

                  </div> : null
                  
                }
                {target.index !== item.id ? 
                  <div className='inner d-flex overlay-content'>
                  <h6 className='d-flex align-items-end py-3 px-4'>{item.title}</h6>
                  
                  {/* <div className={target.index==item.id ? "bg-danger activeTarget" : "disActive"} >
                                  <YouTube videoId="XD_MLvGrGCY" opts={opts} />
  
                    </div> */}
  
                </div>: null
                }
              
            </div>

          )
        })}

      </div>
      <div className='side-shadow '> </div>


    </div>
  )
}

export default Row
