import { connect } from 'react-redux'
import Controller from '../components/Controller'
import { audio, setTimeoutAudio } from '../utils/audio'
import {
  setOnoff,
  setStart,
  setStrict,
  setPadClickability,
  resetPlayerSequence,
  resetGameSequence,
  setDisplay,
  setIsGoingNext,
  pushGameSequence,
  setP0Shine,
  setP1Shine,
  setP2Shine,
  setP3Shine,
} from '../actions'

const mapStateToProps = (state) => ({
  onoff: state.onoff,
  start: state.start,
  strict: state.strict
})

const mapDispatchToProps = (dispatch, props) => ({
  onClick: (e) => {
    var id = e.target.id
    dispatch(handlePanel(id))
  }
})

function handlePanel (id) {
  return (dispatch, getState) => {
    var state = getState()
    var toggle= !state[id]

    console.log('click on %s and dispatching', id, toggle)

    switch (id) {
      case 'onoff':
        dispatch(setOnoff(toggle))
        dispatch(setIsGoingNext(true))

        if (!toggle) {
          // initiate display animation
          setTimeout(() => {
            dispatch(setDisplay('off'))
            dispatch(setIsGoingNext(false))
          }, 200)

          // turn off and reset the game
          dispatch(setStart(false))
          dispatch(setStrict(false))
          dispatch(setPadClickability(false))
          dispatch(resetPlayerSequence())
          dispatch(resetGameSequence())
        } else {
          // update display
          setTimeout(() => {
            dispatch(setDisplay('on'))
            dispatch(setIsGoingNext(false))
          }, 200)
        }
        break
      case 'start':
        if (!state.onoff) return

        dispatch(setIsGoingNext(true))

        if (!toggle) {
          // reset the game

          setTimeout(() => {
            dispatch(setDisplay('restart'))
            dispatch(setIsGoingNext(false))
          }, 200)

          // reset game
          dispatch(setPadClickability(false))
          dispatch(resetPlayerSequence())
          dispatch(resetGameSequence())
          dispatch(pushGameSequence(Math.floor(Math.random() * 3)))

          state = getState()

          setTimeout(() => {
            dispatch(setIsGoingNext(true))
          }, 1200)

          setTimeout(() => {
            dispatch(setDisplay(state.gameSequence.length.toString()))
            dispatch(setIsGoingNext(false))
          }, 2000)

          setTimeout(() => {
            playAudio(state.gameSequence.slice(0, 1), dispatch)
            dispatch(setPadClickability(true))
          }, 3000)
        } else {
          // start the game

          dispatch(setStart(toggle))
          dispatch(pushGameSequence(Math.floor(Math.random() * 3)))

          state = getState()

          // update display
          setTimeout(() => {
            dispatch(setDisplay(state.gameSequence.length.toString()))
            dispatch(setIsGoingNext(false))
          }, 200)

          // play audio and enable click on pad
          setTimeout(() => {
            playAudio(state.gameSequence.slice(0, 1), dispatch)
            dispatch(setPadClickability(true))
          }, 1000)
        }
        break;
      case 'strict':
        if (!state.onoff) return

        dispatch(setStrict(toggle))
        dispatch(setIsGoingNext(true))
        dispatch(setPadClickability(false))

        if (!toggle) {
          // normal mode
          setTimeout(() => {
            dispatch(setDisplay('normal'))
            dispatch(setIsGoingNext(false))
          }, 800)

          if (!state.start) return

          setTimeout(() => {
            dispatch(setIsGoingNext(true))
          }, 1600)

          setTimeout(() => {
            dispatch(setDisplay(state.gameSequence.length.toString()))
            dispatch(setIsGoingNext(false))
          }, 2400)

          setTimeout(() => {
            dispatch(setPadClickability(true))
          }, 2600)
        } else {
          // strict mode
          setTimeout(() => {
            dispatch(setDisplay('strict'))
            dispatch(setIsGoingNext(false))
          }, 800)

          if (!state.start) return

          setTimeout(() => {
            dispatch(setIsGoingNext(true))
          }, 1600)

          setTimeout(() => {
            dispatch(setDisplay(state.gameSequence.length.toString()))
            dispatch(setIsGoingNext(false))
          }, 2400)

          setTimeout(() => {
            dispatch(setPadClickability(true))
          }, 2600)
        }

        break;
      default:
        return
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


const ControlPanel = connect(
  mapStateToProps,
  mapDispatchToProps
) (Controller)

export default ControlPanel
