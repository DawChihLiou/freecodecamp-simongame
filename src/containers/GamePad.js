import { connect } from 'react-redux'
import Pad from '../components/Pad'
import audio from '../utils/audio'
import {
  pushPlayerSequence,
  pushGameSequence,
  resetPlayerSequence,
  setDisplay,
  setIsGoingNext
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
        // push a new random number to game sequence and initiate displayed score change
        dispatch(pushGameSequence(Math.floor(Math.random() * 3)))
        dispatch(setIsGoingNext(true))

        state = getState()
        setTimeout(()=> {
          // displayed score change
          dispatch(setDisplay(state.gameSequence.length.toString()))
          dispatch(setIsGoingNext(false))

          // play the next sequence
          setTimeout(() => {
            playAudio(state.gameSequence)
          }, 800)
        }, 200)
      } else {
        dispatch(setDisplay('Wrong!!'))

        setTimeout(() => {
          // display current score
          dispatch(setDisplay(state.gameSequence.length.toString()))
          // play the current squence
          playAudio(state.gameSequence)
        }, 1000)
      }
      // reset player sequence for the next attempt
      dispatch(resetPlayerSequence())
    }
  }
}

function setTimeoutAudio (id, t) {
  setTimeout(() => { audio[id].play() }, t);
}
function playAudio (sequence) {
  sequence.forEach((id, i) => {
    setTimeoutAudio(id, (i + 1) * 500)
  })
}

const GamePad = connect(
  mapStateToProps,
  mapDispatchToProps
)(Pad)

export default GamePad
