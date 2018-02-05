import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/onboarding/App.js'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import reducers from '../store/onboarding/reducers'
import thunkMiddleware from 'redux-thunk'
import axios from 'axios'

axios.interceptors.request.use(config => {
  config.headers = {
    'X-CSRF-Token': document.getElementsByName('csrf-token')[0].content
  }
  return config
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)