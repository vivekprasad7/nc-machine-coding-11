import React, { useState } from 'react'
import "./Home.css"
import { Navbar } from '../../components/navbar/Navbar'
import { useAppContext } from '../../contexts/AppContext'
import { Card } from '../../components/card/Card'
import { AddMovie } from '../../components/addMovie/AddMovie'

export const Home = () => {
    const { newMovieData, dispatch} = useAppContext();
    const [showModal, setShowModal] = useState(false);

    
  return (
    <div className='home'>
        <Navbar/>
        <div className='home-top'>
            <h2>Movies</h2>
            <button onClick={() => setShowModal(!showModal)}>Add a Movie</button>
        </div>

        <div className='movies-section'>
            <div className='filters'>

                    
                    <select onChange={(e) => dispatch({type:"FILTER_BY_GENRE", payload: e.target.value}) }>
                        <option>All Genre</option>
                        <option value="Action">Action</option>
                        <option value="Drama">Drama</option>
                        <option value="Crime">Crime</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Fantasy">Fantasy</option>
                    </select>

                    <select onChange={(e) => dispatch({type:"FILTER_BY_YEAR", payload: e.target.value}) }>
                        <option>Release Year</option>
                        <option value="1992">1992</option>
                        <option value="1994">1994</option>
                        <option value="2008">2008</option>
                        <option value="2003">2003</option>
                    </select>

                    <select onChange={(e) => dispatch({type:"FILTER_BY_RATING", payload: e.target.value}) }>
                        <option>Rating</option>
                        <option value="9">9</option>
                        <option value="8">8</option>
                        <option value="7">7</option>
                        <option value="6">6</option>
                        <option value="5">5</option>
                    </select>

            </div>

            <div className='movies-list'>

                {
                    newMovieData?.map((item) => {

                        return(
                            <Card movie={item}/>
                        )
                    })
                }


            </div>

        </div>
        { showModal && (<AddMovie showModal={showModal} setShowModal={setShowModal}/>) }
    </div>
  )
}
