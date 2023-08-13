import { toast } from "react-hot-toast";

const initialState = {
    searchInput:"",
    genre:"",
    year:"",
    rating:"",
}

export const reducer = (state, action) => {
    switch (action.type) {
      case "FILTER_BY_SEARCH":
        return { ...state, searchInput: action.payload };
      case "FILTER_BY_GENRE":
        return { ...state, genre: action.payload };
      case "FILTER_BY_YEAR":
        return { ...state, year: action.payload };
      case "FILTER_BY_RATING":
        return { ...state, rating: action.payload };
      case "ADD_TO_WATCHLIST": {
        console.log(state?.watchList)
        if (!state.watchList.find(movie => movie.id === action.payload.id)) {
          return { ...state, watchList: [...state.watchList, action.payload] };
        }
        toast.success("Movie Added To WatchList")
        return state;

      }
      case "ADD_TO_STARRED": {
        console.log(state?.starred)
        if (!state.starred.find(movie => movie.id === action.payload.id)) {
          return { ...state, starred: [...state.starred, action.payload] };
        }
        toast.success("Movie Added To Starred List")
        return state;
      }
      default:
        return state;
    }
  };
  