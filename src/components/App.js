import React from 'react'
import GamePad from '../containers/GamePad'
import Scoreboard from '../containers/Scoreboard'
import ControlPanel from '../containers/ControlPanel'
import Footer from './Footer'
import '../App.css'

const App = () => (
  <div className="container">
    <GamePad />
    <Scoreboard />
    <ControlPanel />
    <Footer />
  </div>
)

export default App
