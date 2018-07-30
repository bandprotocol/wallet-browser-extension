import { createMemoryHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import rootReducer from './root-reducer'
import { reviveVault } from '~/store/app/Vault/action'

const history = createMemoryHistory()

window.x = history

export const configureStore = async (initialState = {}) => {
  /* Stack of middlewares to apply */
  const middlewares = [thunk, routerMiddleware(history)]

  const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    compose(applyMiddleware(...middlewares))
  )

  // Revive session
  await store.dispatch(reviveVault())

  // Expose store for debugging
  window.store = store

  return store
}

export { history }
