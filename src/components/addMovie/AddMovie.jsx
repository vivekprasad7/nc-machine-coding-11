import React, { useState } from 'react'
import "./AddMovie.css"
import { Modal } from '@mui/material'
import { useAppContext } from '../../contexts/AppContext'



export const AddMovie = ({ showModal, setShowModal }) => {
    const { setMoviesData, moviesData } = useAppContext();
  
    const initialMovieData = {
      id: "",
      title: "",
      year: "",
      rating: "",
      director: "",
      writer: "",
      summary: "",
      imageURL: "",
    };
  
    const [newMovieData, setNewMovieData] = useState(initialMovieData);
  
    const changeHandler = (e) => {
      const { name, value } = e.target;
      setNewMovieData((newMovieData) => ({ ...newMovieData, [name]: value }));
    };
  
    const submitHandler = (e) => {
      e.preventDefault();
      setMoviesData([...moviesData, newMovieData]);
      setShowModal(false);
    };
  
    return (
      <Modal open={showModal} onClose={() => setShowModal(false)} className='add-movie'>
        <div className='new-movie-modal' style={{ display: showModal ? "block" : "none" }}>
          <div className='nm-title'>
            <h3>Add New Movie</h3>
            <div className='nm-close-icon'>
              <i onClick={() => setShowModal(false)} className="fa-solid fa-close icon-circle"></i>
            </div>
          </div>
          <form onSubmit={submitHandler}>
            <input type="text" name="title" placeholder="Title" value={newMovieData.title} onChange={changeHandler} />
            <input type="text" name="year" placeholder="Year" value={newMovieData.year} onChange={changeHandler} />
            {/* <input type="text" name="genre" placeholder="Genre" value={newMovieData.genre} onChange={changeHandler} /> */}
            <input type="text" name="rating" placeholder="Rating" value={newMovieData.rating} onChange={changeHandler} />
            <input type="text" name="director" placeholder="Director" value={newMovieData.director} onChange={changeHandler} />
            <input type="text" name="writer" placeholder="Writer" value={newMovieData.writer} onChange={changeHandler} />
            <textarea name="summary" placeholder="Summary" value={newMovieData.summary} onChange={changeHandler} />
            <input type="text" name="imageURL" placeholder="Image URL" value={newMovieData.imageURL} onChange={changeHandler} />
            <button type="submit">Add Movie</button>
          </form>
        </div>
      </Modal>
    );
  };
  
