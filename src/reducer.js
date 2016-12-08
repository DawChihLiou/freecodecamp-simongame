import { combineReducers } from 'redux'
import {
  SET_PAD_CLICKABILITY,
  PUSH_PLAYER_SEQUENCE,
  RESET_PLAYER_SEQUENCE,
  PUSH_GAME_SEQUENCE,
  PLAY_GAME_SEQUENCE,
  RESET_GAME_SEQUENCE,
  SET_DISPLAY,
  SET_IS_GOING_NEXT,
  SET_ONOFF,
  SET_START,
  SET_STRICT,
  SET_P0_SHINE,
  SET_P1_SHINE,
  SET_P2_SHINE,
  SET_P3_SHINE,
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

const gameSequence = (state = [], action) => {
  switch (action.type) {
    case PUSH_GAME_SEQUENCE:
      return [
        ...state,
        action.number
      ]
    case RESET_GAME_SEQUENCE:
      return []
    case PLAY_GAME_SEQUENCE:
    default:
      return state
  }
}

const display = (state = '', action) => {
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

const p0Shine = (state = false, action) => {
  switch (action.type) {
    case SET_P0_SHINE:
      return action.shine
    default:
      return state
  }
}

const p1Shine = (state = false, action) => {
  switch (action.type) {
    case SET_P1_SHINE:
      return action.shine
    default:
      return state
  }
}

const p2Shine = (state = false, action) => {
  switch (action.type) {
    case SET_P2_SHINE:
      return action.shine
    default:
      return state
  }
}

const p3Shine = (state = false, action) => {
  switch (action.type) {
    case SET_P3_SHINE:
      return action.shine
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
  strict,
  p0Shine,
  p1Shine,
  p2Shine,
  p3Shine,
})

const rootReducer = (state, action) => {
  if (action.type === RESET) state = undefined

  return appReducer(state, action)
}

export default rootReducer
