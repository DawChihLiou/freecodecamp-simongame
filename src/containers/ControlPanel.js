import { connect } from 'react-redux'
import Controller from '../components/Controller'
import {
  setOnoff,
  setStart,
  setStrict,
  setPadClickability
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

        if (!toggle) {
          dispatch(setStart(false))
          dispatch(setStrict(false))
        } else {
          dispatch(setPadClickability(true))
        }
        break
      case 'start':
        if (state.onoff) dispatch(setStart(toggle))
        break;
      case 'strict':
        if (state.onoff) dispatch(setStrict(toggle))
        break;
      default:
        return
    }
  }
}

const ControlPanel = connect(
  mapStateToProps,
  mapDispatchToProps
) (Controller)

export default ControlPanel
