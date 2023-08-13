import React from 'react'
import "./Card.css"
import {useNavigate} from "react-router-dom"
import { useAppContext } from '../../contexts/AppContext'

export const Card = ({movie}) => {
  const {dispatch} = useAppContext();
  const navigate = useNavigate();
  return (
    <div className='card'>
        <img style={{cursor:"pointer"}} onClick={() => navigate(`/details/${movie.id}`)} src={movie.imageURL} alt={movie.title}/>
        <h3>{movie.title}</h3>
        <p>{movie.summary}</p>

        <div className='card-buttons'>
            <button onClick={() => dispatch({type:"ADD_TO_STARRED" , payload: movie})}>Star</button>
            <button onClick={() => dispatch({type:"ADD_TO_WATCHLIST", payload: movie })}>Add to WatchList</button>

        </div>


    </div>
  )
}
