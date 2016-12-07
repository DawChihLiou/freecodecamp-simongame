import { combineReducers } from 'react-immutable'
import Immutable from 'immutable'

const appReducer = combineReducers({

})

const rootReducer = (state, action) => {
  switch (action.type) {
    case 'RESET':
      state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer
