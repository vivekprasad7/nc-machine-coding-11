import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { movies } from "../api/data";
import { reducer } from "../reducers/reducers";

const AppContext = createContext();

export const AppContextProvider = ({children}) => {

    // const [moviesData, setMoviesData] = useState(movies);
    const [moviesData, setMoviesData] = useState(
        JSON.parse(localStorage.getItem("moviesData")) || movies
      );

    const initialState = {
        searchInput:"",
        genre:"",
        year:"",
        rating:"",
        watchList:[],
        starred:[],
    }


    const [state, dispatch] = useReducer(reducer, initialState)


    let filteredMovies;
    const getFilterMovies = () => {
        let filteredMovies = moviesData;

        if (state?.searchInput?.length !== 0){
            filteredMovies = filteredMovies.filter((item) => item.title.toLowerCase().includes(state?.searchInput?.toLowerCase()))
        }

        if (state?.genre?.length !== 0){
            filteredMovies = filteredMovies.filter((item) => item.genre.some((genre) => genre.toLowerCase().includes(state?.genre?.toLowerCase())) )
        }

        if(state?.year?.length !== 0){
            filteredMovies = filteredMovies.filter((item) => +item.year === +state?.year)
        }

        if(state?.rating?.length !== 0){
            filteredMovies = filteredMovies.filter((item) => +item.rating === +state?.rating)
        }


        return filteredMovies;

    }

    let newMovieData = getFilterMovies();

    useEffect(() => {
        localStorage.setItem("moviesData", JSON.stringify(moviesData));
      }, [moviesData]);


    return(<AppContext.Provider value={{
        moviesData,
        setMoviesData,
        state,
        dispatch, 
        filteredMovies,
        newMovieData,
    }}>{children}</AppContext.Provider>)
}

export const useAppContext = () => useContext(AppContext);