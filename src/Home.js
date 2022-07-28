
import React, { useState, useEffect } from "react";
import Card from "./Card";
import Search from "./Search";
// import api from "./api/db.json"
// import data from "/home/moringa/Documents/imovies/db.json"


function Home() {
    const [searchTerm, setSearchTerm]= useState("")
    const [searchResults, setSearchResults] = useState([])

    const [movies, setMovies] = useState([])

    useEffect(() =>{
        fetch("http://localhost:3000/movies")
        .then((res) => res.json())
        .then(data => {
            setMovies(data)
            //console.log(data)
        })
    }, [])

    
    const movie = movies.map((movie) => 
    {
       return(
        <Card
    id={movie.id}
    src={movie.img_src}
    name={movie.name}
    link={movie.vid_src}
    />
       )
    })
      
    const searchHandler = (searchTerm) => {

        setSearchTerm(searchTerm)
        if(searchTerm !== ""){
            const newMovie = movies.filter((movie)=>{
                return (Object.values(movie).join("")
                .toLowerCase()
                .includes(searchTerm.toLowerCase()))
            })
            setSearchResults(newMovie)
        }else{
            setSearchResults(movies)
        }
    }
  

    const search = <Search
    movies={searchTerm.length < 1 ? movies : searchResults}
    term={searchTerm}
    searchKeyword={searchHandler}
/>


  return (
    <div className='home'>

        {search}
        {/* <div className="searchWrapper">
            <input type="search" className="search" placeholder="Search here..." value={props.term} onChange={getSearchTerm}/>
        </div> */}

        <p className="p">Trending</p>
        <hr/>
        <div className='container'>

            
            
         {movie}
            
        </div>
            
      
            
            
            
    </div>
    
  )
}

export default Home