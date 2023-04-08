import React from 'react'
import{Routes, Route} from "react-router-dom"
import Loader from '../components/Loader'
import Result from '../components/Result'
import BallsPage from '../components/Play'
import Game from '../components/Game'


const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Loader/>}>
       Loader Page
      </Route>
      <Route path="/menu" element={<Game/>}>
       Game Page
      </Route>
      <Route path="/game" element={<BallsPage/>}>
       Play
      </Route>
      <Route path="/result" element={<Result/>}>
       Result
      </Route>
    </Routes>
  )
}

export default Allroutes