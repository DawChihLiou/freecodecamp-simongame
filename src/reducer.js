import { combineReducers } from 'redux'
import {
  SET_PAD_CLICKABILITY,
  PUSH_PLAYER_COMBO
} from './actions'

const clickable = (state = true, action) => {
  switch (action.type) {
    case SET_PAD_CLICKABILITY:
      return action.clickable
    default:
      return state
  }
}

const playerCombo = (state = [], action) => {
  switch (action.type) {
    case PUSH_PLAYER_COMBO:
      return [
        ...state,
        action.number
      ]
    default:
      return state
  }
}

const appReducer = combineReducers({
  clickable,
  playerCombo
})

const rootReducer = (state, action) => {
  switch (action.type) {
    case 'RESET':
      state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer
