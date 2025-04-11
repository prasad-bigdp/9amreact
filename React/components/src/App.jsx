import React from 'react'
import MovieLine from './components/MovieLine'
import './App.css'
function App ()
{
	const actionMovies = [
		{
			title: "RRR",
			url: "https://m.media-amazon.com/images/M/MV5BNWMwODYyMjQtMTczMi00NTQ1LWFkYjItMGJhMWRkY2E3NDAyXkEyXkFqcGc@._V1_.jpg",
		},
		{
			title: "KGF",
			url: "https://i.pinimg.com/564x/1c/2e/ec/1c2eec7dd808a1e074ad6eaf3c4a575d.jpg",
		},
		{
			title: "Salaar",
			url: "https://upload.wikimedia.org/wikipedia/en/a/a6/Salaar_Part_1_%E2%80%93_Ceasefire.jpg",
		},
		{
			title: "Pushpa",
			url: "https://www.thestatesman.com/wp-content/uploads/2022/08/Screenshot-2022-08-31-154905.jpg",
		},
	]
	const horrorMovies = [
		{
			title: "The Exorcist",
			url: "https://m.media-amazon.com/images/M/MV5BYjBmYTQ1NjItZWU5MS00YjI0LTg2OTYtYjA4YjA3NzQxMjJhXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg",
		},
		{
			title: "Hereditary",
			url: "https://m.media-amazon.com/images/M/MV5BOTU5MDg3OGItZWQ1ZS00YjFmLWFhNjYtNzQwYTBjOWZlOGU4XkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_.jpg",
		},
		{
			title: "Get Out",
			url: "https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_.jpg",
		},
		{
			title: "The Conjuring",
			url: "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_.jpg",
		},
	]
	const comedyMovies = [
		{
			title: "The Hangover",
			url: "https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
		},
		{
			title: "Hera Pheri", // Classic Hindi Comedy
			url: "https://m.media-amazon.com/images/M/MV5BNDIzMzAwYmItMjUzZi00OTAxLTk2ODItMGZkNjBiMTIzNDIzXkEyXkFqcGdeQXVyNjA3OTI5MjA@._V1_.jpg",
		},
		{
			title: "Jathi Ratnalu", // Popular Telugu Comedy (Relevant to Hyderabad)
			url: "https://m.media-amazon.com/images/M/MV5BMDZkODI2NjAtODY3OS00NDczLWIyM2YtYjhhMGUwZjNlMWRlXkEyXkFqcGdeQXVyODA2ODM3OTE@._V1_.jpg",
		},
		{
			title: "Superbad",
			url: "https://m.media-amazon.com/images/M/MV5BMTc0NjIyMjA2OF5BMl5BanBnXkFtZTcwMzIxNDE1MQ@@._V1_.jpg",
		},
	]
	// Sci-Fi Movies Array
	const sciFiMovies = [
		{
			title: "Interstellar",
			url: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
		},
		{
			title: "Blade Runner 2049",
			url: "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_.jpg",
		},
		{
			title: "Arrival",
			url: "https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_.jpg",
		},
		{
			title: "The Matrix",
			url: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
		}
	]

	// Thriller Movies Array
	const thrillerMovies = [
		{
			title: "Parasite",
			url: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
		},
		{
			title: "Se7en",
			url: "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
		},
		{
			title: "The Silence of the Lambs",
			url: "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
		},
		{
			title: "Gone Girl",
			url: "https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_.jpg",
		}
	]
	return (
		<div className='App'>
			<h1>Movie Library</h1>
			<h2>Action</h2>
			<MovieLine movies={actionMovies} />
			<h2>Horror</h2>
			<MovieLine movies={horrorMovies} />
			<h2>Comedy</h2>
			<MovieLine movies={comedyMovies} />
			<h2>Sci-fi</h2>
			<MovieLine movies={sciFiMovies} />
			<h2>Thriller</h2>
			<MovieLine movies={thrillerMovies} />
		</div>
	)
}

export default App
