import { connect } from 'react-redux'
import Pad from '../components/Pad'
import { audio, setTimeoutAudio } from '../utils/audio'
import {
  pushPlayerSequence,
  pushGameSequence,
  resetPlayerSequence,
  resetGameSequence,
  setDisplay,
  setIsGoingNext,
  setPadClickability
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
      dispatch(setPadClickability(false))

      if (state.playerSequence.join('') === state.gameSequence.join('')) {
        // correct player sequence

        // push a new random number to game sequence and initiate displayed score change
        dispatch(pushGameSequence(Math.floor(Math.random() * 3)))
        dispatch(setIsGoingNext(true))

        state = getState()

        setTimeout(()=> {
          // displayed score change
          dispatch(setDisplay(state.gameSequence.length.toString()))
          dispatch(setIsGoingNext(false))
        }, 200)

        // play the next sequence
        setTimeout(() => {
          playAudio(state.gameSequence, dispatch)
        }, 1000)
      } else {
        // incorrect play sequence

        dispatch(setDisplay(':('))

        if (state.strict) {
          dispatch(resetGameSequence())

          state = getState()

          setTimeout(() => {
            dispatch(setIsGoingNext(true))
          }, 800)

          setTimeout(() => {
            dispatch(pushGameSequence(Math.floor(Math.random() * 3)))
            state = getState()

            dispatch(setDisplay(state.gameSequence.length.toString()))
            dispatch(setIsGoingNext(false))
          }, 1600)

          setTimeout(() => {
            // display current score
            dispatch(setDisplay(state.gameSequence.length.toString()))
            // play the current squence
            playAudio(state.gameSequence, dispatch)
          }, 2600)
        } else {
          setTimeout(() => {
            // display current score
            dispatch(setDisplay(state.gameSequence.length.toString()))
            // play the current squence
            playAudio(state.gameSequence, dispatch)
          }, 1000)
        }



      }

      // reset player sequence for the next attempt
      dispatch(resetPlayerSequence())
    }
  }
}

function playAudio (sequence, dispatch) {
  sequence.forEach((id, i) => {
    let after = (i + 1) * 500
    setTimeoutAudio(id, after)

    if (i === sequence.length - 1) {
      setTimeout(() => {
        dispatch(setPadClickability(true))
      }, after + 100)
    }
  })
}

const GamePad = connect(
  mapStateToProps,
  mapDispatchToProps
)(Pad)

export default GamePad
