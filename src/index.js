import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from './reducer'
import App from './components/App'
import './index.css'

const logger = createLogger()
const configureStore = () => {
  return createStore(
    reducer,
    applyMiddleware(thunk, logger)
  )
}

const store = configureStore()

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
)
