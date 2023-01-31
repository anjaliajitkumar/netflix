import React, {useState,useEffect} from 'react'
import requests from './requests'
import instance from './/instance'
import './Banner.css'

function Banner() {
    const [movies,setMovies] = useState([])

    async function fetchData() {
        const request = await instance.get(requests.fetchNetflixOriginals)
        setMovies(
            request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]
        )

    }


useEffect(() => {
    fetchData()
}, [])

function truncate(str,n) {
    return str?.length > n ? str.substr(0, n-1) + "...": str;

}
console.log("individual movie is",movies)
  return (
    <header
    className="banner"
    style={{
        backgroundSize:"cover",
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
        backgroundPosition: "center"

    }}>
        <div className="banner__contents">
            <h1 className="banner__title">
                {movies?.title || movies?.name || movies?.original_name}
            </h1>

            <h1 className="banner__desc">{truncate(movies?.overview , 150)}</h1>
        </div>

    </header>
  )
}

export default Banner