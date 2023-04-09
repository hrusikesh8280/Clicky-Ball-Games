
import React from 'react'
import{Routes, Route} from "react-router-dom"
import Loader from '../components/Loader'
import Result from '../components/Result'
import BallsPage from '../components/Play'
import Game from '../components/Game'
import Register from '../components/Register'
import Rating from '../components/Rating'
import Leaderboard from "../components/Leaderboard";


const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Loader />}>
        Loader Page
      </Route>
      <Route path="/menu" element={<Game />}>
        Game Page
      </Route>
      <Route path="/game" element={<BallsPage />}>
        Play
      </Route>
      <Route path="/result" element={<Result/>}>
       Result
      </Route>
    
      <Route path='rating' element={<Rating/>} />
      <Route path="/bord" element={<Leaderboard />}></Route>
      <Route path="register" element={<Register />}></Route>

    </Routes>
  );
};

export default Allroutes;
