import './App.css';
import {Routes, Route} from "react-router-dom"
import { Home } from './pages/home/Home';
import { Watchlist } from './pages/watchlist/Watchlist';
import { Details } from './pages/details/Details';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/watchlist" element={<Watchlist/>} />
        <Route path="/details/:mID" element={<Details/>} />

      </Routes>

      <Toaster
        position="top-center"
        reverseOrder={false}
        containerStyle={{
          bottom: "1rem",
          right: "1rem",
          fontSize: "0.9rem",
        }}
      />
     
    </div>
  );
}

export default App;
