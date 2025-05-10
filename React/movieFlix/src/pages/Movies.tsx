import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../components/ui/card"

function Movies() {
  const [ timeWindow, setTimeWindow ] = useState('week')
  const [trending,setTrending]=useState([])
  const apikey = import.meta.env.VITE_API_KEY
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/movie/${timeWindow}?api_key=${apikey}`)
      .then((data) => {
        console.log(data.data.results)
        setTrending(data.data.results)
      })
  },[timeWindow])
  return (
		<>
			<div className='buttons'>
				<button onClick={(e) => setTimeWindow(e.target?.textContent)}>
					day
				</button>
				<button>week</button>
			</div>
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={50}
				slidesPerView={3}
			  navigation
			  autoplay
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper) => console.log(swiper)}>
				{trending &&
					trending.map((v: any, i) => (
						<SwiperSlide key={v.id}>
							<Card>
								<CardHeader>
									<img
										src={`https://image.tmdb.org/t/p/w500/${v.poster_path}`}
										alt={v.title}
									/>
									<CardTitle>{v.title}</CardTitle>
								</CardHeader>
								<CardContent>Overview: {v.overview}</CardContent>
							</Card>
						</SwiperSlide>
					))}
			</Swiper>
		</>
	)
}

export default Movies
