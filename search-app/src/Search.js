import React, { useState } from 'react'
import './Search.css'

function Search() {

    const [query, setQuery] = useState("")
    const [movies,setMovies] = useState([])
    const searchData = async (e) => {
        e.preventDefault()
        const API_KEY = "c79c3bbb1069dfc677dc545c70e3c5b2"
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
        // fetching Data
        const res  = await fetch(url)
        const data = await res.json()
       setMovies(data.results)
  }


    return (
        <>
        <div className="search" onSubmit={searchData}>
            <form className="search__form">
                <label className="search__label">Search</label>
                <input type="text" placeholder="Search movies" value={query}  onChange={(e) => setQuery(e.target.value)}/>
                <button className="btn-grad" type="submit">Search</button>
            </form>

            <div className="cardList">
                {movies.map(movie => (
                    <div>
                        <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}  alt=""/>
                        <div>
                            <h2>{movie.title}</h2>
                            <p><strong>Release Data:</strong>  {movie.release_date}</p>
                            <p><strong>Description:</strong> {movie.overview}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>   



        </>
    )
}

export default Search
