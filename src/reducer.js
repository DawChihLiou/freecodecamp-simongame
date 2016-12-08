import { combineReducers } from 'redux'
import {
  SET_PAD_CLICKABILITY,
  PUSH_PLAYER_SEQUENCE,
  RESET_PLAYER_SEQUENCE,
  PUSH_GAME_SEQUENCE,
  PLAY_GAME_SEQUENCE,
  SET_DISPLAY,
  SET_IS_GOING_NEXT,
  SET_ONOFF,
  SET_START,
  SET_STRICT,
  RESET
} from './actions'

const clickable = (state = false, action) => {
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

const onoff = (state = false, action) => {
  switch (action.type) {
    case SET_ONOFF:
      return action.onoff
    default:
      return state
  }
}

const start = (state = false, action) => {
  switch (action.type) {
    case SET_START:
      return action.start
    default:
      return state
  }
}

const strict = (state = false, action) => {
  switch (action.type) {
    case SET_STRICT:
      return action.strict
    default:
      return state
  }
}

const appReducer = combineReducers({
  clickable,
  playerSequence,
  gameSequence,
  display,
  isGoingNext,
  onoff,
  start,
  strict
})

const rootReducer = (state, action) => {
  if (action.type === RESET) state = undefined

  return appReducer(state, action)
}

export default rootReducer
