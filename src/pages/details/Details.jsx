import React, { useEffect, useState } from 'react'
import "./Details.css"
import {useParams} from "react-router-dom";
import { Navbar } from '../../components/navbar/Navbar';
import { useAppContext } from '../../contexts/AppContext';



export const Details = () => {
    const { mID } = useParams();
    const { moviesData } = useAppContext();
    const [singleMovie, setSingleMovie] = useState({});

    useEffect(() => {
        const foundMovie = moviesData?.find((item) => +item.id === +mID);

        if (foundMovie) {
            setSingleMovie(foundMovie);
        }
    }, [mID, moviesData]);

    return (
        <div className='details-page'>
            <Navbar />
            <div className='details-section'>
                <h2>Movie Details</h2>
                <img src={singleMovie?.imageURL} alt={singleMovie?.title} />
                <h3>Title: {singleMovie?.title}</h3>
                <p>Year: {singleMovie?.year}</p>
                {/* <p>Genre: {singleMovie?.genre?.join(', ')}</p> */}
                <p>Rating: {singleMovie?.rating}</p>
                <p>Director: {singleMovie?.director}</p>
                <p>Writer: {singleMovie?.writer}</p>
                {/* <p>Cast: {singleMovie?.cast?.join(', ')}</p> */}
                <p>Summary: {singleMovie.summary}</p>
            </div>
        </div>
    );
};






