import React from 'react'
import Controller from './Controller'
import GamePad from '../containers/GamePad'
import Scoreboard from '../containers/Scoreboard'
import '../App.css'

const App = () => (
  <div className="container">
    <GamePad />
    <Scoreboard />
    <Controller />
  </div>
)

export default App
