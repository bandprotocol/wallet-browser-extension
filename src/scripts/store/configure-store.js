import { createMemoryHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import rootReducer from './root-reducer'

const history = createMemoryHistory()

window.x = history

export const configureStore = (initialState = {}) => {
  /* Stack of middlewares to apply */
  const middlewares = [thunk, routerMiddleware(history)]

  const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    compose(applyMiddleware(...middlewares))
  )

  // Revive session
  // store.dispatch(revive())

  return store
}

export { history }
