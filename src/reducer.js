import { combineReducers } from 'redux'
import {
  SET_PAD_CLICKABILITY,
  PUSH_PLAYER_SEQUENCE,
  RESET_PLAYER_SEQUENCE,
  PUSH_GAME_SEQUENCE,
  PLAY_GAME_SEQUENCE,
  SET_DISPLAY,
  SET_IS_GOING_NEXT,
  RESET
} from './actions'

const clickable = (state = true, action) => {
  switch (action.type) {
    case SET_PAD_CLICKABILITY:
      return action.clickable
    default:
      return state
  }
}

const playerSequence = (state = [], action) => {
  switch (action.type) {
    case PUSH_PLAYER_SEQUENCE:
      return [
        ...state,
        action.number
      ]
    case RESET_PLAYER_SEQUENCE:
      return []
    default:
      return state
  }
}

const gameSequence = (state = [1], action) => {
  switch (action.type) {
    case PUSH_GAME_SEQUENCE:
      return [
        ...state,
        action.number
      ]
    case PLAY_GAME_SEQUENCE:
    default:
      return state
  }
}

const display = (state = '1', action) => {
  switch (action.type) {
    case SET_DISPLAY:
      return action.display
    default:
      return state
  }
}

const isGoingNext = (state = false, action) => {
  switch (action.type) {
    case SET_IS_GOING_NEXT:
      return action.isGoingNext
    default:
      return state
  }
}

const appReducer = combineReducers({
  clickable,
  playerSequence,
  gameSequence,
  display,
  isGoingNext
})

const rootReducer = (state, action) => {
  switch (action.type) {
    case RESET:
      state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer
