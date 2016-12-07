import { connect } from 'react-redux'
import Pad from '../components/Pad'
import audio from '../utils/audio'
import {
  pushPlayerSequence,
  pushGameSequence,
  resetPlayerSequence,
  setDisplay
} from '../actions'

const mapStateToProps = (state) => ({
  clickable: state.clickable
})

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: e => {
      let id = e.target.id.split('-')[1]
      // play audio
      audio[id].play()
      // record sequence
      dispatch(handlePlayerSequence(id))
    }
  }
}

function handlePlayerSequence (id) {
  return (dispatch, getState) => {
    var state
    //update sequence
    dispatch(pushPlayerSequence(id))
    state = getState()
    // compare player seuqence with game sequence
    if (state.playerSequence.length === state.gameSequence.length) {
      if (state.playerSequence.join('') === state.gameSequence.join('')) {
        dispatch(pushGameSequence(Math.floor(Math.random() * 3)))
        dispatch(setDisplay(state.gameSequence.length))
      }
      dispatch(resetPlayerSequence())
    }
  }
}

const GamePad = connect(
  mapStateToProps,
  mapDispatchToProps
)(Pad)

export default GamePad
