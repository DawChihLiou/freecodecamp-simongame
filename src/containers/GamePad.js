import { connect } from 'react-redux'
import Pad from '../components/Pad'
import { audio } from '../utils/audio'
import {
  pushPlayerSequence,
  pushGameSequence,
  resetPlayerSequence,
  resetGameSequence,
  setDisplay,
  setIsGoingNext,
  setPadClickability,
  setP0Shine,
  setP1Shine,
  setP2Shine,
  setP3Shine,
} from '../actions'

const mapStateToProps = (state) => ({
  clickable: state.clickable,
  p0Shine: state.p0Shine,
  p1Shine: state.p1Shine,
  p2Shine: state.p2Shine,
  p3Shine: state.p3Shine
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
    let after = (i + 1) * 800

    setTimeout(() => {
      audio[id].play()

      dispatch(setP0Shine(false))
      dispatch(setP1Shine(false))
      dispatch(setP2Shine(false))
      dispatch(setP3Shine(false))

      switch (id) {
        case 0:
          dispatch(setP0Shine(true))
          break;
        case 1:
          dispatch(setP1Shine(true))
          break;
        case 2:
          dispatch(setP2Shine(true))
          break;
        case 3:
          dispatch(setP3Shine(true))
          break;
        default:
          return
      }

    }, after)

    if (i === sequence.length - 1) {
      setTimeout(() => {
        dispatch(setP0Shine(false))
        dispatch(setP1Shine(false))
        dispatch(setP2Shine(false))
        dispatch(setP3Shine(false))
        dispatch(setPadClickability(true))
      }, after + 800)
    }
  })
}

const GamePad = connect(
  mapStateToProps,
  mapDispatchToProps
)(Pad)

export default GamePad
