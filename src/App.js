import React from 'react'
import Controller from './components/Controller'
import Pad from './components/Pad'
import Scoreboard from './components/Scoreboard'
import './App.css'

const App = () => (
  <div className="container">
    <Pad />
    <Scoreboard />
    <Controller />
  </div>
)

export default App
