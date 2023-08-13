import React from 'react'
import "./Watchlist.css"
import { Navbar } from '../../components/navbar/Navbar'
import { useAppContext } from '../../contexts/AppContext'
import { Card } from '../../components/card/Card'

export const Watchlist = () => {
  const {state}= useAppContext()
  return (
    <div className='watchlist'>
      <Navbar/>
      <div className='w-movies'>
        {
          state?.watchList?.map((item) => {

            return(
              
              <Card  key={item.id} movie={item}/>
            )
          })
        }

      </div>

    </div>
  )
}
