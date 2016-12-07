import { connect } from 'react-redux'
import Pad from '../components/Pad'
import {
  pushPlayerSequence
} from '../actions'

const mapStateToProps = (state) => ({
  clickable: state.clickable
})

const mapDispatchToProps = (dispatch) => {
  var audio = {
    0: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
    1: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
    2: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
    3: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
  }

  return {
    onClick: e => {
      let id = e.target.id.split('-')[1]
      // play audio
      audio[id].play()
      // record sequence
      dispatch(pushPlayerSequence(id))
    }
  }
}

const GamePad = connect(
  mapStateToProps,
  mapDispatchToProps
)(Pad)

export default GamePad
