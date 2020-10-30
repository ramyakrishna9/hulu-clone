import React, { useState, useEffect } from 'react';
import VideoCard from './VideoCard';
import "./Results.css";
import axios from './axios';
import requests from './requests';
import FlipMove from "react-flip-move";


function Results({ selectedOption }) {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
      //run this code once everytime it rerenders
      async function fetchData() {
          const request = await axios.get(selectedOption);
           setMovies(request.data.results);
           return request;
          

      }
      fetchData();
    }, [selectedOption]);

    return (
        <div className="results">
            <FlipMove>
                {movies.map((movie)=> (
                    <VideoCard key={movie.id} movie={movie} />
                ))}
            </FlipMove>
            
           
        </div>
    )
}

export default Results;
