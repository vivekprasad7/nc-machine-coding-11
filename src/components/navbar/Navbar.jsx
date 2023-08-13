import React from 'react'
import "./Navbar.css"
import {NavLink, useNavigate} from "react-router-dom"
import { useAppContext } from '../../contexts/AppContext'

export const Navbar = () => {

    const { dispatch} = useAppContext();

    const navigate = useNavigate();

  return (
    <nav className='navbar'>
        <div style={{cursor:"pointer"}}onClick={() => navigate("/")} className='site-name'>
            <h3>Rotten Tomatos</h3>
        </div>

        <div className='search-bar'>
            <input 
            onChange={(e) => {
                dispatch({type:"FILTER_BY_SEARCH", payload: e.target.value})
                navigate("/")
            }}
            type="search" />

        </div>

        <div className='site-links'>
            <NavLink to="/">
                Movies
            </NavLink>

            <NavLink to="/watchlist">
                Watch List
            </NavLink>
        </div>

    </nav>
  )
}
