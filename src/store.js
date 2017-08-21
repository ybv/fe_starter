import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './reducers'

export const history = createHistory({
  basename: '/appName'
})

const initialState = {}
const enhancers = []
let middleware = [
  thunk,
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension
  middleware = [
    thunk,
    logger,
  ]
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)

export default store
