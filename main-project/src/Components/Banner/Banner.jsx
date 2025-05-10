import React, { useEffect, useState } from 'react';
import './Banner.css';
import NavBar from '../NavBar/NavBar';
import Row from '../Row/Row';
import axios from '../../Axios';
import { API_KEY } from '../../Constant/contant';
import YouTube from 'react-youtube';

function Banner({ scrolled, title,target,setTarget }) {
    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }

        const truncatedText = text.split(' ').slice(0, maxLength).join(' ');
        return `${truncatedText} ...`;
    };

    const [movies, setMovies] = useState([]);
    const [movieIndex, setMovieIndex] = useState(0);
    const [trailer, setTrailer] = useState("");
    const [random, setRandom] = useState(Math.floor(Math.random() * 20));

    useEffect(() => {
        const fetchMovieAndTrailer = async () => {
            try {
                const response = await axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`);
                setMovies(response.data.results);
            } catch (error) {
                console.error(error);
            }
        };

        fetchMovieAndTrailer();
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setRandom(Math.floor(Math.random() * 20));
        }, 20000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const fetchMovieAndTrailer = async () => {
            const selectedMovie = movies[random];
            setMovieIndex(random);

            try {
                const trailerResponse = await axios.get(`/movie/${selectedMovie.id}/videos?api_key=${API_KEY}&language=en-US`);
                const trailerKey = trailerResponse.data.results.length > 0 ? trailerResponse.data.results[0].key : "";
                setTrailer(trailerKey);
            } catch (error) {
                console.error(error);
            }
        };

        fetchMovieAndTrailer();
    }, [random, movies]);

    const maxLength = 50;

    const opts = {
        height: window.innerHeight + 250,
        width: window.innerWidth + 250,
        playerVars: {
            autoplay: 1,
            controls: 0,
            showinfo: 0,
            mute: 1,
            loop: 1,
            playlist: trailer ? trailer : '',
        },
    };

    return (
        <>
            <div className='banner-main ' style={movies[movieIndex] ? { backgroundImage: `URL(https://image.tmdb.org/t/p/original${movies[movieIndex].backdrop_path})` } : null}>
                <div className='video-container'>
                    {trailer !== "" ? <YouTube videoId={trailer} opts={opts} /> : null}
                </div>
                <div className="overlay-content">
                    <NavBar genres={28} scrolled={scrolled} />
                    <div className="container-fluid display-shadow">
                        <div className="px-5 d-flex justify-content-center">
                            <div className='d-flex justify-content-end flex-column col-md-6 col-12 left-area'>
                                <div className="col-6 movie-info">
                                    <h1 className='text-white movie-title'>{movies[movieIndex] ? (movies[movieIndex].title ? movies[movieIndex].title : movies[movieIndex].name) : ""}</h1>
                                    <p className='movie-description text-white'>{movies[movieIndex] ? truncateText(movies[movieIndex].overview, maxLength) : null}</p>
                                </div>
                                <div className='btns d-flex'>
                                    <button className='playBtn'><span className="fa-solid fa-play"></span>Play</button>
                                    <button className='infoBtn'><span className="material-symbols-outlined">info</span>More Info</button>
                                </div>
                            </div>
                            <div className="col-md-6"></div>
                        </div>
                        <Row target={target} setTarget={setTarget} title={title} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;
