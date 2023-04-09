
import React from 'react'
import{Routes, Route} from "react-router-dom"
import Loader from '../components/Loader'
import BallsPage from '../components/Play'
import Game from '../components/Game'
import Register from '../components/Register'
import Leaderboard from "../components/Leaderboard";
import Result from '../components/Result'


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
      <Route path="/leaderboard" element={<Leaderboard />}></Route>
      <Route path="register" element={<Register />}></Route>

    </Routes>
  );
};

export default Allroutes;
