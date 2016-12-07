import { connect } from 'react-redux'
import Board from '../components/Board'

const mapStateToProps = (state) => ({
  isGoingNext : state.isGoingNext,
  display     : state.display
})

const Scoreboard = connect(mapStateToProps)(Board)

export default Scoreboard
